import 'antd/dist/antd.css';
import '../styles/globals.css';
import NextApp, { AppProps } from 'next/app';
import Head from 'next/head';
import { Layout } from 'antd';
import { ApolloProvider } from '@apollo/client';

import { NavBar } from '../components/NavBar';
import apolloClient from '../libs/apolloClient';
import { ThemeProvider } from 'styled-components';

const { Content, Footer } = Layout;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

class App extends NextApp<AppProps, unknown, unknown> {
  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head datatest-id="head-element">
          <title>Pokédex</title>
          <meta name="description" content="Gotta catch 'em all!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Content>
          <ApolloProvider client={apolloClient}>
            <ThemeProvider theme={theme}>
              <Layout style={{ minHeight: '100vh' }}>
                <NavBar />
                <Content>
                  <Component {...pageProps} />
                </Content>
                <Footer>Gotta catch 'em all!</Footer>
              </Layout>
            </ThemeProvider>
          </ApolloProvider>
        </Content>
      </>
    );
  }
}

export default App;
