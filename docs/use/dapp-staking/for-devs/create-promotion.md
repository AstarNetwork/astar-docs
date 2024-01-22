---
sidebar_position: 4
---

import Figure from '/src/components/figure'

# Create a promotion card on top page

If you have a campaign or new product you would like to share in the community, this will help you spread the news. It will create a card which will be shown on the top of the dApp Staking page as well as the Portal asset page.

You can create a PR once a month, at most.

<Figure src={require('/docs/use/dapp-staking/for-devs/img/Promotion_card_1.png').default} width="100%" />

# Steps for creating a PR for the promotion card

- Fork our [astar-apps](https://github.com/AstarNetwork/astar-apps) repository.

- Find a file [dapp_promotion.json](https://github.com/AstarNetwork/astar-apps/blob/main/src/data/dapp_promotions.json) and put a promotion details there.

- add a promotion image to [public/images/dapp_promotions](https://github.com/AstarNetwork/astar-apps/tree/main/public/images/dapp_promotions) folder.

- Create a PR to the <code>release-hotfix</code> branch in [astar-apps](https://github.com/AstarNetwork/astar-apps).


:::info
- **Image must be 16:9 and recommended size is less than 1MB**.
- **Description is limited to 65 characters maximum**.
- Your PR will be merged after being reviewed by the dApp Staking operation team.
- Card can be removed at any time, for any reason, at the discretion of the operation team.
- Multiple PRs or more than one PR within a month from the same team will not be approved.
:::

