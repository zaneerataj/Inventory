import React, { useState } from 'react';
import Sidebar from '../../CustomComponents/CustomSideBar/sidebar';
import { Outlet } from 'react-router-dom';
import { SidebarButton } from '../../CustomComponents/CustomSideBar/sidebar-button';
import { SidebarItems } from '../../CustomComponents/CustomSideBar/types';
import { Home, Bell, Mail, AreaChart, List, Bookmark, Users, User, MoreHorizontal } from 'lucide-react';

// interface ComponentProps {
//   visible: () => void;
//   Visibletoggle: boolean;
// }

const SideBar: React.FC<{ visible: () => void }> = () => {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const Visibletoggle = () => {
    setIsVisible(!isVisible);
  };
  console.log('Side bar : ', isVisible);

  const sidebarItems: SidebarItems = {
    items: [
      {
        main_label: 'Dashboard',
        links: [
          {
            label: 'usage',
            href: 'components',
            icon: Bell,
            content: '',
          },
          {
            label: 'charts',
            href: 'charts',
            icon: AreaChart,
            content: '',
          },
        ],
      },
      {
        main_label: 'Messages_label',
        links: [
          {
            label: 'Messages',
            href: 'message',
            icon: Mail,
            content: '',
          },
        ],
      },
      {
        main_label: 'Charts_label',
        links: [
          {
            label: 'charts',
            href: 'charts',
            icon: AreaChart,
            content: '',
          },
        ],
      },
      {
        main_label: 'List_label',
        links: [
          {
            label: 'list',
            href: 'list',
            icon: List,
            content: '',
          },
        ],
      },
      {
        main_label: 'Bookmark_label',
        links: [
          {
            label: 'bookmarks',
            href: 'bookmarks',
            icon: Bookmark,
            content: '',
          },
        ],
      },
      {
        main_label: 'communities_label',
        links: [
          {
            label: 'communities',
            href: 'communities',
            icon: Users,
            content: '',
          },
        ],
      },
      {
        main_label: 'profile_label',
        links: [
          {
            label: 'profile',
            href: 'profile',
            icon: User,
            content: '',
          },
        ],
      },
    ],
    extras: (
      <div className="flex flex-col gap-2">
        <SidebarButton icon={MoreHorizontal} className="w-full">
          More
        </SidebarButton>
        <SidebarButton
          className="w-full justify-center text-white"
          variant="default"
        >
          Options
        </SidebarButton>
      </div>
    ),
  };

  return (
    <>
      <Sidebar visible={Visibletoggle} sidebarItems={sidebarItems} />
      {/* <div className={`mx-5 mt-16 sm:ml-[${ isVisible ? '260px' : '120px' }] sm:mt-3 transition-width duration-300 ease-in-out`}> */}
      <div
        className={
          isVisible
            ? `mx-5 mt-16 sm:ml-[230px] sm:mt-3 transition-width duration-300 ease-in-out`
            : `mx-5 mt-16 sm:ml-[95px] sm:mt-3 transition-width duration-300 ease-in-out`
        }
      >
        <Outlet />
      </div>
    </>
  );
};

export default SideBar;
