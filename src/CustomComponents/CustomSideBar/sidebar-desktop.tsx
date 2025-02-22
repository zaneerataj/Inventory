'use client';

import { SidebarButton } from './sidebar-button';
import { SidebarItems } from './types';
import { Separator } from '../../../components/ui/separator';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../../../components/ui/popover';
import { Button } from '../../../components/ui/button';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '../../../components/ui/avatar';
import { LogOut, MoreHorizontal, Settings } from 'lucide-react';
// import { usePathname } from 'next/navigation';
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import CustomAccordion from '../CustomAccordian/CustomAccordia';
import CustomAccordionSidebar from '../CustomAccordianSidebar.tsx/CustomAccordianSidebar';

interface SidebarDesktopProps {
  sidebarItems: SidebarItems;
  visible: (visibility: boolean) => void;
}

const SidebarDesktop: React.FC<SidebarDesktopProps> = ({
  sidebarItems,
  visible,
}) => {
  const pathname = useLocation();

  const [isVisible, setIsVisible] = useState<boolean>(true);

  const ChangeVisible = () => {
    setIsVisible(!isVisible);
    visible(!isVisible);
  };

  // const HoverIn = () => {
  //   setIsVisible(true);
  //   visible(true);
  // }

  // const Hoverout = () => {
  //   setIsVisible(false);
  //   visible(false);
  // }
  return (
    // <aside onMouseEnter={HoverIn} onMouseLeave={Hoverout} className={isVisible ? `w-[220px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r transition-width duration-300 ease-in-out` : `w-[80px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r transition-width duration-300 ease-in-out`}>
    <aside
      className={
        isVisible
          ? `w-[220px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r transition-width duration-300 ease-in-out`
          : `w-[80px] max-w-xs h-screen fixed left-0 top-0 z-40 border-r transition-width duration-300 ease-in-out`
      }
    >
      <div className="h-full px-3 py-4 overflow-auto ">
        {/* <h3 className='mx-3 text-lg font-semibold text-foreground cursor-pointer'>{isVisible ? "Inventory and POS" : "I&P"}</h3> */}
        <h3
          className="mx-3 text-lg font-semibold text-foreground cursor-pointer"
          onClick={ChangeVisible}
        >
          {isVisible ? 'Inventory and POS' : 'I&P'}
        </h3>
        <div className="mt-5">
          <div className="flex flex-col gap-1 w-full">
            {/* <SidebarButton
                  variant={
                    pathname.pathname === link.href ? 'secondary' : 'ghost'
                  }
                  icon={link.icon}
                  className="w-full"
                >
                  {isVisible ? link.label : null}
                </SidebarButton> */}
            <CustomAccordionSidebar
              items={sidebarItems.items.map((link) => ({
                label: link.main_label,
                content: (
                  <>
                    {link.links.map((content) => {
                      return (
                        <Link to={content.href} key={content.label}>
                          <SidebarButton
                            variant={
                              pathname.pathname === content.content
                                ? 'secondary'
                                : 'ghost'
                            }
                            icon={content.icon}
                            className="w-full"
                          >
                            {isVisible ? content.label : null}
                          </SidebarButton>
                        </Link>
                      );
                    })}
                  </>
                ),
              }))}
            />
            {/* {sidebarItems.links.map((link, index) => (
                <CustomAccordionSidebar  items={[{ label: link.label, content: (
                  <SidebarButton
                  variant={
                    pathname.pathname === link.href ? 'secondary' : 'ghost'
                  }
                  icon={link.icon}
                  className="w-full"
                >
                  {isVisible ? link.label : null}
                </SidebarButton>
                ) }]}/>
               
            ))} */}
            {sidebarItems.extras}
          </div>
          <div className="absolute left-0 bottom-3 w-full px-3">
            <Separator className="absolute -top-3 left-0 w-full" />
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="ghost" className="w-full justify-start">
                  <div className="flex justify-between items-center w-full">
                    <div className="flex gap-2">
                      <Avatar className="h-5 w-5">
                        <AvatarImage src="pngwing.png" />
                        <AvatarFallback>Inventory And POS</AvatarFallback>
                      </Avatar>
                      {isVisible ? <span>Purchase</span> : null}
                    </div>
                    {isVisible ? <MoreHorizontal size={20} /> : null}
                  </div>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="mb-2 w-56 p-3 rounded-[1rem]">
                <div className="space-y-1">
                  <Link to="/purchase/setting/changepassword">
                    <SidebarButton size="sm" icon={Settings} className="w-full">
                      Account Settings
                    </SidebarButton>
                  </Link>
                  <SidebarButton size="sm" icon={LogOut} className="w-full">
                    Log Out
                  </SidebarButton>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarDesktop;
