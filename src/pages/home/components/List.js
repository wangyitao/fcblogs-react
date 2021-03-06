import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom'

import {actionCreators} from '../store'

import {
    ListItem,
    ListInfo,
    LoadMore,
} from '../style'

class List extends PureComponent {
    render() {
        const {list, getMoreList, page} = this.props;
        return (
            <Fragment>
                {
                    list.map((item, index) => (
                        <Link to={"/detail/" + item.get('id')} key={index}>
                            <ListItem>
                                <img className={'list-pic'}
                                     src={item.get('imgUrl')}
                                     alt=""/>
                                <ListInfo>
                                    <h3 className={'title'}>{item.get('title')}</h3>
                                    <p className={'disc'}>
                                        {item.get('desc')}
                                    </p>
                                </ListInfo>
                            </ListItem>
                        </Link>
                    ))
                }
                <LoadMore onClick={() => getMoreList(page)}>
                    加载更多
                </LoadMore>
            </Fragment>

        )
    }
}

const myMapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'articleList']),
        page: state.getIn(['home', 'articlePage']),
    }
};

const myMapDispatchToProps = (dispatch) => {
    return {
        getMoreList(page) {
            dispatch(actionCreators.getMoreList(page))
        }
    }
};


export default connect(myMapStateToProps, myMapDispatchToProps)(List);
