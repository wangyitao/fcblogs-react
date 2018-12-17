import React, {Component} from 'react';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';

import {actionCreators} from './store/index'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button,
} from "./style";

class Header extends Component {
    getAreaList() {
        const {focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage} = this.props;
        const newList = list.toJS();
        const pageList = [];

        if (newList.length) {
            let start = (page - 1) * 10;
            let end = page !== totalPage ? page * 10 : newList.length;
            for (let i = start; i < end; i++) {
                pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]} </SearchInfoItem>);
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spinIcon)}>
                            <i ref={(icon) => {
                                this.spinIcon = icon
                            }} className={'iconfont spin'}>&#xe857;</i>
                            换一批
                        </SearchInfoSwitch>
                        <SearchInfoList>
                            {pageList}
                        </SearchInfoList>
                    </SearchInfoTitle>
                </SearchInfo>
            );
        } else {
            return null;
        }
    };


    render() {
        const {focused, list, handleInputFocus, handleInputBlur} = this.props;
        return (
            <HeaderWrapper>
                <Logo/>
                <Nav>
                    <NavItem className={'left active'}>首页</NavItem>
                    <NavItem className={'left'}>问答</NavItem>
                    <NavItem className={'right'}>登录</NavItem>
                    <NavItem className={'right'}>
                        <i className={'iconfont'}>&#xe636;</i>
                    </NavItem>

                    <SearchWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames={'slide'}
                        >
                            <NavSearch className={focused ? 'focused' : ''}
                                       onFocus={() => handleInputFocus(list)}
                                       onBlur={handleInputBlur}
                            />
                        </CSSTransition>
                        <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6b3;</i>
                        {this.getAreaList()}
                    </SearchWrapper>
                </Nav>

                <Addition>
                    <Button className={'writing'}>
                        <i className={'iconfont'}>&#xe617;</i>
                        写文章
                    </Button>
                    <Button className={'reg'}>注册</Button>
                </Addition>
            </HeaderWrapper>
        )
    }
}


const myMapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn']),
    }
};

const myMapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            list.size === 0 && dispatch(actionCreators.getList()); // 简化if，使用了短路
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage, spin) {
            // 旋转图标旋转
            let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
            originAngle = originAngle ? parseInt(originAngle, 10) + 180 : 180;
            spin.style.transform = `rotate(${originAngle}deg)`;

            // 换一批翻页效果
            page = page < totalPage ? page + 1 : 1;

            dispatch(actionCreators.changePage(page));
        }
    }
};


export default connect(myMapStateToProps, myMapDispatchToProps)(Header);
