

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBarApp from '../application/PurchaseMain/PurchaseSideBar';   

// Import your page components
import Dashboard from '../application/PurchaseMain/Dashboard/Dashboard';
import NewPurchase from '../application/PurchaseMain/Purchase/NewPurchase/NewPurchase';
import PurchaseList from '../application/PurchaseMain/Purchase/PurchaseList/PurchaseList';

import NewSuppliers from '../application/PurchaseMain/Suppliers/NewSuppliers/NewSuppliers';
import SuppliersList from '../application/PurchaseMain/Suppliers/SuppliersList/SuppliersList';
// import ImportSuppliers from '../application/PurchaseMain/Suppliers/ImportSuppliers/ImportSuppliers';
import NewItems from '../application/PurchaseMain/Items/NewItems/NewItems';
import ItemsList from '../application/PurchaseMain/Items/ItemsList/ItemsList';
import NewCategories from '../application/PurchaseMain/Items/NewCategories/NewCategories';
import CategoriesList from '../application/PurchaseMain/Items/CategoriesList/CategoriesList';

import PrintLabels from '../application/PurchaseMain/Items/PrintLabels/PrintLabels';
import NewCountry from '../application/PurchaseMain/Places/NewCountry/NewCountry';
import CountriesList from '../application/PurchaseMain/Places/CountriesList/CountriesList';
import NewStates from '../application/PurchaseMain/Places/NewStates/NewStates';
import StatesList from '../application/PurchaseMain/Places/StatesList/StatesList';
import NewExpenses from '../application/PurchaseMain/Expenses/NewExpenses/NewExpenses';
import ExpensesList from '../application/PurchaseMain/Expenses/ExpensesList/ExpensesList';
import NewExpenseCategories from '../application/PurchaseMain/Expenses/NewExpenseCategories/NewExpenseCategories';
import ExpenseCategoriesList from '../application/PurchaseMain/Expenses/ExpenseCategoriesList/ExpenseCategoriesList';
import PurchaseReport from '../application/PurchaseMain/Reports/PurchaseReport/PurchaseReport';
import PurchasePaymentReport from '../application/PurchaseMain/Reports/PurchasePaymentReport/PurchasePaymentReport';
import CustomSkeleton2 from '../CustomComponents/CustomSkeleton2/CustomSkeleton2';
import CustomSkeleton from '../CustomComponents/CustomSkeleton/CustomSkeleton';
import CenterPage from '../app_modules/usage/CenterPage';
import SideBar from '../app_modules/usage/SideBar';
import Usage from '../app_modules/usage/Usage';
import Charts from '../app_modules/usage/Charts';
import Expense from '../application/PurchaseMain/Expenses/PurchaseExpense';
import { PurchaseP } from '../application/PurchaseMain/Purchase/Purchase_P';
import { Purchase_Suppliers } from '../application/PurchaseMain/Suppliers/PurchaseSuppliers';
import { PurchaseItems } from '../application/PurchaseMain/Items/PurchaseItems';
import { PurchasePlaces } from '../application/PurchaseMain/Places/PurchasePlaces';
import { PurchaseMainReport } from '../application/PurchaseMain/Reports/PurchaseReport';
import { Setting } from '../application/PurchaseMain/Settings/Setting';
import ChangePassword from '../application/PurchaseMain/Settings/ChangePassword';
import AddSupplierForm from '../application/PurchaseMain/Purchase/AddSuppliers/AddSuppliers';
import StockReport from '../application/PurchaseMain/Reports/StockReport/StockReport';
import ExpenseReport from '../application/PurchaseMain/Reports/ExpenseReport/ExpenseReport';
import ExpiredItemsReport from '../application/PurchaseMain/Reports/ExpiredItemsReport/ExpiredItemsReport';
interface AppRoute {
  path: string;
  element: React.ReactNode;
  children?: AppRoute[];
}

