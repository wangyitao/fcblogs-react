import React, {PureComponent} from 'react';
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
    BackTop,
} from './style'

class Home extends PureComponent {
    render() {
        const {showScroll, handleScrollTop} = this.props;
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
                {showScroll ? <BackTop onClick={handleScrollTop}>返回顶部</BackTop> : null}
            </HomeWrapper>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents()
    }

    componentWillMount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow)
    }
}

const myMapStateToProps = (state) => {
    return {
        showScroll: state.getIn(['home', 'showScroll'])
    }
};

const myMapDispatchToProps = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreators.getHomeInfo())
        },
        changeScrollTopShow() {
            dispatch(actionCreators.toggleTopShow(document.documentElement.scrollTop > 400));
        },
        handleScrollTop() {
            window.scrollTo(0, 0)
        },
    }
};


export default connect(myMapStateToProps, myMapDispatchToProps)(Home);
