import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import List from "./pages/List";
import theme from './styles/themes/dark';

const App: React.FC = () => {
    return(
        <ThemeProvider theme={theme}>
            <GlobalStyles/>
            <Layout>
                <List></List>
            </Layout>
        </ThemeProvider>
    );
}

export default App;
