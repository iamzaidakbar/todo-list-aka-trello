import React from 'react';
import { FiUser } from "react-icons/fi";
import { GoTasklist } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoIosColorFilter } from "react-icons/io";

import { useLocation } from 'react-router-dom';
import '../styles/Tab/Tab.scss';

const Tab = () => {
  const { pathname } = useLocation();
  const currentPath = pathname.slice(1);

  const pathIcons = {
    dashboard: <GoTasklist />,
    profile: <FiUser />,
    theme: <IoIosColorFilter />,
  };

  return (
    <div className='Tab__path d-flex align-items-center'>
      <span className='Tab__path__icon'>{pathIcons[currentPath]}</span>
      <span className='Tab__path__right__icon'>{<MdKeyboardArrowRight/>}</span>
      <span className='Tab__path__current__path'>{currentPath}</span>
    </div>
  );
};

export default Tab;
