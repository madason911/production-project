import { classNames } from 'shared/lib/classNames/classNames';

import { memo, type FC, type PropsWithChildren } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
 className?: string;
 theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const {
        to,
        className,
        theme = AppLinkTheme.PRIMARY,
        children,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(cls.AppLink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
