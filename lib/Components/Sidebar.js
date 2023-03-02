import * as React from 'react';
import './Sidebar.scss';
import { RxHamburgerMenu } from "react-icons/rx";
import { BsFillDiagram3Fill, BsFillBookmarkStarFill, BsFillCalendarCheckFill, BsFillBriefcaseFill, } from "react-icons/bs";
import { IoDocumentsSharp, IoNewspaperOutline } from "react-icons/io5";
import { RiFileUserFill } from "react-icons/ri";
import { FaUserFriends } from "react-icons/fa";
import { TfiAnnouncement } from "react-icons/tfi";
var Sidebar = function () {
    var _a = React.useState(true), sbState = _a[0], setSbState = _a[1];
    return (React.createElement("div", { className: sbState ? 'sidebar' : 'sidebaropen' },
        React.createElement("div", { className: 'sidebaritem' },
            React.createElement("div", { className: "sidebaritemicon" },
                React.createElement(RxHamburgerMenu, { size: 20, color: '#fff', onClick: function () { return setSbState(!sbState); } }))),
        React.createElement("div", { className: 'sidebaritem' },
            React.createElement("div", { className: "sidebaritemicon" },
                React.createElement(BsFillBriefcaseFill, { size: 20, color: '#fff' })),
            React.createElement("a", { href: '#' }, "Job Openings")),
        React.createElement("div", { className: 'sidebaritem' },
            React.createElement("div", { className: "sidebaritemicon" },
                React.createElement(IoDocumentsSharp, { size: 20, color: "#fff" })),
            React.createElement("a", { href: '' }, "HR Documents")),
        React.createElement("div", { className: 'sidebaritem' },
            React.createElement("div", { className: " sidebaritemicon" },
                React.createElement(FaUserFriends, { size: 20, color: "#fff" })),
            React.createElement("a", { href: '' }, "Employee Details")),
        React.createElement("div", { className: 'sidebaritem' },
            React.createElement("div", { className: " sidebaritemicon" },
                React.createElement(TfiAnnouncement, { size: 20, color: "#fff" })),
            React.createElement("a", { href: '' }, "Announcements")),
        React.createElement("div", { className: 'sidebaritem' },
            React.createElement("div", { className: "sidebaritemicon" },
                React.createElement(IoNewspaperOutline, { size: 20, color: "#fff" }),
                " "),
            React.createElement("a", { href: '' }, "News")),
        React.createElement("div", { className: 'sidebaritem' },
            React.createElement("div", { className: "sidebaritemicon" },
                React.createElement(BsFillCalendarCheckFill, { size: 20, color: '#fff' })),
            React.createElement("a", { href: '' }, "Holidays List")),
        React.createElement("div", { className: 'sidebaritem' },
            React.createElement("div", { className: 'sidebaritemicon' },
                React.createElement(BsFillDiagram3Fill, { size: 20, color: '#fff' })),
            React.createElement("a", { href: '' }, "Organization Tree")),
        React.createElement("div", { className: 'sidebaritem' },
            React.createElement("div", { className: "sidebaritemicon" },
                React.createElement(RiFileUserFill, { size: 20, color: '#fff' }),
                " "),
            React.createElement("a", { href: '' }, "HR Feedback")),
        React.createElement("div", { className: 'sidebaritem' },
            React.createElement("div", { className: " sidebaritemicon" },
                React.createElement(BsFillBookmarkStarFill, { size: 20, color: '#fff' })),
            React.createElement("a", { href: '' }, "Star Of The Month"))));
};
export default Sidebar;
//# sourceMappingURL=Sidebar.js.map