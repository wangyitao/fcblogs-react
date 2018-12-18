import React, {Component} from 'react';
import {connect} from 'react-redux';

import {actionCreators} from './store';

import {
    DetailWrapper,
    Header,
    Content,
} from './style';

class Detail extends Component {
    render() {
        return (
            <DetailWrapper>
                <Header>{this.props.title}</Header>
                <Content dangerouslySetInnerHTML={{__html: this.props.content}}/>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}


const myMapStateToProps = (state) => {
    return {
        title: state.getIn(['detail', 'title']),
        content: state.getIn(['detail', 'content']),
    }
};

const myMapDispatchToProps = (dispatch) => {
    return {
        getDetail(id){
            dispatch(actionCreators.getDetail(id));
        }
    }
};

export default connect(myMapStateToProps, myMapDispatchToProps)(Detail);