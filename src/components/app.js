import React from 'react';
import { Link, IndexLink } from 'react-router';
import { Layout, AppBar, Panel, Button } from 'react-toolbox';

export default function App({ children }){
  return (
    <Layout>
      <Panel>
        <AppBar fixed={true}>
          <nav>
            <IndexLink to="/">
              <Button>TODOs</Button>
            </IndexLink>
            <Link to="/completed">
              <Button>Test</Button>
            </Link>
          </nav>
        </AppBar>
        {children}
      </Panel>
    </Layout>
  );
}
