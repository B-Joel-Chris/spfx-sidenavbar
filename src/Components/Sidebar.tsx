import * as React from 'react'
import './Sidebar.scss'

const Sidebar = () => {
    const[sbState, setSbState] = React.useState(0)
   
  return (
    <div className='sidebar'>
       <div className='sidebaritem'><button>Toggle</button></div>

       <div className='sidebaritem'><p>Home</p></div>
       <div className='sidebaritem'><p>Home</p></div>

       <div className='sidebaritem'><p>Home</p></div>

       <div className='sidebaritem'><p>Home</p></div>

       <div className='sidebaritem'><p>Home</p></div>

       <div className='sidebaritem'><p>Home</p></div>

       
    </div>
  )
}

export default Sidebar