import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, selectUser } from 'redux/auth/authOperation';
import css from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const email = useSelector(selectUser);
  return (
    <div className={css.userMenu}>
      <span>Welcome, {email} !</span>
      <button
        type="button"
        className={css.userMenu_btn}
        onClick={() => dispatch(logoutUser())}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
