import React from 'react'
import { Outlet } from 'react-router-dom'
import TabBar from '@/components/tabBar'

const Layout: React.FC = () => {
  return (
    <>
      <TabBar />
      {/* 视图容器，类似于vue中的 router-view */}
      <Outlet />
    </>
  )
}

export default Layout
