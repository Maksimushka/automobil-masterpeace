import { classNames } from 'shared/lib/classNames/classNames';
import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage: FC<ErrorPageProps> = ({ className }) => {
    const { t } = useTranslation();

    const onReload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorPage, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={onReload}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
