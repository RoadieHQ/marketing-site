import { storeBackstagePluginNpmData } from '../../src/pageCreation/storeBackstagePluginNpmPackageNames';

export default async () => {
  const resp = await storeBackstagePluginNpmData({ authStrategy: 'automatic' });

  return new Response({
    resp,
  });
};
