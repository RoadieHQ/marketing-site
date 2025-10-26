import React, { useState, useEffect } from 'react';
import { Title, Chip, Button, SidebarTableOfContents, Link } from 'components';

import { PAGE_PATHS } from '../../../../contactFormConstants';
import MaintainersList from './MaintainersList';
import NpmDetailsList from './NpmDetailsList';
import Links from './Links';
import parsePackageData from './parsePackageData';
import fetchPackageDataByName from './fetchPackageDataByName';
import pluginPackageNameForStats from '../../../../packageData/pluginPackageNameForStats.mjs';

const Category = ({ plugin }) => {
  const { category } = plugin;
  if (!category) return null;
  return (
    <div className="p-6 bg-gray-100 rounded-lg mb-6">
      <div className="mb-4">
        <Title>Category</Title>
      </div>
      <Link to={`/backstage/plugins/?category=${category.searchParam}`} className="inline-block">
        <Chip label={category.name} title={category.description} />
      </Link>
    </div>
  );
};

const Sidebar = ({ plugin, pageSections }) => {
  const { packageName } = pluginPackageNameForStats(plugin);
  const [npmData, setPackageData] = useState({});
  const [npmDataLoadingState, setPackageDataLoadingState] = useState('unloaded');

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
      <NpmDetailsList npmData={npmData} npmDataLoadingState={npmDataLoadingState} />
      <Links plugin={plugin} />
      <Category plugin={plugin} />
      <MaintainersList npmData={npmData} npmDataLoadingState={npmDataLoadingState} />

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
