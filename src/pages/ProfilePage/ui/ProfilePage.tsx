import { profileReducer } from 'entities/Profile';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';

const reducers: ReducerList = {
    profile: profileReducer,
};

export default function ProfilePage() {
    const { t } = useTranslation('profile');

    return (
        <div>
            <DynamicModuleLoader reducers={reducers}>
                <div>{t('ProfilePage')}</div>
            </DynamicModuleLoader>
        </div>
    );
}
