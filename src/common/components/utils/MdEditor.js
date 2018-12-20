import React, {PureComponent} from 'react';
import cookie from 'cookie';
import SimpleMDEEditor from 'yt-simplemde-editor';
import marked from 'marked';
import Prism from 'prismjs'; // 这里使用 ~1.14.0 版本，1.15 之后的版本有bug
import 'prismjs/themes/prism-solarizedlight.css';
import loadLanguages from 'prismjs/components/index';

import {
    MdEditorWrapper,
} from '../style';
import {actionCreators} from "../store";
import connect from "react-redux/es/connect/connect";

loadLanguages(['css', 'clike', 'javascript', 'abap', 'actionscript', 'ada', 'apacheconf', 'apl', 'applescript', 'arduino', 'arff', 'asciidoc', 'asm6502', 'aspnet', 'autohotkey', 'autoit', 'bash', 'basic', 'batch', 'bison', 'brainfuck', 'bro', 'c', 'csharp', 'cpp', 'coffeescript', 'clojure', 'crystal', 'csp', 'css-extras', 'd', 'dart', 'diff', 'docker', 'eiffel', 'elixir', 'elm', 'erb', 'erlang', 'fsharp', 'flow', 'fortran', 'gedcom', 'gherkin', 'git', 'glsl', 'go', 'graphql', 'groovy', 'haml', 'handlebars', 'haskell', 'haxe', 'http', 'hpkp', 'hsts', 'ichigojam', 'icon', 'inform7', 'ini', 'io', 'j', 'java', 'jolie', 'json', 'julia', 'keyman', 'kotlin', 'latex', 'less', 'liquid', 'lisp', 'livescript', 'lolcode', 'lua', 'makefile', 'markdown', 'markup-templating', 'matlab', 'mel', 'mizar', 'monkey', 'n4js', 'nasm', 'nginx', 'nim', 'nix', 'nsis', 'objectivec', 'ocaml', 'opencl', 'oz', 'parigp', 'parser', 'pascal', 'perl', 'php', 'php-extras', 'plsql', 'powershell', 'processing', 'prolog', 'properties', 'protobuf', 'pug', 'puppet', 'pure', 'python', 'q', 'qore', 'r', 'jsx', 'tsx', 'renpy', 'reason', 'rest', 'rip', 'roboconf', 'ruby', 'rust', 'sas', 'sass', 'scss', 'scala', 'scheme', 'smalltalk', 'smarty', 'sql', 'soy', 'stylus', 'swift', 'tcl', 'textile', 'twig', 'typescript', 'vbnet', 'velocity', 'verilog', 'vhdl', 'vim', 'visual-basic', 'wasm', 'wiki', 'xeora', 'xojo', 'yaml']);

class MdEditor extends PureComponent {

    renderMarkdown = (text) => {
        const html = marked(text, {
            breaks: true,
        });

        if (/language-/.test(html)) {
            const container = document.createElement('a');
            container.innerHTML = html;
            Prism.highlightAllUnder(container);
            return container.innerHTML;
        }

        return html;
    };

    render() {
        const {changeContent,editorValue} =this.props;

        console.log(editorValue);
        const editorProps = {
            value: editorValue,
            getMdeInstance: simplemde => {
                this.simplemde = simplemde;
            },
            onChange: (value) => {
                changeContent(value);
            },
            options: {
                // see https://github.com/sparksuite/simplemde-markdown-editor#configuration
                spellChecker: false,
                forceSync: true,
                autosave: {
                    enabled: true,
                    delay: 5000,
                    uniqueId: 'article_content',
                },
                renderingConfig: {
                    codeSyntaxHighlighting: true,
                },
                previewRender: this.renderMarkdown, // 自定义预览渲染
                tabSize: 4,
                toolbar: [
                    'bold',
                    'italic',
                    'heading',
                    '|',
                    'quote',
                    'code',
                    'table',
                    'horizontal-rule',
                    'unordered-list',
                    'ordered-list',
                    '|',
                    'link',
                    'image',
                    '|',
                    'side-by-side',
                    'fullscreen',
                    '|',
                    {
                        name: 'guide',
                        action() {
                            const win = window.open(
                                'https://github.com/riku/Markdown-Syntax-CN/blob/master/syntax.md',
                                '_blank',
                            );
                            if (win) {
                                // Browser has allowed it to be opened
                                win.focus();
                            }
                        },
                        className: 'fa fa-info-circle',
                        title: 'Markdown 语法！',
                    },
                ],
            },
            uploadOptions: {
                uploadUrl: '/api/attachment/upload',
                jsonFieldName: 'data.filename',
                extraHeaders: {
                    Accept: 'application/x.sheng.v1+json',
                    'X-XSRF-TOKEN': cookie.parse(document.cookie)['XSRF-TOKEN'],
                },
            },
        };

        return (
            <MdEditorWrapper>
                <SimpleMDEEditor {...editorProps} />
            </MdEditorWrapper>
        )
    }

    componentDidMount() {

    }
}

const myMapStateToProps = (state) => {
    return {
        editorValue: state.getIn(['component', 'editorValue'])
    }
};

const myMapDispatchToProps = (dispatch) => {
    return {
        changeContent(value){
            dispatch(actionCreators.changeContent(value))
        },
    }
};

export default connect(myMapStateToProps, myMapDispatchToProps)(MdEditor);
