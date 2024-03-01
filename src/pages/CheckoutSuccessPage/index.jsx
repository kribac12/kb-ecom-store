import { Link } from "react-router-dom";

const CheckoutSuccessPage = () => {
  return (
    <div>
      <h1>Order Successful</h1>
      <p>Your order has been placed successfully.</p>
      <Link to="/">Go back to the store</Link>
    </div>
  );
};

export default CheckoutSuccessPage;
