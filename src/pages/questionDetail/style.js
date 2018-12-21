import styled from 'styled-components';

export const QuestionDetailWrapper = styled.div`
    z-index: 0;
    background: #eee;
`;

export const QuestionDetailContentWrapper = styled.div`
    overflow: hidden;
    display: block;
    min-width: 1px;
    max-width: 760px;
    margin: 0 auto;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
`;

export const QuestionDetailTitle = styled.div`
    display: block;
    min-width: 1px;
    max-width: 760px;
    color: #3b3e43;
    font-size: 20px;
    margin: 25px auto;
    font-weight:bold;
    &.description, &.answer {
       margin: 10px auto;
       border-bottom: 1px solid #dcdcdc;
       padding-bottom: 20px;
       
    }
`;

export const QuestionDetailContent = styled.div`
    background: #fff;
    padding: 30px 20px;
    line-height: 20px;
    margin 20px auto;
`;

export const QuestionContentDesAndAns = styled.div`
    margin: 20px auto;
`;

export const QuestionEditor = styled.div`
    margin: 0 20px;
    float: right;
    cursor: pointer;
`;


