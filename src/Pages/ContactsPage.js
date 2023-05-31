import ContactForm from '../components/ContactForm/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/Contact/ContactList';
import { useFetchContactsQuery } from 'redux/contactsApi';
import { UserMenu } from 'components/UserMenu/UserMenu';

export const ContactsPage = () => {
  const { data } = useFetchContactsQuery();
  return (
    <div>
      <UserMenu />
      <ContactForm />
      <Filter />
      {data?.length > 0 ? (
        <ContactList contacts={data} />
      ) : (
        <p className="app">You don’t have any contacts yet...🥺</p>
      )}
    </div>
  );
};
