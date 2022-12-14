import React from 'react';
import css from './AppBar.module.css';
import Navigation from './Navigation/Navigation';
import AuthNav from './AuthNav/AuthNav';
import UserMenu from './UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getLoggedIn } from 'redux/auth/authOperation';
import Container from '../Container/Container';
import { Outlet, NavLink } from 'react-router-dom';
import { Suspense } from 'react';
import { Loader } from '../Loader/Loader';

export default function AppBar() {
  const isLoggedIn = useSelector(getLoggedIn);
  return (
    <>
      <header className={css.header}>
        <Container>
          <div className={css.header_box}>
            {/* <Navigation /> */}
            {isLoggedIn ? (
              <NavLink
                to="/contacts"
                className={({ isActive }) =>
                  isActive ? css.active : undefined
                }
              >
                Phonebook
              </NavLink>
            ) : (
              <Navigation />
            )}
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </div>
        </Container>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
