import { createAsyncThunk } from '@reduxjs/toolkit';

import { addContactToApi, fetchContactsFromApi, deleteContactFromApi } from 'loginApi/loginApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkApi) => {
    try {
      const contacts = await fetchContactsFromApi();
      return contacts;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkApi) => {
    try {
      const result = await addContactToApi(data);
      return result;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkApi) => {
    try {
      const result = await deleteContactFromApi(id);
      return result;
    } catch (error) {
      thunkApi.rejectWithValue(error);
    }
  }
);