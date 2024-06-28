import React from 'react';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import s from "./Navigate.module.css";
import SwitchLanguage from '../SwitchLanguage/SwitchLanguage';

import Logo from "../../../assets/IMG/Pc-logo-png.png";
import ProfileIcon from "../../../assets/IMG/Profile.png";
import IconLink from "../../../assets/IMG/search.png"
import ModalWindow from '../ModalWindow/ModalWindow.jsx';



const Navigate = () => {
    const [modalActive, setModalActive] = React.useState(false);
    const { t, i18n } = useTranslation();

    return (
        <nav>
            <ul>
                <li className='bgw p5 br10px'><Link to={'/'} className={s.NavigateLogo}><img src={Logo} alt="Logo"/></Link></li>
                    <div className={s.NavSearch }>
                        <li className={s.NavigateBtn}><button className='p5 '>{t("navigate.catalog")}</button></li>
                        <div className={s.NavLinkBloc}>
                            <li className={s.NavInput}><input className='p5' type="text" placeholder={t('navigate.inputText')}/></li>
                            <li> <button className={s.NavSubmit}><img src={IconLink} alt="" /> </button></li>
                        </div>
                    </div>

                <div className={s.ProfilBloc}>
                <SwitchLanguage />
                <li className='bgw br100 p5'><button onClick={()=>setModalActive(true)}> <img src={ProfileIcon} alt='Profil.icon'/> </button></li>
                </div>
                
                <ModalWindow active={modalActive} setActive={setModalActive}>
                    <h1>регистрация</h1>
                </ModalWindow>
            </ul>
        </nav>
    );
};

export default Navigate;