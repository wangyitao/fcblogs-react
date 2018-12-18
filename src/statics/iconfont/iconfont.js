import {createGlobalStyle} from 'styled-components'

export const IconFontGlobalStyle = createGlobalStyle`
    @font-face {font-family: "iconfont";
      src: url('iconfont.eot?t=1545105012353'); /* IE9*/
      src: url('iconfont.eot?t=1545105012353#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
      url('iconfont.ttf?t=1545105012353') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url('iconfont.svg?t=1545105012353#iconfont') format('svg'); /* iOS 4.1- */
    }
    
    .iconfont {
      font-family:"iconfont" !important;
      font-size:16px;
      font-style:normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`;
