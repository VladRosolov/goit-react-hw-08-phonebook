import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contactsSlice';
import { addContact } from 'redux/contacts/contactsOperation';
import { nanoid } from 'nanoid';

import { Loader } from '../Loader/Loader';
import { toast } from 'react-toastify';

import css from './ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
    }
  };

  const dispatch = useDispatch();
  const { items, addingLoader } = useSelector(getContacts);

  const contactAlreadyExists = (name, number) => {
    return items.find(
      item =>
        item.name.toLocaleLowerCase() === name.toLocaleLowerCase() ||
        item.number === number
    );
  };

  const addContactToList = (id, name, number) => {
    if (contactAlreadyExists(name, number)) {
      return toast.error(`${name} ${number} is already in Phonebook`);
    }

    dispatch(addContact({ id, name, number }));
    setName('');
    setNumber('');
  };

  const onFormSubmit = e => {
    e.preventDefault();

    addContactToList(nanoid(), name, number);
  };

  const nameId = nanoid();
  const numberId = nanoid();

  return (
    <form onSubmit={onFormSubmit} className={css.contactform}>
      <h1 className={css.contactform_title}>Add contact to your Phonebook</h1>
      <label htmlFor={nameId} className={css.contactform_label}>
        Name
      </label>
      <input
        id={nameId}
        onChange={handleInputChange}
        value={name}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <label htmlFor={numberId}>Number</label>
      <input
        id={numberId}
        onChange={handleInputChange}
        value={number}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      {addingLoader ? (
        <Loader />
      ) : (
        <button type="submit" disabled={number && name ? false : true}>
          Add contact
        </button>
      )}
    </form>
  );
};

export default ContactForm;
