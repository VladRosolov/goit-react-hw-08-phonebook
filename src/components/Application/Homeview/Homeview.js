import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Loader } from '../Loader/Loader';
import Container from '../Container/Container';
import css from './Homeview.module.css';

export const Homeview = () => {
  return (
    <Container>
      <div className={css.homeview}>
        <h2 className={css.homeview_title}>Your personal phonebook</h2>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </Container>
  );
};
