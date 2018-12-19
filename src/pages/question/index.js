import React, {PureComponent,Fragment} from 'react';
import {connect} from 'react-redux';

import {actionCreators} from "./store";

import List from './components/List';

import {
    QuestionWrapper,
    QuestionContent,
} from './style';

import {
    BackTopComponent,
} from '../../common/components';

class Question extends PureComponent {
    render() {
        return (
            <Fragment>
                <QuestionWrapper>
                    <QuestionContent>
                        <List />
                    </QuestionContent>
                </QuestionWrapper>
                <BackTopComponent/>
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.getQuestionData();
    }
}

const myMapStateToProps = (state) => {
    return {

    }
};

const myMapDispatchToProps = (dispatch) => {
    return {
        getQuestionData(){
            dispatch(actionCreators.getQuestionData());
        }
    }
};

export default connect(myMapStateToProps, myMapDispatchToProps)(Question);