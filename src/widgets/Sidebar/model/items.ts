import { t } from 'i18next';
import { FC, SVGProps } from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import MainPage from 'shared/assets/Icons/main-page.svg';
import AboutPage from 'shared/assets/Icons/about-page.svg';
import ProfilePage from 'shared/assets/Icons/profile-page.svg';

export interface SidebarItemType {
  path: string;
  text: string;
  Icon: FC<SVGProps<SVGSVGElement>>
}

export const SidebarItemList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        text: t('Главная'),
        Icon: MainPage,
    },
    {
        path: RoutePath.about,
        text: t('О себе'),
        Icon: AboutPage,
    },
    {
        path: RoutePath.profile,
        text: t('Профиль'),
        Icon: ProfilePage,
    },
];
