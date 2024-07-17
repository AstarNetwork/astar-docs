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

  function handleMenuButtonClick() {
    setIsMenuOpen((prev) => !prev);
  }

  const activeTab = tabs[activeTabIndex];
  return (
    <div className={styles.categoryList}>
      <CategoryTitle
        title={activeTab.label}
        handler={handleMenuButtonClick}
        isVisible={!isMenuOpen}
        iconName={activeTab.iconCssVarName}
      />
      <div className={styles.articles}>
        <div className={styles.dummyArticle}>Article 1</div>
        <div className={styles.dummyArticle}>Article 2</div>
        <div className={styles.dummyArticle}>Article 3</div>
      </div>
      {isMenuOpen && (
        <div className={styles.menuModal}>
          <div className={styles.menuItem}>Category 1</div>
          <div className={styles.menuItem}>Category 2</div>
          <div className={styles.menuItem}>Category 3</div>
          <div className={styles.menuItem}>Category 4</div>
          <div className={styles.menuItem}>Category 5</div>
        </div>
      )}
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