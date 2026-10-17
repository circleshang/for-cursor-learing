import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/layout/Header.jsx'
import Footer from '../components/layout/Footer.jsx'

// 切换路由时回到页面顶部
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen w-full bg-background pt-16">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
