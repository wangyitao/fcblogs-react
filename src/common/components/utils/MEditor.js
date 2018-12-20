import React,{PureComponent,Fragment} from 'react';
import connect from "react-redux/es/connect/connect";

import SimpleMDE from 'simplemde';
import marked from 'marked';
import highlight from 'highlight.js';

import 'simplemde/dist/simplemde.min.css';

class MEditor extends PureComponent {
    render() {
        return (
            <Fragment>
                <textarea id="editor">

                </textarea>
            </Fragment>
        )
    }

    componentDidMount() {
        this.smde = new SimpleMDE({
            element: document.getElementById('editor').childElementCount,
            autofocus: true,
            autosave: true,
            previewRender: function(plainText) {
                return marked(plainText,{
                    renderer: new marked.Renderer(),
                    gfm: true,
                    pedantic: false,
                    sanitize: false,
                    tables: true,
                    breaks: true,
                    smartLists: true,
                    smartypants: true,
                    highlight: function (code) {
                        return highlight.highlightAuto(code).value;
                    }
                });
            },
        })
    }
}


const myMapStateToProps = (state) => {
    return {
    }
};

const myMapDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(myMapStateToProps, myMapDispatchToProps)(MEditor);