// Define routes for development
const devRoutes: AppRoute[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={<CustomSkeleton />}>
        {/* <Dashboard /> */}
        <CenterPage />
      </Suspense>
    ),
  },
  {
    path: 'purchase',
    element: <SideBarApp />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
          { path: 'dashboard', element: <Dashboard /> },
          
        ],
      },
      {
        path: 'expenses',
        element: <Expense />,
        children: [
          { path: 'expensecategorieslist', element: <ExpenseCategoriesList /> },
          { path: 'expenseslist', element: <ExpensesList /> },
          { path: 'newexpenses', element: <NewExpenses /> },
          { path: 'newcategories', element: <NewExpenseCategories /> },
        ],
      },
      {
        path: 'purchase',
        element: <PurchaseP />,
        children: [
          { path: 'newpurchase', element: <NewPurchase /> },
          { path: 'purchaselist', element: <PurchaseList /> },
          { path: 'addsuppliers', element: <AddSupplierForm /> },
        ],
      },
      {
        path: 'suppliers',
        element: <Purchase_Suppliers />,
        children: [
          { path: 'newsuppliers', element: <NewSuppliers /> },
          { path: 'supplierslist', element: <SuppliersList /> },
          
        ],
      },
      {
        path: 'items',
        element: <PurchaseItems />,
        children: [
          { path: 'newitems', element: <NewItems /> },
          { path: 'itemslist', element: <ItemsList /> },
          { path: 'newcategories', element: <NewCategories /> },
          { path: 'categorieslist', element: <CategoriesList /> },
          { path: 'printlabels', element: <PrintLabels /> },
          
        ],
      },
      {
        path: 'places',
        element: <PurchasePlaces />,
        children: [
          { path: 'newcountry', element: <NewCountry /> },
          { path: 'countrieslist', element: <CountriesList /> },
          { path: 'newstates', element: <NewStates /> },
          { path: 'stateslist', element: <StatesList /> },
        ],
      },
      {
        path: 'reports',
        element: <PurchaseMainReport />,
        children: [
         
          { path: 'purchasereport', element: <PurchaseReport /> },
         
          { path: 'purchasepaymentreport', element: <PurchasePaymentReport /> },
          {
            path: 'stockreport',
            element: <StockReport />,
          },
          {
            path: 'expensereport',
            element: <ExpenseReport />,
          },
          {
            path: 'expireditemsreport',
            element: <ExpiredItemsReport />,
          },
          
        ],
      },
      {
        path: 'setting',
        element: <Setting />,
        children: [
          { path: 'changepassword', element: <ChangePassword /> },
          
        ],
      },
      {
        path: 'usage',
        element: (
          <Suspense fallback={<CustomSkeleton2 />}>
            <SideBar />
          </Suspense>
        ),
        children: [
          {
            path: 'components',
            element: (
              <Suspense fallback={<CustomSkeleton2 />}>
                <Usage />
              </Suspense>
            ),
          },
          {
            path: 'charts',
            element: (
              <Suspense fallback={<CustomSkeleton2 />}>
                <Charts />
              </Suspense>
            ),
          },
          {
            path: 'dashboard',
            element: <h1>This is the dashboard</h1>,
          },
          { path: 'sales', element: <h1>Sales</h1> },
          { path: 'item', element: <h1>Suppliers</h1> },
          { path: 'suppliers', element: <h1>Suppliers</h1> },
          { path: 'users', element: <h1>Users</h1> },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <h1>Loading</h1>,
  },
];

export default devRoutes;













// import React, { Suspense } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SideBarApp from '../application/admin/AdminSideBar';   

