import { classNames } from 'shared/lib/classNames/classNames';
import {FC, useState} from 'react';

import cls from './Sidebar.module.scss'
import { Button } from "shared/ui/Button/Button"
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}

const Sidebar: FC<NavbarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button onClick={onToggle}>Toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    );
};

export default Sidebar;
