import{s as t,U as p,F as d,g as l,j as u}from"./index-DyeX7M8-.js";const C=t(d)`
  color: ${({theme:o})=>o.colors.accent};
  margin-right: 4px;
`,w=t.span`
  text-decoration: line-through;
  color: ${({theme:o})=>o.colors.dark};
  margin-right: 0.5rem;
`,E=t.div`
  margin-top: 1rem;
  font-weight: bold;
`,F=t.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({theme:o})=>o.colors.accent};
  padding: 0.25rem 0.5rem;
  border-radius: 0 0 0 5px;
  font-size: 0.75rem;
  font-weight: bold;
`,j=t.h2`
  margin: 0;
  font-size: 1.25rem;
`,D=t.p`
  color: ${({theme:o})=>o.colors.dark};
`,I=t.div`
  display: flex;
  align-items: center;
  gap: 4px;
`,g=p`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,z=t.div`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${({theme:o})=>o.colors.accent};
  padding: 25px;
  border-radius: 5px;
  animation: ${g} 0.5s ease-in-out;
  z-index: 1000;
`;var a={exports:{}},m="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",h=m,y=h;function s(){}function c(){}c.resetWarningCache=s;var f=function(){function o(S,R,$,k,O,i){if(i!==y){var n=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw n.name="Invariant Violation",n}}o.isRequired=o;function r(){return o}var e={array:o,bigint:o,bool:o,func:o,number:o,object:o,string:o,symbol:o,any:o,arrayOf:r,element:o,elementType:o,instanceOf:r,node:o,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:c,resetWarningCache:s};return e.PropTypes=e,e};a.exports=f();var b=a.exports;const x=l(b),P=o=>!["variant","size","margin"].includes(o),T=t.button.withConfig({shouldForwardProp:P})`
  background-color: ${({theme:o,variant:r})=>o.buttonVariants[r].backgroundColor};
  color: ${({theme:o,variant:r})=>o.buttonVariants[r].color};
  width: ${({theme:o,size:r})=>o.buttonSizes[r]||"auto"};
  margin: ${({margin:o})=>o||"0"};
  padding: 12px 16px;
  &:hover {
    background-color: ${({theme:o,variant:r})=>o.buttonVariants[r].hoverBackgroundColor};
    border-color: ${({theme:o,variant:r})=>o.buttonVariants[r].hoverBorderColor};
  }
`,v=o=>u.jsx(T,{...o,children:o.children});v.propTypes={children:x.node.isRequired};export{F as D,w as O,x as P,C as S,j as a,D as b,I as c,E as d,v as e,z as f};