// // Import your page components
// import Dashboard from '../application/admin/Dashboard/Dashboard';
// import POS from '../application/admin/Sales/POS';
// import NewSales from '../application/admin/Sales/NewSales';
// import SalesList from '../application/admin/Sales/SalesList';
// import NewSalesReturn from '../application/admin/Sales/NewSalesReturn';
// import SalesReturnList from '../application/admin/Sales/SalesReturnList';
// import NewCustomers from '../application/admin/Customers/NewCustomers';
// import CustomersList from '../application/admin/Customers/CustomersList';
// import ImportCustomers from '../application/admin/Customers/ImportCustomers';
// import NewPurchase from '../application/admin/Purchase/NewPurchase';
// import PurchaseList from '../application/admin/Purchase/PurchaseList';
// import NewPurchaseReturn from '../application/admin/Purchase/NewPurchaseReturn';
// import PurchaseReturnList from '../application/admin/Purchase/PurchaseReturnList';
// import NewSuppliers from '../application/admin/Suppliers/NewSuppliers';
// import SuppliersList from '../application/admin/Suppliers/SuppliersList';
// import ImportSuppliers from '../application/admin/Suppliers/ImportSuppliers';
// import NewItems from '../application/admin/Items/NewItems';
// import ItemsList from '../application/admin/Items/ItemsList';
// import NewCategories from '../application/admin/Items/NewCategories';
// import CategoriesList from '../application/admin/Items/CategoriesList';
// import NewBrands from '../application/admin/Items/NewBrands';
// import BrandsList from '../application/admin/Items/BrandsList';
// import PrintLabels from '../application/admin/Items/PrintLabels';
// import ImportItems from '../application/admin/Items/ImportItems';
// import NewCountry from '../application/admin/Places/NewCountry';
// import CountriesList from '../application/admin/Places/CountriesList';
// import NewStatus from '../application/admin/Places/NewStatus';
// import StatusList from '../application/admin/Places/StatusList';
// import NewExpenses from '../application/admin/Expenses/NewExpenses';
// import ExpensesList from '../application/admin/Expenses/ExpensesList';
// import NewExpenseCategories from '../application/admin/Expenses/NewExpenseCategories';
// import ExpenseCategoriesList from '../application/admin/Expenses/ExpenseCategoriesList';
// import ProfitLossReport from '../application/admin/Reports/ProfitLossReport';
// import PurchaseReport from '../application/admin/Reports/PurchaseReport';
// import PurchaseReturnReport from '../application/admin/Reports/PurchaseReturnReport';
// import PurchasePaymentReport from '../application/admin/Reports/PurchasePaymentReport';
// import ItemSalesReport from '../application/admin/Reports/ItemSalesReport';
// import ItemPurchaseReport from '../application/admin/Reports/ItemPurchaseReport';
// import SalesReport from '../application/admin/Reports/SalesReport';
// import SalesReturnReport from '../application/admin/Reports/SalesReturnReport';
// import SalesPaymentReport from '../application/admin/Reports/SalesPaymentReport';
// import StockReport from '../application/admin/Reports/StockReport';
// import ExpenseReport from '../application/admin/Reports/ExpenseReport';
// import ExpiredItemsReport from '../application/admin/Reports/ExpiredItemsReport';
// import NewUsers from '../application/admin/Users/NewUsers';
// import UsersList from '../application/admin/Users/UsersList';
// import RolesList from '../application/admin/Users/RolesList';
// import SendSMS from '../application/admin/SMS/SendSMS';
// import SMSTemplates from '../application/admin/SMS/SMSTemplates';
// import SMSAPI from '../application/admin/SMS/SMSAPI';
// import CompanyProfile from '../application/admin/Settings/CompanyProfile';
// import SiteSettings from '../application/admin/Settings/SiteSettings';
// import TaxList from '../application/admin/Settings/TaxList';
// import UnitList from '../application/admin/Settings/UnitList';
// import PaymentTypeList from '../application/admin/Settings/PaymentTypeList';
// import CurrencyList from '../application/admin/Settings/CurrencyList';
// import ChangePassword from '../application/admin/Settings/ChangePassword';
// import DatabaseBackup from '../application/admin/Settings/DatabaseBackup';
// import CustomSkeleton2 from '../CustomComponents/CustomSkeleton2/CustomSkeleton2';
// import CustomSkeleton from '../CustomComponents/CustomSkeleton/CustomSkeleton';
// import CenterPage from '../app_modules/usage/CenterPage';
// import SideBar from '../app_modules/usage/SideBar';
// import Usage from '../app_modules/usage/Usage';
// import Charts from '../app_modules/usage/Charts';
// import SalesAdmin from '../application/admin/Sales/SalesAdmin';

// interface AppRoute {
//   path: string;
//   element: React.ReactNode;
//   children?: AppRoute[];
// }

