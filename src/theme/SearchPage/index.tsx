import React from 'react';
import { DocSearch } from '@docsearch/react';
import { useAlgoliaContextualFacetFilters, useSearchResultUrlProcessor } from '@docusaurus/theme-search-algolia/client';
import { useSearchLinkCreator } from '@docusaurus/theme-common';
import { isRegexpStringMatch } from '@docusaurus/theme-common';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useHistory } from '@docusaurus/router';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

function Hit({ hit, children }: { hit: any; children: React.ReactNode }) {
  return <Link to={hit.url}>{children}</Link>;
}

function ResultsFooter({ state, onClose }: { state: any; onClose: () => void }) {
  const createSearchLink = useSearchLinkCreator();
  return (
    <Link to={createSearchLink(state.query)} onClick={onClose}>
      <Translate id="theme.SearchPage.seeAll" values={{ count: state.context.nbHits }}>
        {'See all {count} results'}
      </Translate>
    </Link>
  );
}

function mergeFacetFilters(f1: any, f2: any) {
  const normalize = (f: any) => (typeof f === 'string' ? [f] : f);
  return [...normalize(f1), ...normalize(f2)];
}

export default function SearchPage(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const { algolia } = siteConfig.themeConfig;
  const processSearchResultUrl = useSearchResultUrlProcessor();
  const contextualSearchFacetFilters = useAlgoliaContextualFacetFilters();
  const configFacetFilters = algolia.searchParameters?.facetFilters ?? [];
  const facetFilters = algolia.contextualSearch
    ? mergeFacetFilters(contextualSearchFacetFilters, configFacetFilters)
    : configFacetFilters;

  const searchParameters = {
    ...algolia.searchParameters,
    facetFilters,
  };

  const history = useHistory();

  const navigator = {
    navigate({ itemUrl }: { itemUrl: string }) {
      if (isRegexpStringMatch(algolia.externalUrlRegex, itemUrl)) {
        window.location.href = itemUrl;
      } else {
        history.push(itemUrl);
      }
    },
  };

  const transformItems = (items: any[]) =>
    algolia.transformItems
      ? algolia.transformItems(items)
      : items.map((item) => ({
          ...item,
          url: processSearchResultUrl(item.url),
        }));

  const transformSearchClient = (searchClient: any) => {
    searchClient.addAlgoliaAgent('docusaurus', siteConfig.docusaurusVersion);
    return searchClient;
  };

  return (
    <Layout title="Search">
      <div style={{ padding: '2rem' }}>
        <DocSearch
          {...algolia}
          searchParameters={searchParameters}
          navigator={navigator}
          transformItems={transformItems}
          transformSearchClient={transformSearchClient}
          hitComponent={Hit}
          resultsFooterComponent={ResultsFooter}
        />
      </div>
    </Layout>
  );
} 