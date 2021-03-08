# The server must be restarted to pick up changes in ths file.

# Required. Must be unique across all files in the directory. No whitespace. Use hyphens as

# separators.

name: techradar
humanName: Tech Radar
heading: 'Backstage Tech Radar Plugin'

# Keep it short

lead: |
Visualize the your company's official guidelines of different areas of software development.
attribution:
text: Spotify
href: https://spotify.com

seo:

# Don't forget to end with "| Roadie"

title: 'Backstage Tech Radar Plugin | Roadie'
description: |
Visualize the your company's official guidelines of different areas of software development.

logo:

# This must be a relative path. It should start without a slash or with ./

# The overall size of the file should be approximately 200 by 200.

# The image in the file should be approximately 100 by 100 pixels. It needs space around it.

# The image will be made greyscale by Gatsby Image Sharp.

fileSystemPath: './content/assets/logos/tech-radar/radar.png'

# The dimensions are required. They are the outer dimensions of the image file.

width: 192
height: 192

coverImage:
fileSystemPath: './content/assets/tech-radar-plugin.png'
alt: 'A screenshot of the Tech Radar plugin.'

# Instructions for someone who wants to use this plugin.

# languages used here must be listed in the .babelrc

gettingStarted:

# What will this step accomplish?

- intro: Install the plugin into Backstage.
  language: bash
  code: 'yarn add @backstage/plugin-tech-radar'
- intro: Add plugin to the list of plugins.
  language: typescript
  code: |
  // packages/app/src/plugins.ts
  export { plugin as TechRadar } from '@backstage/plugin-tech-radar';
- intro: Modify your app routes to include the Router component exported from the tech radar, for example
  language: typescript
  code: |
  // packages/app/src/App.tsx
  import { Router as TechRadarRouter } from '@backstage/plugin-tech-radar';
  &lt;Routes>
  {/_ other routes ... _/}
  &lt;Route
  path="/tech-radar"
  element={&lt;TechRadarRouter width={1500} height={800} />}
  />
  {/_ other routes ... _/}
  &lt;/Routes>;

# Optional. Use this to suit the brand of the tool that the plugin integrates with.

style:

# These colors will fall back to a default if omitted.

primaryColor: 'rgb(0, 70, 67)'
contrastingColor: '#fff'
