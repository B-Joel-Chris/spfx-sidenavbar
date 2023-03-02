import * as React from 'react'
import './Sidebar.scss'
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillDiagram3Fill,BsFillBookmarkStarFill,BsFillCalendarCheckFill,BsFillBriefcaseFill,} from "react-icons/bs";
import { IoDocumentsSharp,IoNewspaperOutline } from "react-icons/io5";
import { RiFileUserFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";



const Sidebar = () => {
    const[sbState, setSbState] = React.useState<any>(true)
    

  return (
    <div className={sbState?'sidebar':'sidebaropen'}>
       <div className='sidebaritem'><div className="sidebaritemicon"><RxHamburgerMenu size={20} color='#fff' onClick={()=>setSbState(!sbState)}/></div></div>

       <div className='sidebaritem'><div className="sidebaritemicon"><BsFillBriefcaseFill size={20} color='#fff'/></div><a href='#'>Job Openings</a></div>

       <div className='sidebaritem'><div className="sidebaritemicon"><IoDocumentsSharp size={20} color="#fff"/></div><a href=''>HR Documents</a></div>
       

       <div className='sidebaritem'><div className=" sidebaritemicon"><FaUserFriends  size={20} color="#fff"/></div><a href=''>Employee Details</a></div>

       <div className='sidebaritem'><div className=" sidebaritemicon"><TfiAnnouncement size={20} color="#fff"/></div><a href=''>Announcements</a></div>

       <div className='sidebaritem'><div className="sidebaritemicon"><IoNewspaperOutline size={20} color="#fff"/> </div><a href=''>News</a></div>

       <div className='sidebaritem'><div className="sidebaritemicon"><BsFillCalendarCheckFill size={20} color='#fff'/></div><a href=''>Holidays List</a></div>

       <div className='sidebaritem'><div className='sidebaritemicon'><BsFillDiagram3Fill size={20} color='#fff'/></div><a href=''>Organization Tree</a></div>

       <div className='sidebaritem'><div className="sidebaritemicon"><RiFileUserFill size={20} color='#fff'/> </div><a href=''>HR Feedback</a></div>

       <div className='sidebaritem'><div className=" sidebaritemicon"><BsFillBookmarkStarFill size={20} color='#fff'/></div><a href=''>Star Of The Month</a></div>
       
   </div>
  )
}

export default Sidebar


