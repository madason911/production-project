import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError = memo(({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const relaodPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            {t('Произошла ошибка!')}
            <button
                type="button"
                onClick={relaodPage}
            >
                {t('Обновить страницу')}
            </button>
        </div>
    );
});
