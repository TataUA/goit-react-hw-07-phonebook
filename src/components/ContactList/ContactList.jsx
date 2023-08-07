import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import { fetchContactsThunk } from 'redux/contactsThunk';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { Loader } from 'components/Loader/Loader';
import { Error, List, Text } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const loading = useSelector(selectIsLoading);
  const visibleContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      {loading && <Loader />}
      {!loading && !error && !visibleContacts?.length && <Text>No found!</Text>}
      <List>
        {visibleContacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))}
      </List>
      {error && <Error>Sorry, something went wrong...</Error>}
    </>
  );
};
