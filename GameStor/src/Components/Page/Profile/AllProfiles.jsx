import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {useTranslation} from "react-i18next";
import s from './Profile.module.css'

const AllProfiles = () => {
    const { t, i18n } = useTranslation();
    const profiles = [1,2,3,4,5]
    return (
        <div className={s.profiles}>
            {profiles.map((profile)=>
            <Link key={profile} to={`/profile/${profile}`}>
                {t("profile.profile")} {profile}
            </Link>
            )}
            <Outlet/>
        </div>
    );
};

export default AllProfiles;