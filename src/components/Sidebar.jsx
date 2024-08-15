import React from 'react'
import '../styles/Sidebar/Sidebar.scss'
import { Link, useLocation } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { LuUser } from "react-icons/lu";
import { IoIosColorFilter } from "react-icons/io";

const pages = [
  {
    id: 1,
    path: '/dashboard',
    label: 'Dashboard',
    icon: <RxDashboard  />
  },
  {
    id: 2,
    path: '/profile',
    label: 'Profile',
    icon: <LuUser  />
  },
  {
    id: 3,
    path: '/theme',
    label: 'Theme',
    icon: <IoIosColorFilter  />
  },
];




const Sidebar = () => {
  const { pathname } = useLocation()

  return (
    <div className='Sidebar d-flex flex-column'>
      <div className='Sidebar__Brand'>
        ToDo
      </div>
      <div className='Sidebar__List'>
        <ul className='Sidebar__List__Group'>
          {pages.map((page) => (
            <li className={`Sidebar__List__Group__Item d-flex align-items-center ${pathname === page.path ? 'active' : ''}`} key={page.id}>
              {page.icon}
              <Link className='Sidebar__List__Group__Item__Action' to={page.path}>{page.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar