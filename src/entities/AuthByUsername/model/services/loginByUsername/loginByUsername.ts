import { createAsyncThunk } from '@reduxjs/toolkit';
import { User } from 'entities/User';
import axios from 'axios';
import i18n from 'shared/config/i18n/i18n';

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData);

            if (!response.data) {
                throw new Error('No user data returned');
            }

            return response.data;
        } catch (error) {
            // console.log('Login failed:', error);
            return thunkAPI.rejectWithValue(i18n.t('Ошибка авторизации'));
        }
    },
);
