// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </RecoilRoot>
      </QueryClientProvider>
    </>
  )
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext: AppContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);

//   return { ...appProps }
// }

export default MyApp
