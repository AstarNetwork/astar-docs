import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { BreakPointHooks } from "@react-hooks-library/core";
import { useEffect, useState } from "react";
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
  const { siteConfig } = useDocusaurusContext();
  const tabs = siteConfig.customFields.tabs as Tab[];
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isGreater = useGreater("lg");

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

  const activeTab = tabs[activeTabIndex];
  return (
    <div className={styles.wrapper}>
      <CategoryTitle
        title={activeTab.label}
        handler={handleMenuOpen}
        isVisible={!isMenuOpen}
        iconName={activeTab.iconCssVarName}
      />
      {/* <div className={styles.articles}>
        <div className={styles.dummyArticle}>Article 1</div>
        <div className={styles.dummyArticle}>Article 2</div>
        <div className={styles.dummyArticle}>Article 3</div>
      </div> */}
      {isMenuOpen && (
        <CategoryList
          tabs={tabs}
          setActiveTabIndex={handleMenuSelect}
          handleClose={handleMenuClose}
        />
      )}
    </div>
  );
}

function CategoryList({
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