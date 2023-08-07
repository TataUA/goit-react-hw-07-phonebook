import { createAsyncThunk } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from 'services/api';

export const fetchContactsThunk = createAsyncThunk(
  'contacts/fetchContactsThunk',
  async (_, thunkApi) => {
    try {
      const response = await fetchContacts();
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const addContactThunk = createAsyncThunk(
  'contacts/addContactThunk',
  async ({ name, number }, thunkApi) => {
    try {
      const response = await addContact(name, number);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContactsThunk',
  async (contactId, thunkApi) => {
    try {
      const response = await deleteContact(contactId);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
