import { Outlet } from 'react-router-dom'
import TabBar from '@/components/tabBar'
import Header from '@/components/header'

const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <TabBar />
      {/* 视图容器，类似于vue中的 router-view */}
      <Outlet />
    </>
  )
}

export default Layout
