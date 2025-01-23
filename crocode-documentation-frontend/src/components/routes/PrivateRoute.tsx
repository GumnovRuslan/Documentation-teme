import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isAdmin, children }: any) => {
  if (!isAdmin) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
};

export default PrivateRoute;
