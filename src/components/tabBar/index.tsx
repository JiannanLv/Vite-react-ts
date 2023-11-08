import React, { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './style.less';

const TabBar: React.FC = () => {
  const { pathname } = useLocation();
  const paths = useMemo(
    () => [
      {
        path: '/',
        text: '首页',
        iconPath: new URL('./images/icon_tab_1.png', import.meta.url),
        selectedIconPath: new URL(
          './images/icon_tab_1_sel.png',
          import.meta.url
        ),
      },
      {
        path: '/mine',
        text: '我的',
        iconPath: new URL('./images/icon_tab_4.png', import.meta.url),
        selectedIconPath: new URL(
          './images/icon_tab_4_sel.png',
          import.meta.url
        ),
      },
    ],
    []
  );
  return (
    <div className='vite-tab-bar'>
      {paths.map((v) => (
        <NavLink className='vite-tab-bar__item' key={v.path} to={v.path} replace>
          {pathname === v.path ? (
            <img className='icon' src={v.selectedIconPath.toString()} alt='' />
          ) : (
            <img className='icon' src={v.iconPath.toString()} alt='' />
          )}
          <span className='text'>{v.text}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default TabBar;