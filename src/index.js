import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss } from 'react-router';
import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';
import './css/style.css';

const repo = `/${window.location.pathname.split('/')[1]}`;

const Root = () => {
    return (
        <BrowserRouter basename={repo}>
            <div>
                <Match exactly pattern='/' component={StorePicker} />
                <Match pattern='/store/:storeId' component={App} />
                <Miss component={NotFound} />
            </div>
        </BrowserRouter>
    )
}

render(<Root/>, document.querySelector('#main'));
