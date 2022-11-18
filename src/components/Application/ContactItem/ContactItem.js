import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsOperation';
import css from './ContactItem.module.css';

const ContactItem = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, number } = data;
  const onDeleteClick = (e, id) => {
    if (id === e.target.id) {
      e.target.textContent = 'Deleting...';
      e.target.setAttribute('disabled', 'true');
    }
    dispatch(deleteContact(id));
  };

  return (
    <li className={css.contact}>
      <div className={css.contact_item}>
        <p className={css.contact_name}>{name}</p>
        <p className={css.contact_number}>{number}</p>
        {/* <p className={css.contact_item}>
        {name}: {number}
      </p> */}
      </div>
      <button
        type="button"
        id={id}
        onClick={e => onDeleteClick(e, id)}
        className={css.deleteButton}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  data: PropTypes.objectOf(PropTypes.string.isRequired),
};
