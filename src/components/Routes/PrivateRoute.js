import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthentication } from 'redux/auth/authSlice';

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useSelector(getAuthentication);

  return isLoggedIn ? children : <Navigate to="/login" />;
};
