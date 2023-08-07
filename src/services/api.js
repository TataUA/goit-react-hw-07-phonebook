import axios from 'axios';

axios.defaults.baseURL = 'https://64ca6df2700d50e3c704e441.mockapi.io/api';

export const fetchContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addContact = async (name, number) => {
  const { data } = await axios.post('/contacts', { name, number });
  return data;
};

export const deleteContact = async contactId => {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
};
