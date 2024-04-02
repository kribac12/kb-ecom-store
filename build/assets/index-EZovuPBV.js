import{s,a as m,r,u as j,j as e}from"./index-DyeX7M8-.js";import{c as P,a as v}from"./calculateDiscountPercentage-BoyKMnUi.js";import{D as y,b as C,c as w,S,d as T,O as E,e as b,f as R}from"./index-BCbsxhdl.js";const D=s.div`
  padding: 20px 0px;
  display: block;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`,I=s.h1``,$=s.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`,A=s.div`
  flex: 1;
  position: relative;
`;s.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;const F=s.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0px 20px;

  @media (min-width: 768px) {
    padding-left: 50px;
  }
`,k=s.div`
  margin-top: 20px;
`,L=s.div`
  background-color: ${({theme:n})=>n.colors.light};
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 8px;
`;function B(){const{id:n}=m(),[t,l]=r.useState(null),[u,d]=r.useState(!1),[p,x]=r.useState(!1),[o,a]=r.useState(!1),h=j(i=>i.addToCart);r.useEffect(()=>{(async()=>{d(!0);try{const c=await v.get(`https://v2.api.noroff.dev/online-shop/${n}`);l(c.data.data)}catch(c){console.error("Failed to fetch product details:",c),x(!0)}d(!1)})()},[n]);function f(){h({...t,quantity:1}),a(!0)}if(r.useEffect(()=>{const i=setTimeout(()=>{a(!1)},4e3);return()=>clearTimeout(i)},[o]),u)return e.jsx("div",{children:"Loading product..."});if(p||!t)return e.jsx("div",{children:"Error loading product."});const g=P(t.price,t.discountedPrice);return e.jsxs(D,{children:[e.jsxs($,{children:[e.jsxs(A,{children:[e.jsx("img",{src:t.image.url,alt:t.image.alt}),t.discountedPrice<t.price&&e.jsxs(y,{children:[g,"% OFF"]})]}),e.jsxs(F,{children:[e.jsx(I,{children:t.title}),e.jsx(C,{children:t.description}),e.jsxs(w,{children:[e.jsx(S,{}),t.rating]}),e.jsx(T,{children:t.discountedPrice<t.price?e.jsxs(e.Fragment,{children:[e.jsxs(E,{children:["$",t.price]}),e.jsxs("span",{children:["$",t.discountedPrice]})]}):e.jsxs("span",{children:["$",t.price]})}),e.jsx(b,{variant:"primary",size:"large",onClick:f,children:"Add to Cart"}),o&&e.jsxs(R,{children:[t.title," added to cart!"]})]})]}),e.jsxs(k,{children:[e.jsx("h1",{children:"Reviews"}),t.reviews&&t.reviews.length>0?t.reviews.map(i=>e.jsx(L,{children:e.jsxs("p",{children:[e.jsx("strong",{children:i.username}),": ",i.description," - Rating: ",i.rating]})},i.id)):e.jsxs("p",{children:["The product ",e.jsx("strong",{children:t.title})," has not received any reviews yet."]})]})]})}export{B as default};
