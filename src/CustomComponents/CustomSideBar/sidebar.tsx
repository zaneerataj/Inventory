'use client';

import {
  Bell,
  Bookmark,
  Home,
  List,
  Mail,
  MoreHorizontal,
  User,
  Users,
  AreaChart,
} from 'lucide-react';
import React from 'react';
import SidebarDesktop from './sidebar-desktop';
import { SidebarItems } from './types';
import { SidebarButton } from './sidebar-button';
// import { useMediaQuery } from 'usehooks-ts';
import SidebarMobile from './sidebar-mobile';
import { useMediaQuery } from '@react-hook/media-query';

interface SidebarProps {
  visible: () => void;
  sidebarItems: SidebarItems; // Define sidebarItems as a prop
}

// const sidebarItems: SidebarItems = {
//   links: [
//     { label: 'Home', href: '/', icon: Home },
//     { label: 'usage', href: 'components', icon: Bell },
//     { label: 'Messages', href: 'message', icon: Mail },
//     { label: 'charts', href: 'charts', icon: AreaChart },
//     { label: 'list', href: 'list', icon: List },
//     { label: 'bookmarks', href: 'bookmarks', icon: Bookmark },
//     { label: 'communities', href: 'communities', icon: Users },
//     { label: 'profile', href: 'profile', icon: User },
//   ],
//   extras: (
//     <div className='flex flex-col gap-2'>
//       <SidebarButton icon={MoreHorizontal} className='w-full'>
//         More
//       </SidebarButton>
//       <SidebarButton className='w-full justify-center text-white' variant='default'>
//         Options
//       </SidebarButton>
//     </div>
//   ),
// };

const Sidebar: React.FC<SidebarProps> = ({ visible, sidebarItems }) => {
  const isDesktop = useMediaQuery('(min-width: 640px)');

  return isDesktop ? (
    <SidebarDesktop sidebarItems={sidebarItems}  visible={visible} />
  ) : (
    <SidebarMobile sidebarItems={sidebarItems} />
  );
};

export default Sidebar;
