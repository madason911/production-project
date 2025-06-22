import { Counter } from 'entities/Counter';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

export default function MainPage() {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');

    const onChange = (newValue: string) => {
        setValue(newValue);
    };

    return (
        <div>
            <div>{t('Главная страница')}</div>
            <Input
                value={value}
                onChange={onChange}
                placeholder="Введите текст"
            />
            <Counter />
        </div>
    );
}
