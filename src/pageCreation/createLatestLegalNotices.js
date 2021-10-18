const has = require('lodash/has');
const map = require('lodash/map');
const get = require('lodash/get');

const { LEGAL_NOTICES_QUERY } = require('../queries/gatsbyNodeQueries');

/*
 * Legal notices are immutable and versioned so they show up under different routes such as
 * \/legal-noices\/sub-processors\/v1\/. This is good because people can go back in time and
 * look at different versions of the legal notices we have used.
 *
 * At the same time, it is useful to quickly be able to see what the latest version of a
 * legal notice is. This is the version we want to link to in the sidebar of the legal notices
 * page.
 *
 * This function finds all different types of legal notices, then figures out the latest one
 * based on the version number, then makes that the "default" one.
 */
const createLatestLegalNotices = async ({ graphql, actions: { createRedirect } }) => {
  const { data, errors } = await graphql(LEGAL_NOTICES_QUERY);

  if (errors) {
    throw errors;
  }

  const maxVersionForType = get(data, 'notices.edges').reduce((accumulator, edge) => {
    const matches = edge.node.fields.slug.match(/\/legal-notices\/([\w-]+)\/v(\d+)\//);
    const noticeType = matches[1];
    const version = parseInt(matches[2]);

    if (!has(accumulator, noticeType) || version > accumulator[noticeType]) {
      accumulator[noticeType] = version;
    }

    return accumulator;
  }, {});

  map(maxVersionForType, (maxVersion, noticeType) => {
    createRedirect({
      fromPath: `/legal-notices/${noticeType}/`,
      toPath: `/legal-notices/${noticeType}/v${maxVersion}/`,
      isPermanent: true,
    });

    createRedirect({
      fromPath: `/tailwind/legal-notices/${noticeType}/`,
      toPath: `/tailwind/legal-notices/${noticeType}/v${maxVersion}/`,
      isPermanent: true,
    });
  });
};

module.exports = createLatestLegalNotices;
