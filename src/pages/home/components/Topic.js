import React, {Component} from 'react';
import {connect} from 'react-redux';

import {
    TopicWrapper,
    TopicItem,
} from '../style'

class Topic extends Component {

    render() {
        const { list } = this.props;
        return (
            <TopicWrapper>
                {
                    list.map((item) => (
                        <TopicItem key={item.get('id')}>
                            <img
                                className={'topic-pic'}
                                src={item.get('iconUrl')}
                                alt=''
                            />
                            {item.get('name')}
                        </TopicItem>
                    ))
                }
            </TopicWrapper>
        )
    }
}


const myMapStateToProps = (state) => {
    return {
        list: state.getIn(['home','topicList']),
    }
};

const myMapDispatchToProps = (dispatch) => {
    return {}
};


export default connect(myMapStateToProps, myMapDispatchToProps)(Topic);
