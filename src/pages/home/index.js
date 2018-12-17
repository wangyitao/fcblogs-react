import React, {Component} from 'react';
import {connect} from 'react-redux';

import Topic from './components/Topic';
import Writer from './components/Writer';
import Recommend from './components/Recommend';
import List from './components/List';

import {actionCreators} from "./store";

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style'

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className={'banner-img'}
                         src="//upload.jianshu.io/admin_banners/web_images/4583/40bca38a47b32bdc04a1997a6ac9e76951217c18.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                         alt=""/>
                    <Topic/>
                    <List/>
                </HomeLeft>

                <HomeRight>
                    right
                    <Recommend/>
                    <Writer/>
                </HomeRight>
            </HomeWrapper>
        )
    }


    componentDidMount() {
        this.props.changeHomeData();
    }

}

const myMapStateToProps = (state) => {
    return {}
};

const myMapDispatchToProps = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreators.getHomeInfo())
        }
    }
};


export default connect(myMapStateToProps, myMapDispatchToProps)(Home);
