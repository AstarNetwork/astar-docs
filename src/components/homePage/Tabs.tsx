import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { BreakPointHooks } from "@react-hooks-library/core";
import { useEffect, useState } from "react";
import { ArrowRightIcon, AstarButton } from "../AstarButton/AstarButton";
import styles from "./tabs.module.css";
interface Tab {
  label: string;
  id: string;
  content: TabContent[];
  highlight: Highlight;
  iconCssVarName: string;
}

interface TabContent {
  title: string;
  caption: string;
  url: string;
}

type Highlight = {
  single?: Single;
  multi?: Multi[];
};

interface Single {
  title: string;
  caption: string;
  buttonText: string;
  buttonUrl: string;
}

interface Multi {
  title: string;
  subtitle: string;
  icon: string | null;
  url: string;
}

const { useGreater } = BreakPointHooks({ lg: 996 });

export function Tabs(): JSX.Element {
  const [activeTabIndex, setActiveTabIndex] = useState(3);
  const isGreater = useGreater("lg");
  const { siteConfig } = useDocusaurusContext();

  const tabs = siteConfig.customFields.tabs as Tab[];

  const activeTab = tabs[activeTabIndex];
  if (isGreater) {
    return (
      <div className={styles.menuWrapper}>
        <TabsMenu activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex} />
        <TabContent articles={activeTab.content} highlight={activeTab.highlight} />
      </div>
    );
  }

  return (
    <div className={styles.menuWrapper}>
      <DropDownMenu activeTabIndex={activeTabIndex} setActiveTabIndex={setActiveTabIndex} />
      <TabContent articles={activeTab.content} highlight={activeTab.highlight} />
    </div>
  );
}

function TabContent({
  articles,
  highlight,
}: { articles: TabContent[]; highlight: Highlight }): JSX.Element {
  return (
    <div className={styles.contentWrapper}>
      {articles.map((article) => (
        <div key={article.title} className={styles.article}>
          <a href={article.url}>
            <h3>{article.title}</h3>
          </a>
          <p>{article.caption}</p>
        </div>
      ))}
      <ArticleHighlight content={highlight} />
    </div>
  );
}

function TabsMenu({
  activeTabIndex,
  setActiveTabIndex,
}: { activeTabIndex: number; setActiveTabIndex: (index: number) => void }) {
  return (
    <div>
      <AstarButton>
        <span className={styles.astarButtonText}>Click me</span>
      </AstarButton>
    </div>
  );
}
function DropDownMenu({
  activeTabIndex,
  setActiveTabIndex,
}: { activeTabIndex: number; setActiveTabIndex: (index: number) => void }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { siteConfig } = useDocusaurusContext();

  const tabs = siteConfig.customFields.tabs as Tab[];

  const activeTab = tabs[activeTabIndex];
  function handleMenuOpen() {
    setIsMenuOpen(true);
  }

  function handleMenuClose() {
    setIsMenuOpen(false);
  }

  function handleMenuSelect(activeTabIndex: number) {
    setActiveTabIndex(activeTabIndex);
    setIsMenuOpen(false);
  }

  return (
    <>
      <CategoryTitle
        title={activeTab.label}
        handler={handleMenuOpen}
        isVisible={!isMenuOpen}
        iconName={activeTab.iconCssVarName}
      />
      {isMenuOpen && (
        <DropDownList
          tabs={tabs}
          setActiveTabIndex={handleMenuSelect}
          handleClose={handleMenuClose}
        />
      )}
    </>
  );
}

function DropDownList({
  tabs,
  setActiveTabIndex,
  handleClose,
}: {
  tabs: Tab[];
  setActiveTabIndex: (index: number) => void;
  handleClose: () => void;
}): JSX.Element {
  return (
    <div className={styles.menuModal}>
      <button className={styles.closeButton} type="button" onClick={handleClose}>
        X
      </button>
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          onClick={() => setActiveTabIndex(index)}
          type="button"
          className={styles.menuItem}
        >
          <div
            className={styles.buttonIcon}
            style={{
              backgroundImage: `var(--${tab.iconCssVarName})`,
            }}
          />
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}

function CategoryTitle({
  title,
  handler,
  isVisible,
  iconName,
}: {
  title: string;
  handler: () => void;
  isVisible: boolean;
  iconName: string;
}): JSX.Element {
  return (
    <button
      className={`${styles.categoryButton} ${isVisible ? "" : styles.fadeOut}`}
      onClick={handler}
      type="button"
    >
      <div
        className={styles.buttonIcon}
        style={{
          backgroundImage: `var(--${iconName})`,
        }}
      />
      <span>{title}</span>
      <span className={styles.arrow}>⌄</span>
    </button>
  );
}

function ArticleHighlight({ content }: { content: Highlight }) {
  const { single, multi } = content;
  if (single) {
    return (
      <div className={styles.highlightWrapper}>
        <h3>{single.title}</h3>
        <p>{single.caption}</p>
        <AstarButton href={single.buttonUrl}>
          <span className={styles.astarButtonText}>{single.buttonText}</span>
        </AstarButton>
      </div>
    );
  }

  if (multi) {
    return (
      <div className={styles.column}>
        {multi.map((block, index) => (
          <a
            className={styles.highlightWrapper}
            key={`${index}_${block.title}`}
            href={block.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className={styles.row}>
              <div className={styles.multiCta}>
                <span>{block.subtitle}</span>
                <h3>
                  {block.icon && <img src={block.icon} alt="social icon" />}
                  <span>{block.title}</span>
                </h3>
              </div>
              <div className={styles.arrowWrapper}>
                <ArrowRightIcon arrowClass={styles.highlightArrow} />
              </div>
            </div>
          </a>
        ))}
      </div>
    );
  }
}