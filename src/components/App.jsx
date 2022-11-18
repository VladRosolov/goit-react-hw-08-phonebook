import React from 'react';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchCurrentUser } from 'redux/auth/authOperation';
import { getAuthentication } from 'redux/auth/authSlice';

import { Homeview } from './Application/Homeview/Homeview';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import { Loader } from './Application/Loader/Loader';
import AppBar from './Application/AppBar/AppBar';

const RegisterForm = lazy(() =>
  import('../components/Application/RegisterForm/RegisterForm')
);
const LoginForm = lazy(() =>
  import('../components/Application/LoginForm/LoginForm')
);
const Application = lazy(() => import('../components/Application/Application'));

const PageNotFound = lazy(() =>
  import('../components/Application/PagNotFound/PageNotFound')
);

function App() {
  const dispatch = useDispatch();
  const { isLoadingUser } = useSelector(getAuthentication);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <>
      {isLoadingUser ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<AppBar />}>
            <Route index element={<Homeview />} />
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <RegisterForm />
                </PublicRoute>
              }
            />
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginForm />
                </PublicRoute>
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute>
                  <Application />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      )}
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
