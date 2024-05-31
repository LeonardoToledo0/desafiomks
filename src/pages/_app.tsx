import React from "react";
import { Provider } from "react-redux";
import { GlobalStyles } from "../styles/GlobalStyles";
import { AppProps } from "next/app";
import { store } from "../hooks/configureStore";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyles />
          <Component {...pageProps} />
        </QueryClientProvider>
      </Provider>
    </>
  );
};

export default App;
