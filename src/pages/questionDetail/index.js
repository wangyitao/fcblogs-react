import React, {PureComponent} from 'react';
import {connect} from 'react-redux';

import {actionCreators} from './store'

import {
    QuestionDetailWrapper,
    QuestionDetailContentWrapper,
    QuestionDetailTitle,
    QuestionDetailContent,
    QuestionContentDesAndAns,
} from './style';

class QuestionDetail extends PureComponent {
    render() {
        const {title, description, answer} = this.props;
        return (
            <QuestionDetailWrapper>


                <QuestionDetailContentWrapper>
                    <QuestionDetailTitle>
                        {title}
                    </QuestionDetailTitle>
                    <QuestionDetailContent>
                        <QuestionDetailTitle className={'description'}>
                            问题描述
                        </QuestionDetailTitle>
                        <QuestionContentDesAndAns dangerouslySetInnerHTML={{__html: description}} />
                    </QuestionDetailContent>
                    <QuestionDetailContent>
                        <QuestionDetailTitle className={'answer'}>
                            答案
                        </QuestionDetailTitle>
                        <QuestionContentDesAndAns dangerouslySetInnerHTML={{__html: answer}} />
                    </QuestionDetailContent>


                </QuestionDetailContentWrapper>


            </QuestionDetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getQuestionDetail(this.props.match.params.id);
    }
}


const myMapStateToProps = (state) => {
    return {
        title: state.getIn(['questionDetail', 'title']),
        description: state.getIn(['questionDetail', 'description']),
        answer: state.getIn(['questionDetail', 'answer']),
    }
};

const myMapDispatchToProps = (dispatch) => {
    return {
        getQuestionDetail(id) {
            dispatch(actionCreators.getQuestionDetail(id))
        }
    }
};

export default connect(myMapStateToProps, myMapDispatchToProps)(QuestionDetail);