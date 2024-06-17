import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    const { t, i18n } = useTranslation();
    return (
        <nav>
            <ul>
                <li><img src="../../../assets/img/Pc-logo-png.png" alt="Logo"/></li>
                <>
                    <li><button>{t("navigate.catalog")}</button></li>

                </>
            </ul>
        </nav>
    );
};

export default Navigation;