import React,{PureComponent,Fragment} from 'react';
import connect from "react-redux/es/connect/connect";

import {actionCreators} from '../store'

import {
    BackTop,
} from "../style";

class BackTopComponent extends PureComponent {
    render() {
        const {showScroll, handleScrollTop} = this.props;
        return (
            <Fragment>
                {
                    showScroll
                        ? <BackTop onClick={handleScrollTop}>
                            <i className={'iconfont'}>&#xe61b;</i>
                        </BackTop>
                        : null
                }
            </Fragment>
        )
    }

    componentDidMount() {
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
        showScroll: state.getIn(['component', 'showScroll'])
    }
};

const myMapDispatchToProps = (dispatch) => {
    return {
        changeScrollTopShow() {
            dispatch(actionCreators.toggleTopShow(document.documentElement.scrollTop > 400));
        },
        handleScrollTop() {
            window.scrollTo(0, 0)
        },
    }
};

export default connect(myMapStateToProps, myMapDispatchToProps)(BackTopComponent);
