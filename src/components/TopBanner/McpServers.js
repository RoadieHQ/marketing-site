import React from 'react';
import { Link } from 'components';

const McpServers = () => (
  <Link
    to="/blog/announcing-the-roadie-mcp/"
    className="text-white font-bold underline-none hover:underline"
  >
    Get Roadie in your IDE with our new <span className="underline">MCP Servers</span>
  </Link>
);

export default McpServers;
