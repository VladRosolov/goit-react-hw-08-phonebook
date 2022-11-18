import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAuthentication } from 'redux/auth/authSlice';

export const PublicRoute = ({ children }) => {
  const { isLoggedIn } = useSelector(getAuthentication);

  return isLoggedIn ? <Navigate to="/contacts" /> : children;
};
