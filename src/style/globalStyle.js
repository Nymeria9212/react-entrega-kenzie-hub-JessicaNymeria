import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
body{
    box-sizing: border-box;
	
	max-width: 100vw;
	font-family: var(--font-family);
}
:root{

--color-primary:#FF577F;
--color-primary-focus:#FF427F;
--color-primary-negative: #59323F;
--grey-4:#121214;
--grey-3:#212529;
--grey-2:#343B41;
--grey-1:#868E96;
--grey-0:#F8F9FA;

--title:1.75rem;
--title-1-3:1rem;
--text-bold: 600;
--text-bold-2:500;
--text-italic: italic 0.75rem;
--text-regular: 0.75rem;
--font-family: 'Inter', sans-serif;

--radius-1: 0.375rem;
--radius-2:0.5rem;

}



`