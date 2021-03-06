import React from 'react';

import SubPageLayout from '~components/subPageLayout';
import Source from '~components/source';
import ButtonGroup from '~components/buttonGroup';
import ItemTable from '~components/itemTable';

const MiningResources = ({ pageContext: { i18n } }) => {
  const top5 = i18n.yaml.pools.filter(p => p.rank).sort((a, b) => a.rank - b.rank);
  return (
    <SubPageLayout i18n={i18n}>
      <ItemTable
        header={i18n.softwareTitle}
        items={i18n.yaml.software}
        columns={[
          { key: 'name', name: i18n.name, type: 'link' },
          { key: 'windowsAmd', name: i18n.windowsAmd, type: 'check', className: 'text-center' },
          {
            key: 'windowsNvidia',
            name: i18n.windowsNvidia,
            type: 'check',
            className: 'text-center'
          },
          { key: 'linuxAmd', name: i18n.linuxAmd, type: 'check', className: 'text-center' },
          { key: 'linuxNvidia', name: i18n.linuxNvidia, type: 'check', className: 'text-center' },
          {
            key: 'guide',
            linkKey: 'guide',
            name: i18n.tutorial,
            text: i18n.guide,
            type: 'button',
            icon: 'book'
          }
        ]}
      />
      <ButtonGroup header={i18n.top5Pools} items={top5} />
      <ButtonGroup header={i18n.detailedPools} items={i18n.yaml.pools} />
      <Source to="https://miningpoolstats.stream/ethereumclassic" text="MiningPoolStats.stream" />
    </SubPageLayout>
  );
};

export default MiningResources;
