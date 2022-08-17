import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: 'Pretendard';
  src: url("/font/Pretendard-SemiBold.otf");
  font-weight: bold;
  font-style: normal;
}

@font-face {
  font-family: 'Pretendard';
  src: url("/font/Pretendard-Regular.otf");
  font-weight: lighter;
  font-style: normal;
}

#__next {
  // width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#container {
  width: 428px;
  height: 100%;
  position: relative;
  background-color: #fcf5c9;
  // padding: 10px;

  @media screen and (max-width: 420px) {
    width: 100%;
  }

}
.post:first-child {
  border-top: none !important;
}

blockquote,
body,
button,
code,
dd,
div,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
input,
legend,
li,
ol,
p,
pre,
select,
td,
textarea,
th,
ul,
a {
  margin: 0;
  padding: 0;
}
fieldset,
img {
  border: 0;
}
dl,
li,
menu,
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:after,
blockquote:before,
q:after,
q:before {
  content: "";
  content: none;
}
button,
input,
select,
textarea {
  vertical-align: middle;
  font-size: 100%;
}
button {
  border: 0;
  background-color: transparent;
  cursor: pointer;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
body {
  -webkit-text-size-adjust: none;
}
input:checked[type="checkbox"] {
  background-color: #666;
  -webkit-appearance: checkbox;
}
html input[type="button"],
input[type="email"],
input[type="password"],
input[type="reset"],
input[type="search"],
input[type="submit"],
input[type="tel"],
input[type="text"] {
  -webkit-appearance: none;
  border-radius: 0;
}
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
body {
  background: var(--baseBackground);
}
body,
button,
input,
select,
td,
textarea,
th {
  font-size: 14px;
  line-height: 1.5;
  font-family: KakaoSmall, Apple SD Gothic Neo, Malgun Gothic, 맑은 고딕,
    sans-serif;
  font-weight: 400;
  color: #333;
}
a {
  color: #333;
}
a,
a:active,
a:hover {
  text-decoration: none;
}
address,
caption,
cite,
code,
dfn,
em,
var {
  font-style: normal;
  font-weight: 400;
}
`;
export default GlobalStyle;
