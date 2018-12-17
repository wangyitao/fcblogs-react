import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    RecommendWrapper,
    RecommendItem,
} from '../style'

class Recommend extends Component {
    render() {
        const {list} = this.props;
        return (
            <RecommendWrapper>
                {
                    list.map((item) => (
                        <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
                    ))
                }
            </RecommendWrapper>
        )
    }
}

const myMapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'recommendList']),
    }
};

const myMapDispatchToProps = (dispatch) => {
    return {}
};


export default connect(myMapStateToProps, myMapDispatchToProps)(Recommend);
