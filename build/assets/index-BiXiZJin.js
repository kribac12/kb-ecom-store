import{g as c,s as i,j as u}from"./index-XVuHETuZ.js";var n={exports:{}},l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",y=l,h=y;function a(){}function p(){}p.resetWarningCache=a;var d=function(){function e(g,v,x,P,R,s){if(s!==h){var t=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw t.name="Invariant Violation",t}}e.isRequired=e;function r(){return e}var o={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:p,resetWarningCache:a};return o.PropTypes=o,o};n.exports=d();var m=n.exports;const T=c(m),b=i.button`
  background-color: ${({theme:e,variant:r})=>e.buttonVariants[r].backgroundColor};
  color: ${({theme:e,variant:r})=>e.buttonVariants[r].color};
  width: ${({theme:e,size:r})=>e.buttonSizes[r]||"auto"};
  margin: ${({margin:e})=>e||"0"};
  padding: 12px 16px;
  &:hover {
    background-color: ${({theme:e,variant:r})=>e.buttonVariants[r].hoverBackgroundColor};
    border-color: ${({theme:e,variant:r})=>e.buttonVariants[r].hoverBorderColor};
  }
`,f=e=>u.jsx(b,{...e,children:e.children});f.propTypes={children:T.node.isRequired};export{T as P,f as S};
