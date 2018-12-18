import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

import {actionCreators} from "./store";

import {
    LoginWrapper,
    LoginBox,
    Input,
    Button,
} from './style';

class Login extends PureComponent {
    render() {
        const {loginStatus,login}=this.props;
        if (!loginStatus){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder={'账号'} ref={(input) => {
                            this.account = input
                        }}/>
                        <Input placeholder={'密码'} type={'password'} ref={(input) => {
                            this.password = input
                        }}/>
                        <Button onClick={() => login(this.account, this.password)}>登录</Button>
                    </LoginBox>
                </LoginWrapper>
            )
        } else {
            return <Redirect to={'/'}/>
        }

    }

}


const myMapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(['login','login']),
    }
};

const myMapDispatchToProps = (dispatch) => {
    return {
        login(accountElem, passwordElem) {
            dispatch(actionCreators.login(accountElem.value, passwordElem.value))
        }

    }
};

export default connect(myMapStateToProps, myMapDispatchToProps)(Login);