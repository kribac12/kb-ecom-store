import { Helmet } from "react-helmet";

function NotFound() {
  return (
    <div>
      <Helmet>
        <title>404 Not Found - BuySphere</title>
        <meta name="description" content="The page you are looking for does not exist or has been moved." />
      </Helmet>
      Page was Not Found
    </div>
  );
}

export default NotFound;
