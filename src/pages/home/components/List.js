import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import {
    ListItem,
    ListInfo,
} from '../style'

class List extends Component {
    render() {
        const {list}= this.props;
        return (
            <Fragment>
                {
                    list.map((item)=>(
                        <ListItem key={item.get('id')}>
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
                    ))
                }
            </Fragment>

        )
    }
}

const myMapStateToProps = (state) => {
    return {
        list: state.getIn(['home','articleList']),
    }
};

const myMapDispatchToProps = (dispatch) => {
    return {}
};


export default connect(myMapStateToProps, myMapDispatchToProps)(List);
