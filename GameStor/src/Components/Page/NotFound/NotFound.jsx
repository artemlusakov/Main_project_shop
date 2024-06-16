import * as React from "react";
import {Link} from "react-router-dom";
import s from "./NotFound.module.css"
import {useTranslation} from "react-i18next";

export default function NotFound (){
    const { t, i18n } = useTranslation();

    return <div className={s.NotFound}>
        <h2>{t('notfound.NotFoundMsg')}</h2>
        <Link to={"/"} > {t('notfound.NotFoundHome')} </Link>
    </div>;
}