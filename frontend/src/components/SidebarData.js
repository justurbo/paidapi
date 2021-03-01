import moduleName from 'module';

import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        className: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcons.IoIosPaper/>,
        className: 'nav-text'
    },
    {
        title: 'Documentation',
        path: '/documentation',
        icon: <IoIcons.IoMdDocument/>,
        className: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcons.IoMdPeople/>,
        className: 'nav-text'
    },
    {
        title: 'Help',
        path: '/help',
        icon: <IoIcons.IoMdHelpCircle/>,
        className: 'nav-text'
    },
]

export const LoginButton = [
    {
        title: 'Login',
        path: '/login',
        className: 'loginButton'
    }
]