import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

import {actionCreators} from "./store";

import List from './components/List';


import {
    QuestionWrapper,
    QuestionContent,
    QuestionItem

} from './style';

class Question extends PureComponent {
    render() {

        return (
            <QuestionWrapper>
                <QuestionContent>
                    <List />
                </QuestionContent>

            </QuestionWrapper>
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