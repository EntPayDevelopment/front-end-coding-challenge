import React, {useRef} from "react";
import './Header.scss'
import { BsFillArrowDownCircleFill } from 'react-icons/bs'

export const Header = (props) => {
  return (
    <header>
      <a href="/"><img src="/logo/crave.svg" alt="logo" width={114} /></a>
      <div className="to-favourite-list">
        To Watchlist
        <a className="to-favourite-list__arrow" onClick={props.goToList}>
          <BsFillArrowDownCircleFill />
        </a>
      </div>
    </header>
  )
};
