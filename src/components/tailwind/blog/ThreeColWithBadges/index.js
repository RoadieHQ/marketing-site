import React from 'react';
import { Link } from 'components';

const ThreeColWithBadges = ({ posts }) => {
  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">Recent publications</h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus
            arcu.
          </p>
        </div>

        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.frontmatter.title}>
              <div>
                {post.frontmatter.tags && post.frontmatter.tags.length > 0 && (
                  <Link to={post.frontmatter.tags[0]} className="inline-block">
                    <span
                      className="bg-indigo-100 text-indigo-800 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium"
                    >
                      {post.frontmatter.tags[0]}
                    </span>
                  </Link>
                )}
              </div>

              <Link to={`/tailwind${post.fields.slug}`} className="block mt-4">
                <p className="text-xl font-semibold text-gray-900">{post.frontmatter.title}</p>
                <p className="mt-3 text-base text-gray-500">{post.frontmatter.description}</p>
              </Link>

              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <span className="sr-only">{post.frontmatter.author ? post.frontmatter.author.name : 'Peter Pan'}</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""
                  />
                </div>

                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {post.frontmatter.author ? post.frontmatter.author.name : 'Peter Pan'}
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime={post.frontmatter.date}>Mar 10, 2020</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>3 min read</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default ThreeColWithBadges;
