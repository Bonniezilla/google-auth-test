import './globals.css'

import Provider from './components/Provider';

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ 
  Component,
  pageProps: { session, pageProps }
 }) {
  return (
    <Provider session={session}>
      <Component  {...pageProps} />  
    </Provider>
  )
}