// const devRoutes: AppRoute[] = [
//   {
//     path: '/',
//     element: (
//       <Suspense fallback={<CustomSkeleton />}>
//         <Dashboard />
//       </Suspense>
//     ),
//   },
//   {
//     path: 'sidebar',
//     element: <SideBarApp />,
//   },
//   {
//     path: 'usage',
//     element: (
//       <Suspense fallback={<CustomSkeleton2 />}>
//         <SideBar visible={function (): void {
//           throw new Error('Function not implemented.');
//         } }/>
//       </Suspense>
//     ),
//     children: [
//       {
//         path: 'components',
//         element: (
//           <Suspense fallback={<CustomSkeleton2 />}>
//             <Usage />
//           </Suspense>
//         ),
//       },
//       {
//         path: 'charts',
//         element: (
//           <Suspense fallback={<CustomSkeleton2 />}>
//             <Charts />
//           </Suspense>
//         ),
//       },
//     ],
//   },
//   {
//     path: 'sales',
//     element: <SalesAdmin />,
//     children: [
//       {
//         path: 'newsales',
//         element: <NewSales />,
//       },
//       {
//         path: 'pos',
//         element: <POS />,
//       },
//       {
//         path: 'saleslist',
//         element: <SalesList />,
//       },
//       {
//         path: 'newsalesreturn',
//         element: <NewSalesReturn />,
//       },
//       {
//         path: 'salesreturnlist',
//         element: <SalesReturnList />,
//       },
//     ],
//   },
//   {
//     path: 'customers',
//     element: <div />, // Placeholder
//     children: [
//       {
//         path: 'newcustomers',
//         element: <NewCustomers />,
//       },
//       {
//         path: 'customerslist',
//         element: <CustomersList />,
//       },
//       {
//         path: 'importcustomers',
//         element: <ImportCustomers />,
//       },
//     ],
//   },
  // {
  //   path: 'purchase',
  //   element: <div />, // Placeholder
  //   children: [
  //     {
  //       path: 'newpurchase',
  //       element: <NewPurchase />,
  //     },
  //     {
  //       path: 'purchaselist',
  //       element: <PurchaseList />,
  //     },
  //     {
  //       path: 'newpurchasereturn',
  //       element: <NewPurchaseReturn />,
  //     },
  //     {
  //       path: 'purchasereturnlist',
  //       element: <PurchaseReturnList />,
  //     },
  //   ],
  // },
  // {
  //   path: 'suppliers',
  //   element: <div />, // Placeholder
  //   children: [
  //     {
  //       path: 'newsuppliers',
  //       element: <NewSuppliers />,
  //     },
  //     {
  //       path: 'supplierslist',
  //       element: <SuppliersList />,
  //     },
  //     {
  //       path: 'importsuppliers',
  //       element: <ImportSuppliers />,
  //     },
  //   ],
  // },
  // {
  //   path: 'items',
  //   element: <div />, // Placeholder
  //   children: [
  //     {
  //       path: 'newitems',
  //       element: <NewItems />,
  //     },
  //     {
  //       path: 'itemslist',
  //       element: <ItemsList />,
  //     },
  //     {
  //       path: 'newcategories',
  //       element: <NewCategories />,
  //     },
  //     {
  //       path: 'categorieslist',
  //       element: <CategoriesList />,
  //     },
  //     {
  //       path: 'newbrands',
  //       element: <NewBrands />,
  //     },
  //     {
  //       path: 'brandslist',
  //       element: <BrandsList />,
  //     },
  //     {
  //       path: 'printlabels',
  //       element: <PrintLabels />,
  //     },
  //     {
  //       path: 'importitems',
  //       element: <ImportItems />,
  //     },
  //   ],
  // },
  // {
  //   path: 'places',
  //   element: <div />, // Placeholder
  //   children: [
  //     {
  //       path: 'newcountry',
  //       element: <NewCountry />,
  //     },
  //     {
  //       path: 'countrieslist',
  //       element: <CountriesList />,
  //     },
  //     {
  //       path: 'newstatus',
  //       element: <NewStatus />,
  //     },
  //     {
  //       path: 'statuslist',
  //       element: <StatusList />,
  //     },
  //   ],
  // },
