# Writing customer facing documentation

Customer facing documentation lives in markdown files in the `content/docs` directory.

New files created there will automatically be published under the `roadie.io/docs/` path. For example, the `content/docs/getting-started/getting-started-for-admins.md` file is published as [roadie.io/docs/getting-started/gettng-started-for-admins/](https://roadie.io/docs/getting-started/gettng-started-for-admins/).

Adding a markdown file does not automatically add it to the table of contents in the sidebar of the documentation. This must be done manually by editing `src/components/doc/Sidebar.js`.
