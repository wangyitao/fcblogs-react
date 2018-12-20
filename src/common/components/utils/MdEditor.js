import React, {PureComponent} from 'react';
import cookie from 'cookie';
import SimpleMDEEditor from 'yt-simplemde-editor';
import marked from 'marked';
import Prism from 'prismjs'; // 这里使用 ~1.14.0 版本，1.15 之后的版本有bug
import 'prismjs/themes/prism.css';
import loadLanguages from 'prismjs/components/index';

import {MdEditorWrapper} from '../style'

loadLanguages([
    'c',
    'css',
    'javascript',
    'bash',
    'git',
    'ini',
    'java',
    'json',
    'less',
    'markdown',
    'php',
    'php-extras',
    'python',
    'jsx',
    'tsx',
    'scss',
    'sql',
    'vim',
    'yaml',
]);

class MdEditor extends PureComponent {
    state = {
        value: '',
    };

    renderMarkdown = text => {
        const html = marked(text, {
            renderer: new marked.Renderer(),
            gfm: true,
            pedantic: false,
            sanitize: false,
            tables: true,
            breaks: true,
            smartLists: true,
            smartypants: true,
        });
        if (/language-/.test(html)) {
            const container = document.createElement('div');
            container.innerHTML = html;
            Prism.highlightAllUnder(container);
            return container.innerHTML;
        }

        return html;
    };

    render() {
        const editorProps = {
            value: this.state.value,
            getMdeInstance: simplemde => {
                this.simplemde = simplemde;
            },
            onChange: value => {
                this.setState({value})
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
                    // codeSyntaxHighlighting: true,
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
                    'preview',
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
}

export default MdEditor;