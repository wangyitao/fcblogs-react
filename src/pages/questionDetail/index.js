import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';

import {actionCreators} from './store'


import {
    QuestionDetailWrapper,
    QuestionDetailContentWrapper,
    QuestionDetailTitle,
    QuestionDetailContent,
    QuestionContentDesAndAns,
    QuestionEditor,
} from './style';

import {
    MdEditor,
} from '../../common/components';

class QuestionDetail extends PureComponent {
    render() {
        const {title, description, answer, questionEditor, questionSave, is_description_editor_show, is_answer_editor_show} = this.props;
        return (
            <QuestionDetailWrapper>
                <QuestionDetailContentWrapper>
                    <QuestionDetailTitle>
                        {title}
                    </QuestionDetailTitle>
                    <QuestionDetailContent>
                        <QuestionDetailTitle className={'description'}>
                            问题描述
                            <QuestionEditor onClick={questionSave(false)}> <i className={'iconfont'}>&#xe662;</i>
                            </QuestionEditor>
                            <QuestionEditor
                                onClick={(description) => questionEditor(description, !is_description_editor_show, 'description')}>
                                <i
                                    className={'iconfont'}>&#xe641;</i> </QuestionEditor>
                        </QuestionDetailTitle>
                        {
                            is_description_editor_show ?
                                <Fragment>
                                    <QuestionContentDesAndAns dangerouslySetInnerHTML={{__html: description}}/>
                                    <MdEditor editorContent={description} uniqueId={'description' + title}/>
                                </Fragment>
                                : <QuestionContentDesAndAns dangerouslySetInnerHTML={{__html: description}}/>
                        }

                    </QuestionDetailContent>
                    <QuestionDetailContent>
                        <QuestionDetailTitle className={'answer'}>
                            答案
                            <QuestionEditor onClick={questionSave(true)}> <i className={'iconfont'}>&#xe662;</i>
                            </QuestionEditor>
                            <QuestionEditor
                                onClick={(answer) => questionEditor(answer, !is_answer_editor_show, 'answer')}>
                                <i
                                    className={'iconfont'}>&#xe641;</i> </QuestionEditor>
                        </QuestionDetailTitle>
                        {
                            is_answer_editor_show ?
                                <Fragment>
                                    <QuestionContentDesAndAns dangerouslySetInnerHTML={{__html: answer}}/>
                                    <MdEditor editorContent={answer} uniqueId={'answer' + title}/>
                                </Fragment>
                                : <QuestionContentDesAndAns dangerouslySetInnerHTML={{__html: answer}}/>
                        }

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
        is_description_editor_show: state.getIn(['questionDetail', 'is_description_editor_show']),
        is_answer_editor_show: state.getIn(['questionDetail', 'is_answer_editor_show']),
    }
};

const myMapDispatchToProps = (dispatch) => {
    return {
        getQuestionDetail(id) {
            dispatch(actionCreators.getQuestionDetail(id))
        },
        questionEditor(content, is_true, type) {
            console.log(is_true)
            console.log(type)
            dispatch(actionCreators.changeDescriptionShow(content, is_true, type))
        },
        questionSave(is_answer) {
            // dispatch(actionCreators.changeDescriptionSave(is_answer))
        }
    }
};

export default connect(myMapStateToProps, myMapDispatchToProps)(QuestionDetail);