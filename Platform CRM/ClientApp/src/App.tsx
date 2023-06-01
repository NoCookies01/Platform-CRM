import * as React from 'react';
import { Route } from 'react-router-dom';
import Layout from './components/Layout';
import {Home} from './components/Home';

import './custom.css'
import { ProductProvider } from './components/context/ProductContext';

export default () => (
    <Layout>
        <ProductProvider>
            <Route exact path='/' component={Home} />
        </ProductProvider>
    </Layout>
);
