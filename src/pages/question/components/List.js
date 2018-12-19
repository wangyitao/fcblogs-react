import React, {PureComponent, Fragment} from 'react';
import {connect} from 'react-redux';

import {actionCreators} from '../store'

import {
    QuestionItem,
    QuestionTitle,
    QuestionTags,
    TagItem,

} from '../style'
import {
    LoadMore
} from "../../home/style";

class List extends PureComponent {
    render() {
        const {questions, getMoreQuestions, page} = this.props;
        return (
            <Fragment>
                {
                    questions.map((item, index) => {
                        return (
                            <QuestionItem key={index}>
                                <QuestionTitle>
                                    {item.get('title')}
                                    <QuestionTags>
                                        {
                                            item.get('tags').map((tag, index) => (
                                                <TagItem key={index}>
                                                    {tag}
                                                </TagItem>
                                            ))
                                        }
                                    </QuestionTags>
                                </QuestionTitle>
                            </QuestionItem>
                        )
                    })
                }

                <LoadMore onClick={() => getMoreQuestions(page)}>
                    加载更多
                </LoadMore>
            </Fragment>
        )
    }
}

const myMapStateToProps = (state) => {
    return {
        questions: state.getIn(['question', 'questions']),
        page: state.getIn(['question','questionsPage']),
    }
};

const myMapDispatchToProps = (dispatch) => {
    return {
        getMoreQuestions(page) {
            dispatch(actionCreators.getMoreQuestions(page))
        }
    }
};


export default connect(myMapStateToProps, myMapDispatchToProps)(List);
