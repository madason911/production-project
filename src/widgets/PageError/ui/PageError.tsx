import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export const PageError =  ({ className }: PageErrorProps) => {
  const { t } = useTranslation();

  const relaodPage = () => {
    location.reload();
  }

  return (
    <div className={classNames(cls.PageError, {}, [className])}>
      {t('Произошла ошибка!')}
      <button onClick={relaodPage}>
        {t('Обновить страницу')}
      </button>
    </div>
  );
};