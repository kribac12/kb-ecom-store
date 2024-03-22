import { s as r, L as m, b as p, u as x, j as e } from "./index-XVuHETuZ.js";
import { P as u, c as g } from "./sharedStyles-OzCrwdoD.js";
import { S as n } from "./index-BiXiZJin.js";
const h = r.div`
  margin: auto;
  padding: 20px 0px;
  display: block;
`,
  f = r.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme: o }) => o.colors.border};
  padding-bottom: 20px;
  margin-bottom: 20px;
`,
  C = r.img`
  width: 150px;
  height: 150px;
  object-fit: cover;
  margin-right: 20px;
`,
  j = r.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 20px;
`,
  v = r(u)`
  font-size: 1.2rem;
`,
  y = r(g)`
  font-size: 1rem;
`,
  b = r.div`
  text-align: right;
  font-weight: bold;
  font-size: 1.25rem;
`,
  k = r.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  margin-top: 20px;
`,
  I = r(m)`
  color: ${({ theme: o }) => o.colors.primary};
  text-decoration: none;
  margin-top: 10px;
`;
function F() {
  const o = p(),
    { cartItems: i, removeFromCart: s, clearCart: c } = x((t) => ({ cartItems: t.cartItems, removeFromCart: t.removeFromCart, clearCart: t.clearCart }));
  function l() {
    c(), o("/checkout-success", { replace: !0 });
  }
  const d = i.reduce((t, a) => t + a.price * a.quantity, 0);
  return e.jsx(h, {
    children:
      i.length > 0
        ? e.jsxs(e.Fragment, {
            children: [
              i.map((t) =>
                e.jsxs(
                  f,
                  {
                    children: [
                      e.jsx(C, { src: t.image.url, alt: t.image.alt }),
                      e.jsxs(j, {
                        children: [
                          e.jsx(v, { children: t.title }),
                          e.jsxs(y, { children: ["$", t.price, " x ", t.quantity] }),
                          e.jsx(n, { variant: "delete", size: "medium", onClick: () => s(t.id), children: "Remove" }),
                        ],
                      }),
                    ],
                  },
                  t.id
                )
              ),
              e.jsxs(b, { children: ["Total: $", d.toFixed(2)] }),
              e.jsx(n, { variant: "primary", size: "fullWidth", margin: "20px auto", onClick: l, children: "Checkout" }),
            ],
          })
        : e.jsxs(k, { children: ["Oh no! Your cart is empty. ", e.jsx(I, { to: "/", children: "Go back to our beautiful products." })] }),
  });
}
export { F as default };
