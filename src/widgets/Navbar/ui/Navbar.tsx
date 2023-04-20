import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { FC } from 'react';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

const Navbar: FC<NavbarProps> = ({ className }) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div className={cls.links}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/" className={cls.link}>Main</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about" className={cls.link}>About</AppLink>
        </div>
    </div>
);

export default Navbar;
