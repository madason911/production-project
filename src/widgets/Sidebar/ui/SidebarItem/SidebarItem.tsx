import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';

interface SidebarItemProps {
  item: SidebarItemType,
  collapsed?: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => (
    <AppLink
        className={classNames(cls.item, { [cls.collapsed]: collapsed })}
        theme={AppLinkTheme.SECONDARY}
        to={item.path}
    >
        <item.Icon className={cls.icon} />
        <span className={cls.link}>{item.text}</span>
    </AppLink>
));
