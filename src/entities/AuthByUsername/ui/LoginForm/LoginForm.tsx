import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginActions } from 'entities/AuthByUsername/model/slice/loginSlice';
import { getLoginForm } from 'entities/AuthByUsername/model/selectors/getLoginForm/getLoginForm';
import { loginByUsername } from 'entities/AuthByUsername/model/services/loginByUsername/loginByUsername';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string;
}

export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const loginForm = useSelector(getLoginForm);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername(loginForm));
    }, [dispatch, loginForm]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input
                type="text"
                placeholder={t('Введите username')}
                autofocus
                className={cls.input}
                onChange={onChangeUsername}
                value={loginForm.username}
            />
            <Input
                type="password"
                placeholder={t('Введите пароль')}
                className={cls.input}
                onChange={onChangePassword}
                value={loginForm.password}
            />
            <Button
                className={cls.loginBtn}
                theme={ButtonTheme.OUTLINE}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
