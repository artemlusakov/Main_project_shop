"use client" // говорим что данная деректива будет выполнятся на стороне клиента т.к effector-react это клиентская часть
import {useLang} from "@/app/hooks/useLang";
import Logo from "@/app/components/elements/Logo/Logo";
import Link from "next/link";

import search from "../../../asets/img/search.svg"
import favorites from "../../../asets/img/favorites.svg"
import comparison from "../../../asets/img/comparison.svg"
import cart from "../../../asets/img/cart.svg"
import profile from "../../../asets/img/profile.svg"

const Header = () => {
  const {lang, translation} = useLang()
  return (
    <header className="header">
      <nav>
      <div className="container headerContainer">

        <button className="btn-reset headerBurger">
          {translation[lang].header.menu_btn}
        </button>

        <div className="headerLogo">
          <Logo/>
        </div>

        <ul className="list-reset ">
          <li>
            <button className="btnReset"> <img src={search} alt="search"/> </button>
          </li>

          <li>
            <Link href='/favorites' className=''> <img src={favorites} alt="favorites"/> </Link>
          </li>

          <li>
            <Link href='/comparison' className=''><img src={comparison} alt="comparison"/></Link>
          </li>

          <li>
            <Link href='/cart' className=''><img src={cart} alt="cart"/><img src={cart} alt="cart"/></Link>
          </li>

          <li>
            <Link href='/profile' className=''><img src={profile} alt="profile"/></Link>
          </li>

        </ul>
      </div>
      </nav>
    </header>
  );
};

export default Header;
