/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (

    <SessionProvider session={session}>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </SessionProvider>

  );
}

export default MyApp;
