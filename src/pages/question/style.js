import styled from 'styled-components';

export const QuestionWrapper = styled.div`
    z-index: 0;
    overflow: hidden;
    background: #eee;
    margin：0 auto;
`;


export const QuestionContent = styled.div`
    display: block;
    min-width: 1px;
    max-width: 760px;
    margin: 20px auto;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0%;
`;
export const QuestionItem = styled.div`
    overflow: hidden;
    padding: 10px 20px;
    margin: 20px auto;
    border-bottom: 1px solid #dcdcdc;
    background: #fffff0;
    border-radius: 20px;
`;

export const QuestionTitle = styled.div`
    color: #3b3e43;
    font-size: 24px;
    margin-bottom: 12px;
    display: block;
    cursor: pointer;
`;
export const QuestionTags = styled.div`
    display: block;
    margin: 10px auto;
`;
export const TagItem = styled.div`
    display: inline-block;
    white-space: nowrap;
    padding: 3px 6px;
    margin-right: 12px;
    border-radius: 10px;
    font-size: 15px;
    line-height: 14px;
    color: #4285f4;
    cursor: pointer;
    &:hover {
        background-color: #e1d1d1;
    }
`;

