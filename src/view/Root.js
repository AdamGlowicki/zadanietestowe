import React from 'react';
import Table from "../components/organisms/Table/Table";
import {ThemeProvider} from 'styled-components';
import {Provider} from "react-redux";
import {theme} from '../theme/mainTheme';
import GlobalStyle from "../theme/GlobalStyle";
import store from "../store";

const Root = () => (
    <Provider store={store}>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <Table/>
        </ThemeProvider>
    </Provider>
);

export default Root;