import styled from 'styled-components';
import logoPic from '../../statics/忆初logo.png'

export const HeaderWrapper = styled.div`
    position: relative;
    height: 48px;
    border-bottom: 1px solid #f0f0f0;
`;

export const Logo = styled.div`
    position: absolute;
    top:0;
    left:0;
    
    display: block;
    width: 100px;
    height: 48px;
    background: url(${logoPic});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    padding-right: 70px;
    padding-left: 70px;
    box-sizing: border-box;
    margin: 0 auto;
`;

export const NavItem = styled.div`
    line-height: 48px;
    padding: 0 15px;
    font-size: 17px;
    color: #333;

    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;
export const SearchWrapper = styled.div`
    position: relative;
    float: left;
    
    .zoom {
        position: absolute;
        right: 5px;
        bottom: 5px;
        width: 30px;
        line-height: 30px;
        border-radius: 15px;
        text-align: center;
        &.focused {
            color: #fff;
            background: #777;
        }
    }
    
    
    
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索',
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 5px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size: 14px;
    color: #666;
    &::placeholder {    /*&::表示当前组件的placeholder*/
        color: #999;
    }
    
    &.focused {
        width: 240px;
    }
    
    &.slide-enter {
        transition: all .2s ease-out;
    }
    
    &.slide-enter-active {
        width: 240px;
    }
    
    &.slide-exit {
        transition: all .2s ease-out;
    }
    
    &.slide-exit-active {
        width: 160px;
    }
`;

export const SearchInfo = styled.div`
    position: absolute;
    left: 0;
    top: 48px;
    width: 240px;
    padding:0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background: #fff;
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    font-size: 14px;
    color: #969696;
`;

export const SearchInfoSwitch = styled.span`
    float: right;
    font-size: 13px;
    cursor: pointer;
    .spin{
        display: block;
        float: left;
        font-size: 12px;
        margin-right: 2px;
        transition: all .2s ease-in;
        transform-origin: center center;
    }
`;

export const SearchInfoList = styled.div`
    margin-top: 10px;
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    display: block;
    float: left;
    margin-right: 10px;
    margin-bottom: 15px;
    line-height: 20px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    color: #787878;
    border-radius: 3px;
    border-color: #b4b4b4;
    cursor: pointer;
`;

export const Addition = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    height: 48px;
`;

export const Button = styled.div`
    float: right;
    margin-top:5px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    border: 1px solid #ec6149;
    font-size: 14px;
    
    &.reg {
        color: #ec6149;
    }
    &.writing {
        color: #fff;
        background: #ec6149;
    }
`;

