import React, {Component, Fragment} from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';

import {GlobalStyle} from "./style";
import {IconFontGlobalStyle} from './statics/iconfont/iconfont';

import Header from './common/header';
import store from './store'

import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'
import Question from './pages/question'

class App extends Component {
    render() {
        return (
            <Fragment>
                <GlobalStyle/>
                <IconFontGlobalStyle/>
                <Fragment>
                    <Provider store={store}>
                        <BrowserRouter>

                            <Fragment>
                                <Header/>
                                <Route path={'/'} exact component={Home}/>
                                <Route path={'/login'} exact component={Login}/>
                                <Route path={'/write'} exact component={Write}/>
                                <Route path={'/question'} exact component={Question}/>
                                <Route path={'/detail/:id'} exact component={Detail}/>
                            </Fragment>
                        </BrowserRouter>
                    </Provider>
                </Fragment>
            </Fragment>
        );
    }
}

export default App;
