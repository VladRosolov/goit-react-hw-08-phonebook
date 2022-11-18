import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/contactsOperation';
import { getContacts } from 'redux/contacts/contactsSlice';
import { getFilter } from 'redux/contacts/filterSlice';
import css from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';
import { Loader } from '../Loader/Loader';

const ContactList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const { items, error, isLoading } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const getFilteredContacts = () => {
    if (!filter) {
      return items;
    }

    return items.filter(({ name }) =>
      name.toLocaleLowerCase().includes(filter.toLocaleLowerCase())
    );
  };

  const contactsToRender = getFilteredContacts();

  return (
    <ul className={css.contactList}>
      {isLoading ? (
        <div>
          <Loader />
        </div>
      ) : (
        contactsToRender.map(item => <ContactItem key={item.id} data={item} />)
      )}
      {error && <div>Something went wrong, please, try again</div>}
    </ul>
  );
};

export default ContactList;
