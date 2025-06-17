import { Counter } from 'entities/Counter';
import { useTranslation } from 'react-i18next';

export default function MainPage() {
    const { t } = useTranslation('main');
    return (
        <div>
            <div>{t('Главная страница')}</div>
            <Counter />
        </div>
    );
}
