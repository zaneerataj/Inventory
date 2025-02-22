import React, { FC, useState } from 'react';
import Sidebar from '../../CustomComponents/CustomSideBar/sidebar';

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
  Calculator,
  SquarePlus,
  CircleArrowLeft,
  Barcode,
  Copy,
  Box,
  Luggage,
  ShieldHalf,
  Percent,
  BadgeDollarSign,
  LockKeyhole,
  Database,
} from 'lucide-react';
import { SidebarButton } from '../../CustomComponents/CustomSideBar/sidebar-button';
import { SidebarItems } from '../../CustomComponents/CustomSideBar/types';
import { Outlet } from 'react-router-dom';
import { Gauge } from 'lucide-react';


const PurchaseSideBar: FC = () => {
  const sidebarItems: SidebarItems = {
    items: [
      {
        main_label: 'Dashboard',
        links: [
          {
            label: 'Dashboard',
            href: 'dashboard',
            icon: Gauge,
            content: '',
          }
        ],
      },

      {
        main_label: 'Purchase',
        links: [
          {
            label: 'New Purchase ',
            href: 'purchase/newpurchase',
            icon: SquarePlus,
            content: '',
          },
          {
            label: 'Purchase List',
            href: 'purchase/purchaselist',
            icon: List,
            content: '',
          },
          // {
          //   label: 'Add Suppliers',
          //   href: 'purchase/addsuppliers',
          //   icon:List ,
          //   content: '',
          // },

        ],
      },
      {
        main_label: 'Suppliers',
        links: [
          {
            label: 'New Suppliers',
            href: 'suppliers/newsuppliers',
            icon: SquarePlus,
            content: '',
          },
          {
            label: ' Suppliers List',
            href: 'suppliers/supplierslist',
            icon: List,
            content: '',
          },

        ],
      },
      {
        main_label: 'Items',
        links: [
          {
            label: 'New Items',
            href: 'items/newitems',
            icon: SquarePlus,
            content: '',
          },
          {
            label: 'Items List',
            href: 'items/itemslist',
            icon: List,
            content: '',
          },

          {
            label: 'New Catogories',
            href: 'items/newcategories',
            icon: SquarePlus,
            content: '',
          },
          {
            label: 'Catogories List',
            href: 'items/categorieslist',
            icon: List,
            content: '',
          },

          {
            label: 'Print Labels',
            href: 'items/printlabels',
            icon: Barcode,
            content: '',
          },

        ],
      },

      {
        main_label: 'Places',
        links: [
          {
            label: 'New Country',
            href: 'places/newcountry',
            icon: SquarePlus,
            content: '',
          },
          {
            label: 'Countries List',
            href: 'places/countrieslist',
            icon: List,
            content: '',
          },
          {
            label: 'New States',
            href: 'places/newstates',
            icon: SquarePlus,
            content: '',
          },
          {
            label: 'States List',
            href: 'places/stateslist',
            icon: List,
            content: '',
          },
        ],
      },
      {
        main_label: 'Expenses',
        links: [
          {
            label: 'NewExpenses',
            href: 'Expenses/NewExpenses',
            icon: SquarePlus,
            content: '',
          },

          {
            label: 'ExpensesList',
            href: 'Expenses/ExpensesList',
            icon: List,
            content: '',
          },
          {
            label: 'NewCategories',
            href: 'Expenses/NewCategories',
            icon: SquarePlus,
            content: '',
          },

          {
            label: 'ExpenseCategoriesList',
            href: 'Expenses/ExpenseCategoriesList',
            icon: List,
            content: '',
          },

        ],
      },
      {
        main_label: 'Reports',
        links: [

          {
            label: 'Purchase Report',
            href: 'reports/purchasereport',
            icon: Copy,
            content: '',
          },


          {
            label: 'Purchase Payment Report',
            href: 'reports/purchasepaymentreport',
            icon: Copy,
            content: '',
          },
          // {
          //   label: 'Stock Report',
          //   href: 'reports/stockreport',
          //   icon: Copy,
          //   content: '',
          // },
          // {
          //   label: 'Expense Report',
          //   href: 'reports/expensereport',
          //   icon: Copy,
          //   content: '',
          // },
          // {
          //   label: 'Expired Ite Report',
          //   href: 'reports/expireditemsreport',
          //   icon: Copy,
          //   content: '',
          // },

        ],
      },
      // {
      //   main_label: 'Setting',
      //   links: [

      //     {
      //       label: 'Change Password',
      //       href: 'setting/changepassword',
      //       icon:  Copy,
      //       content: '',
      //     }      

      //     ],
      // },


    ],
    extras: (
      <>
        {/* <div className="flex flex-col gap-2">
        <SidebarButton icon={MoreHorizontal} className="w-full">
          More
        </SidebarButton>
        <SidebarButton
          className="w-full justify-center text-white" 
          variant="default"
        >
          Options
        </SidebarButton>
      </div> */}
      </>
    ),
  };

  const [isVisible, setIsVisible] = useState<boolean>(true);
  const Visibletoggle = () => {
    setIsVisible(!isVisible);
  };
  console.log('Side bar : ', isVisible);
  return (
    <>
      <Sidebar visible={Visibletoggle} sidebarItems={sidebarItems} />
      <div
        className={
          isVisible
            ? `mx-6 mt-16 sm:ml-[230px] sm:mt-3 transition-width duration-300 ease-in-out`
            : `mx-6 mt-16 sm:ml-[95px] sm:mt-3 transition-width duration-300 ease-in-out`
        }
      >
        <Outlet />
      </div>
    </>
  );
};

export default PurchaseSideBar;