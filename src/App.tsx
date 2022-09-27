import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { Transactions } from './pages/Transactions/Transactions';

export function App(){
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle/>
      <Transactions/>
    </ThemeProvider>
  );
}
