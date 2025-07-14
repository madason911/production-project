import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, { extra, rejectWithValue }) => {
        try {
            const response = await extra.api.get<Profile>('/profile');

            if (!response.data) {
                throw new Error('No user data returned');
            }

            return response.data;
        } catch (error) {
            return rejectWithValue(i18n.t('Ошибка при получении данных профиля'));
        }
    },
);
