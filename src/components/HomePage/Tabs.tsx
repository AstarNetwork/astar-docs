import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { BreakPointHooks } from "@react-hooks-library/core";
import { useEffect, useMemo, useRef, useState } from "react";
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
  const { siteConfig } = useDocusaurusContext();
  const tabs = siteConfig.customFields.tabs as Tab[];
  const activeTabElementRef = useRef(null);

  function handleKeyUp(event: React.KeyboardEvent<HTMLButtonElement>) {
    if (event.key === "ArrowRight") {
      const nextIndex = activeTabIndex + 1;
      if (nextIndex < tabs.length) {
        setActiveTabIndex(nextIndex);
      }
    }
    if (event.key === "ArrowLeft") {
      const nextIndex = activeTabIndex - 1;
      if (nextIndex >= 0) {
        setActiveTabIndex(nextIndex);
      }
    }
  }

  return (
    <div className={styles.tabMenuWrapper}>
      {tabs.map((tab, index) => (
        <button
          key={tab.id}
          type="button"
          data-tab={tab.label}
          className={`${styles.tabButton} ${activeTabIndex === index ? styles.active : ""}`}
          onClick={() => setActiveTabIndex(index)}
          onKeyUp={handleKeyUp}
          style={
            {
              "--active-bg-color":
                "linear-gradient(to right, var(--gradient-start), var(--gradient-end))",
              "--inactive-bg-color": "none",
            } as React.CSSProperties
          }
        >
          <div
            className={styles.buttonIcon}
            style={{
              backgroundImage:
                activeTabIndex === index
                  ? `var(--${tab.iconCssVarName}-dark)`
                  : `var(--${tab.iconCssVarName})`,
            }}
          />
          <span>{tab.label}</span>
        </button>
      ))}
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
        <CloseIcon />
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
      <OpenIcon />
    </button>
  );
}

function OpenIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 21">
      <title>Open</title>
      <path
        stroke="currentColor"
        fill="currentColor"
        clip-rule="evenodd"
        d="M5.29289 7.79289C5.68342 7.40237 6.31658 7.40237 6.7071 7.79289L9.99999 11.0858L13.2929 7.79289C13.6834 7.40237 14.3166 7.40237 14.7071 7.79289C15.0976 8.18342 15.0976 8.81658 14.7071 9.20711L10.7071 13.2071C10.3166 13.5976 9.68341 13.5976 9.29289 13.2071L5.29289 9.20711C4.90237 8.81658 4.90237 8.18342 5.29289 7.79289Z"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
      <title>Close</title>
      <path
        stroke="currentColor"
        d="M5 15L15 5M5 5L15 15"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
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