//   {
//     path: 'expenses',
//     element: <div />, // Placeholder
//     children: [
//       {
//         path: 'newexpenses',
//         element: <NewExpenses />,
//       },
//       {
//         path: 'expenseslist',
//         element: <ExpensesList />,
//       },
//       {
//         path: 'newexpensecategories',
//         element: <NewExpenseCategories />,
//       },
//       {
//         path: 'expensecategorieslist',
//         element: <ExpenseCategoriesList />,
//       },
//     ],
//   },
  // {
  //   path: 'reports',
  //   element: <div />, // Placeholder
  //   children: [
  //     {
  //       path: 'profitloss',
  //       element: <ProfitLossReport />,
  //     },
  //     {
  //       path: 'purchasereport',
  //       element: <PurchaseReport />,
  //     },
  //     {
  //       path: 'purchasereturnreport',
  //       element: <PurchaseReturnReport />,
  //     },
  //     {
  //       path: 'purchasepaymentreport',
  //       element: <PurchasePaymentReport />,
  //     },
  //     {
  //       path: 'itemsalesreport',
  //       element: <ItemSalesReport />,
  //     },
  //     {
  //       path: 'itempurchasereport',
  //       element: <ItemPurchaseReport />,
  //     },
  //     {
  //       path: 'salesreport',
  //       element: <SalesReport />,
  //     },
  //     {
  //       path: 'salesreturnreport',
  //       element: <SalesReturnReport />,
  //     },
  //     {
  //       path: 'salespaymentreport',
  //       element: <SalesPaymentReport />,
  //     },
  //     {
  //       path: 'stockreport',
  //       element: <StockReport />,
  //     },
  //     {
  //       path: 'expensereport',
  //       element: <ExpenseReport />,
  //     },
  //     {
  //       path: 'expireditemsreport',
  //       element: <ExpiredItemsReport />,
  //     },
  //   ],
  // },
  // {
  //   path: 'users',
  //   element: <div />, // Placeholder
  //   children: [
  //     {
  //       path: 'newusers',
  //       element: <NewUsers />,
  //     },
  //     {
  //       path: 'userslist',
  //       element: <UsersList />,
  //     },
  //     {
  //       path: 'roleslist',
  //       element: <RolesList />,
  //     },
  //   ],
  // },
  // {
  //   path: 'sms',
  //   element: <div />, // Placeholder
  //   children: [
  //     {
  //       path: 'sendsms',
  //       element: <SendSMS />,
  //     },
  //     {
  //       path: 'smstemplates',
  //       element: <SMSTemplates />,
  //     },
  //     {
  //       path: 'smsapi',
  //       element: <SMSAPI />,
  //     },
  //   ],
  // },
  // {
  //   path: 'settings',
  //   element: <div />, // Placeholder
  //   children: [
  //     {
  //       path: 'companyprofile',
  //       element: <CompanyProfile />,
  //     },
  //     {
  //       path: 'sitesettings',
  //       element: <SiteSettings />,
  //     },
  //     {
  //       path: 'taxlist',
  //       element: <TaxList />,
  //     },
  //     {
  //       path: 'unitlist',
  //       element: <UnitList />,
  //     },
  //     {
  //       path: 'paymenttypelist',
  //       element: <PaymentTypeList />,
  //     },
  //     {
  //       path: 'currencylist',
  //       element: <CurrencyList />,
  //     },
  //     {
  //       path: 'changepassword',
  //       element: <ChangePassword />,
  //     },
  //     {
  //       path: 'databasebackup',
  //       element: <DatabaseBackup />,
  //     },
  //   ],
  // },
//   {
//     path: '*',
//     element: <h1>Loading</h1>,
//   },
// ];

// const renderRoutes = (routes: AppRoute[]) => {
//   return routes.map(({ path, element, children }) => (
//     <Route key={path} path={path} element={element}>
//       {children && renderRoutes(children)}
//     </Route>
//   ));
// };

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>{renderRoutes(devRoutes)}</Routes>
//     </Router>
//   );
// };

// export default App;














