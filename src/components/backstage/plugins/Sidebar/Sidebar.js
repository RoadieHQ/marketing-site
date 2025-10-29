import React, { useState, useEffect } from 'react';
import { Button, SidebarTableOfContents } from 'components';

import { PAGE_PATHS } from '../../../../contactFormConstants';
import MaintainersList from './MaintainersList';
import NpmDetailsList from './NpmDetailsList';
import Links from './Links';
import parsePackageData from './parsePackageData';
import fetchPackageDataByName from './fetchPackageDataByName';
import pluginPackageNameForStats from '../../../../packageData/pluginPackageForStats.mjs';
import Category from '../../Category';

const PluginCategory = ({ plugin }) => {
  return <Category item={plugin} basePath="/backstage/plugins" />;
};

const Sidebar = ({ plugin, pageSections }) => {
  const { packageName } = pluginPackageNameForStats(plugin);
  const [packageData, setPackageData] = useState({});
  const [packageDataLoadingState, setPackageDataLoadingState] = useState('unloaded');

  useEffect(() => {
    (async () => {
      setPackageDataLoadingState('loading');
      const { status, data } = await fetchPackageDataByName({
        packageName,
      });
      setPackageDataLoadingState(status);
      setPackageData(parsePackageData(data));
    })();
  }, [packageName]);

  return (
    <>
      <SidebarTableOfContents content={plugin} pageSections={pageSections} />
      <NpmDetailsList packageData={packageData} packageDataLoadingState={packageDataLoadingState} />
      <Links plugin={plugin} />
      <PluginCategory plugin={plugin} />
      <MaintainersList packageData={packageData} packageDataLoadingState={packageDataLoadingState} />

      <div className="p-6 bg-gray-700 rounded-lg sticky top-10">
        <p className="text-white text-base mb-3">
          Want a Backstage based developer portal that works out-of-the-box?
        </p>

        <Button
          link={true}
          color="primary"
          fullWidth={true}
          size="small"
          to={PAGE_PATHS.requestDemo}
          text="Get a demo"
        />
      </div>
    </>
  );
};

export default Sidebar;
