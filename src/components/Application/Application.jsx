import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import css from './Application.module.css';

const Application = () => {
  return (
    <div className={css.contacts}>
      <div className={css.container_path}>
        <ContactForm />
      </div>

      {/* <h2>Contacts</h2> */}
      <div className={css.container_path && css.contactList}>
        <h1 className={css.contactlist_title}>Check your contacts</h1>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default Application;
