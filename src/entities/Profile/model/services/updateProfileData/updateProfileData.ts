import { createAsyncThunk } from '@reduxjs/toolkit';
import i18n from 'shared/config/i18n/i18n';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileForm } from '../../selectors/getProfileForm/getProfileForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/updateProfileData',
    async (_, { extra, rejectWithValue, getState }) => {
        const formData = getProfileForm(getState());

        try {
            const response = await extra.api.put<Profile>('/profile', formData);

            if (!response.data) {
                throw new Error('No user data returned');
            }

            return response.data;
        } catch (error) {
            return rejectWithValue(i18n.t('Ошибка при получении данных профиля'));
        }
    },
);