// const App: React.FC = () => {
//   return (
//     <Router>
//       {/* <SideBarApp> */}
//         <Routes>
//           {/* Define your routes here */}
//           <Route path="/" element={<Dashboard />} />
//           <Route path="/usage/sales/pos" element={<POS />} />
//           <Route path="/usage/sales/newsales" element={<NewSales />} />
//           <Route path="/usage/sales/saleslist" element={<SalesList />} />
//           <Route path="/usage/sales/newsalesreturn" element={<NewSalesReturn />} />
//           <Route path="/usage/sales/salesreturnlist" element={<SalesReturnList />} />
//           <Route path="/usage/customers/newcustomers" element={<NewCustomers />} />
//           <Route path="/usage/customers/customerlist" element={<CustomersList />} />
//           <Route path="/usage/customers/importcustomers" element={<ImportCustomers />} />
//           <Route path="/usage/purchase/newpurchase" element={<NewPurchase />} />
//           <Route path="/usage/purchase/purchaselist" element={<PurchaseList />} />
//           <Route path="/usage/purchase/newpurchasereturn" element={<NewPurchaseReturn />} />
//           <Route path="/usage/purchase/purchasereturnlist" element={<PurchaseReturnList />} />
//           <Route path="/usage/suppliers/newsuppliers" element={<NewSuppliers />} />
//           <Route path="/usage/suppliers/supplierlist" element={<SuppliersList />} />
//           <Route path="/usage/suppliers/importsuppliers" element={<ImportSuppliers />} />
//           <Route path="/usage/items/newitems" element={<NewItems />} />
//           <Route path="/usage/items/itemslist" element={<ItemsList />} />
//           <Route path="/usage/items/newcategories" element={<NewCategories />} />
//           <Route path="/usage/items/categorieslist" element={<CategoriesList />} />
//           <Route path="/usage/items/newbrands" element={<NewBrands />} />
//           <Route path="/usage/items/brandslist" element={<BrandsList />} />
//           <Route path="/usage/items/printlabels" element={<PrintLabels />} />
//           <Route path="/usage/items/importitems" element={<ImportItems />} />
//           <Route path="/usage/places/newcountry" element={<NewCountry />} />
//           <Route path="/usage/places/countrieslist" element={<CountriesList />} />
//           <Route path="/usage/places/newstatus" element={<NewStatus />} />
//           <Route path="/usage/places/statuslist" element={<StatusList />} />
//           <Route path="/usage/expenses/newexpenses" element={<NewExpenses />} />
//           <Route path="/usage/expenses/expenseslist" element={<ExpensesList />} />
//           <Route path="/usage/expenses/newcategories" element={<NewExpenseCategories />} />
//           <Route path="/usage/expenses/categorieslist" element={<ExpenseCategoriesList />} />
//           <Route path="/usage/reports/profitandlossreport" element={<ProfitLossReport />} />
//           <Route path="/usage/reports/purchasereport" element={<PurchaseReport />} />
//           <Route path="/usage/reports/purchasereturnreport" element={<PurchaseReturnReport />} />
//           <Route path="/usage/reports/purchasepaymentreport" element={<PurchasePaymentReport />} />
//           <Route path="/usage/reports/itemsalesreport" element={<ItemSalesReport />} />
//           <Route path="/usage/reports/itempurchasereport" element={<ItemPurchaseReport />} />
//           <Route path="/usage/reports/salesreport" element={<SalesReport />} />
//           <Route path="/usage/reports/salesreturnreport" element={<SalesReturnReport />} />
//           <Route path="/usage/reports/salespaymentreport" element={<SalesPaymentReport />} />
//           <Route path="/usage/reports/stockreport" element={<StockReport />} />
//           <Route path="/usage/reports/expensereport" element={<ExpenseReport />} />
//           <Route path="/usage/reports/expireditemsreport" element={<ExpiredItemsReport />} />
//           <Route path="/usage/users/newusers" element={<NewUsers />} />
//           <Route path="/usage/users/userslist" element={<UsersList />} />
//           <Route path="/usage/users/roleslist" element={<RolesList />} />
//           <Route path="/usage/sms/sendsms" element={<SendSMS />} />
//           <Route path="/usage/sms/smstemplates" element={<SMSTemplates />} />
//           <Route path="/usage/sms/smsapi" element={<SMSAPI />} />
//           <Route path="/usage/settings/companyprofile" element={<CompanyProfile />} />
//           <Route path="/usage/settings/sitesettings" element={<SiteSettings />} />
//           <Route path="/usage/settings/taxlist" element={<TaxList />} />
//           <Route path="/usage/settings/unitlist" element={<UnitList />} />
//           <Route path="/usage/settings/paymenttypelist" element={<PaymentTypeList />} />
//           <Route path="/usage/settings/currencylist" element={<CurrencyList />} />
//           <Route path="/usage/settings/changepassword" element={<ChangePassword />} />
//           <Route path="/usage/settings/databasebackup" element={<DatabaseBackup />} />
//         </Routes>
//       </SideBarApp>
//     </Router>
//   );
// };

// export default App;
