import React, {PureComponent} from 'react';
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
        const {changeContent, saveChange} = this.props;

        const editorProps = {
            value: this.props.editorContent,
            getMdeInstance: (simplemde) => {
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
                    delay: 1000,
                    uniqueId: this.props.uniqueId,
                },
                renderingConfig: {
                    codeSyntaxHighlighting: true,
                },
                previewRender: this.renderMarkdown, // 自定义预览渲染
                tabSize: 4,
                hideIcons: [
                    'unordered-list',
                    'ordered-list',
                ],
                toolbar: [
                    'bold',
                    'italic',
                    'heading',
                    '|',
                    'quote',
                    'code',
                    'table',
                    'horizontal-rule',
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
                    {
                        name: 'save_and_back',
                        action(simplemde) {
                            saveChange(simplemde.value());
                            window.history.go(-1);
                        },
                        className: 'fa fa-save',
                        title: '保存并返回'
                    },
                ],
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
        editorValue: state.getIn(['component', 'editorValue']),
        savedValue: state.getIn(['component', 'savedValue']),
    }
};

const myMapDispatchToProps = (dispatch) => {
    return {
        changeContent(value) {
            dispatch(actionCreators.changeContent(value))
        },
        saveChange(editorValue) {
            dispatch(actionCreators.saveChange(editorValue))
        }
    }
};

export default connect(myMapStateToProps, myMapDispatchToProps)(MdEditor);
