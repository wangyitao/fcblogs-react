import {createGlobalStyle} from 'styled-components'

export const IconFontGlobalStyle = createGlobalStyle`
    @font-face {font-family: "iconfont";
      src: url('iconfont.eot?t=1545006892782'); /* IE9*/
      src: url('iconfont.eot?t=1545006892782#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
      url('iconfont.ttf?t=1545006892782') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
      url('iconfont.svg?t=1545006892782#iconfont') format('svg'); /* iOS 4.1- */
    }
    
    .iconfont {
      font-family:"iconfont" !important;
      font-size:16px;
      font-style:normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
`;
