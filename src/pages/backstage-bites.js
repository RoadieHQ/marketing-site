import React from 'react';
import { graphql } from 'gatsby';
import classnames from 'classnames';
import get from 'lodash/get';

import { SEO, Page, Link } from 'components';
import { ListHeader } from 'components/article';

const TitleAndDescription = ({ video }) => (
  <Link to={`/backstage-bites/${video.slug}`} className="block mt-4">
    <p className="text-xl font-semibold text-gray-900 hover:underline">{video.title}</p>
    <div
      className="mt-3 text-base text-gray-500"
      dangerouslySetInnerHTML={{ __html: get(video, 'shortDescription.childMarkdownRemark.html') }}
    />
  </Link>
);


const Thumbnail = ({ video }) => {
  const images = get(video, 'thumbnail.gatsbyImageData.images');
  const className = 'h-64 w-full object-cover bg-gray-200';
  if (!images) return <div className={className} />

  return (
    <img
      className={className}
      srcSet={images.sources[0].srcSet}
      sizes={images.sources[0].sizes}
      src={images.fallback.src}
      alt={video.thumbnail.title}
    />
  );
};

const VideoSummary = ({ video, className }) => (
  <div
    className={classnames('flex flex-col rounded-lg shadow-lg overflow-hidden', className)}>
    <div className="flex-shrink-0 relative">
      <Link to={`/backstage-bites/${video.slug}/`}>
        <Thumbnail video={video} />
      </Link>
    </div>

    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <TitleAndDescription video={video} />
      </div>
    </div>
  </div>
);

const BackstageBites = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const videos = data.allContentfulVideo.nodes;
  console.log('videos', videos);

  return (
    <>
      <SEO
        title={`Backstage Bites | ${siteTitle}`}
        description={`
          Backstage content. Everything from technical how-tos to recaps of community sessions and 
          general engineering effectiveness content.
        `}
      />

      <Page>
        <ListHeader
          title="Backstage Bites"
          description="Learn to use Backstage and Roadie with short video lessons"
        />

        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {videos.map((video) => (
            <VideoSummary key={video.slug} video={video} />
          ))}
        </div>
      </Page>
    </>
  );
};

export default BackstageBites;

export const pageQuery = graphql`
  query BackstageBites {
    allContentfulVideo {
      nodes {
        title
        shortDescription {
          childMarkdownRemark {
            html
          }
        }
        thumbnail {
          gatsbyImageData(height: 256)
          title
        }
        sourceId
        slug
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`;
