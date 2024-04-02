import{r as a,s,j as r,L as h,u as p}from"./index-DyeX7M8-.js";import{a as x,c as m}from"./calculateDiscountPercentage-BoyKMnUi.js";import{P as i,D as f,a as j,b as P,c as v,S as w,d as b,O as y,e as R}from"./index-BCbsxhdl.js";const S=e=>{const[t,l]=a.useState(null),[o,c]=a.useState(!1),[d,n]=a.useState(!1);return a.useEffect(()=>{(async()=>{c(!0),n(!1);try{const u=await x.get(e);l(u.data)}catch(u){n(!0),console.error("Failed to fetch data:",u)}finally{c(!1)}})()},[e]),{data:t,isLoading:o,isError:d}},E=s.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  width: 300px;
`,I=s.div`
  width: 100%;
  position: relative;
`,q=s.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`,D=s.div`
  padding: 1rem;
`;function g({product:e}){const t=m(e.price,e.discountedPrice);return r.jsxs(E,{children:[r.jsxs(I,{children:[r.jsx(q,{src:e.image.url,alt:e.image.alt}),e.discountedPrice<e.price&&r.jsxs(f,{children:[t,"% OFF"]})]}),r.jsxs(D,{children:[r.jsx(j,{children:e.title}),r.jsx(P,{children:e.description}),r.jsxs(v,{children:[r.jsx(w,{}),e.rating]}),r.jsx(b,{children:e.discountedPrice<e.price?r.jsxs(r.Fragment,{children:[r.jsxs(y,{children:["$",e.price]}),r.jsxs("span",{children:["$",e.discountedPrice]})]}):r.jsxs("span",{children:["$",e.price]})})]}),r.jsx(h,{to:`/product/${e.id}`,children:r.jsx(R,{variant:"primary",size:"large",margin:"1rem",children:"View Product"})})]})}g.propTypes={product:i.shape({id:i.string.isRequired,title:i.string.isRequired,description:i.string,price:i.number.isRequired,discountedPrice:i.number,image:i.shape({url:i.string.isRequired,alt:i.string}),rating:i.number,tags:i.arrayOf(i.string),reviews:i.arrayOf(i.shape({id:i.string.isRequired,username:i.string.isRequired,rating:i.number.isRequired,description:i.string}))}).isRequired};const C=e=>e!=="image",F=s.div.withConfig({shouldForwardProp:C})`
  background-image: url(${({image:e})=>e});
  background-position: center;
  background-size: cover;
  height: 35vh;
  width: 100%;
  position: relative;
`,L=s.h1`
  text-align: center;
  margin-top: 20px;
`,O=s.div`
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  justify-content: center;
  margin-bottom: 10rem;
`,T="/assets/hero-FBVElSIS.jpg";function H(){const{data:e,isLoading:t,isError:l}=S("https://v2.api.noroff.dev/online-shop"),{setProducts:o,filteredProducts:c,setSearchTerm:d}=p();return a.useEffect(()=>{e&&o(e.data),d("")},[e,d,o]),t?r.jsx("div",{children:"Loading products..."}):l?r.jsx("div",{children:"Error loading products."}):r.jsxs("div",{children:[r.jsx(F,{image:T}),r.jsx(L,{children:"Browse Our Products"}),r.jsx(O,{children:c.map(n=>r.jsx(g,{product:n},n.id))})]})}export{H as default};
