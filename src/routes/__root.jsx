import { createRootRoute, Outlet } from '@tanstack/react-router'
import { Sidebar } from '../components/sidebar'
import './../App.css'
export const Route = createRootRoute({
  component: () => (
    <>
    <div className='flex flex-row'>

    <Sidebar />
      <Outlet />
    </div>
      
    </>
  ),
})