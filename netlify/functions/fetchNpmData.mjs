import { storePackageData } from '../../src/npmPackageData';

export default async () => {
  const resp = await storePackageData({ authStrategy: 'automatic' });

  return new Response({
    resp,
  });
};
