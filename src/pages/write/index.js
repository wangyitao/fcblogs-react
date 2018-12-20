import React, {PureComponent} from 'react';
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

import {MdEditor} from '../../common/components';

import {EditorWrapper} from './style'

class Write extends PureComponent {
    render() {
        const {loginStatus} = this.props;
        if (loginStatus) {
            return (
                <EditorWrapper>
                    写文章页面
                    <MdEditor>

                    </MdEditor>
                </EditorWrapper>
            )
        } else {
            return <Redirect to={'/login'}/>
        }

    }

}


const myMapStateToProps = (state) => {
    return {
        loginStatus: state.getIn(['login', 'login'])
    }
};

const myMapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(myMapStateToProps, myMapDispatchToProps)(Write);