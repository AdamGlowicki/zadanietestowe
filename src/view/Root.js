import React from 'react';
import PropTypes from 'prop-types';
import Table from "../components/organisms/Table/Table";
import { ThemeProvider } from 'styled-components';
import { theme } from '../theme/mainTheme';
import GlobalStyle from "../theme/GlobalStyle";
import {Provider} from "react-redux";
import store from "../store";


const Root = () => (
    <Provider store={store}>
        <GlobalStyle/>
        <ThemeProvider theme={theme}>
            <Table/>
        </ThemeProvider>
    </Provider>
);

Root.propTypes = {

};

export default Root;