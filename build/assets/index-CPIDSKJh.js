import{s as r,L as p,b as x,u,j as t}from"./index-DyeX7M8-.js";import{a as g,d as h,e as n}from"./index-BCbsxhdl.js";const C=r.div`
  margin: auto;
  padding: 20px 0px;
  display: block;
`,f=r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme:i})=>i.colors.border};
  padding-bottom: 20px;
  margin-bottom: 20px;
`,j=r.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 20px;
`,b=r.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 20px;
`,v=r(g)`
  font-size: 1.2rem;
`,y=r(h)`
  font-size: 1rem;
`,k=r.div`
  text-align: right;
  font-weight: bold;
  font-size: 1.25rem;
  margin-bottom: 20px;
`,I=r.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  margin-top: 20px;
`,s=r(p)`
  color: ${({theme:i})=>i.colors.primary};
  text-decoration: underline;
  font-size: 1.2rem;
`;function w(){const i=x(),{cartItems:o,removeFromCart:c,clearCart:l}=u(e=>({cartItems:e.cartItems,removeFromCart:e.removeFromCart,clearCart:e.clearCart}));function d(){l(),i("/checkout-success",{replace:!0})}const m=o.reduce((e,a)=>e+a.price*a.quantity,0);return t.jsx(C,{children:o.length>0?t.jsxs(t.Fragment,{children:[o.map(e=>t.jsxs(f,{children:[t.jsx(j,{src:e.image.url,alt:e.image.alt}),t.jsxs(b,{children:[t.jsx(v,{children:e.title}),t.jsxs(y,{children:["$",e.price," x ",e.quantity]}),t.jsx(n,{variant:"delete",size:"medium",onClick:()=>c(e.id),children:"Remove"})]})]},e.id)),t.jsxs(k,{children:["Total: $",m.toFixed(2)]}),t.jsx("p",{children:t.jsx(s,{to:"/",children:"Continue shopping"})}),t.jsx(n,{variant:"primary",size:"fullWidth",margin:"20px auto",onClick:d,children:"Checkout"})]}):t.jsxs(I,{children:["Oh no! Your cart is empty. ",t.jsx(s,{to:"/",children:"Go back to our beautiful products."})]})})}export{w as default};
