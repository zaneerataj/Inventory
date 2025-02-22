import React, { useState } from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import CustomTable from '../../../../CustomComponents/CustomTable/CustomTable';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../../../CustomComponents/CustomButton/CustomButton';
import { Home, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import CustomDropdown from '../..../../../../../CustomComponents/CustomDropDown/CustomDropDown';
import CustomActionDropdown from '../../../../CustomComponents/CustomActionDropdown/CustomActionDropdown';
import Header from '../../Dashboard/Header';

// Define the CustomersList component
const SuppliersList: React.FC = () => {
  const navigate = useNavigate();
  const options = [
    { label: 'Edit', value: 'edit' },
    { label: 'Delete', value: 'delete' },
  ];
  // Headers for the data table
  const headers = [
    'Suppliers ID',
    'Suppliers Name',
    'Mobile',
    'Email',
    'Purchase Due',
    'Purchase Return Due',
    'Status',
    'Action',
  ];

  // Sample data for the table
  const [data, setData] = useState([
    {
      'Suppliers ID': 'SUP001',
      'Suppliers Name': 'John Doe',
      Mobile: '1234567890',
      Email: 'john.doe@example.com',
      'Purchase Due': '$5000',
      'Purchase Return Due': '$300',
      Status: 'Active',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Suppliers ID': 'SUP002',
      'Suppliers Name': 'Jane Smith',
      Mobile: '9876543210',
      Email: 'jane.smith@example.com',
      'Purchase Due': '$2000',
      'Purchase Return Due': '$150',
      Status: 'Inactive',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Suppliers ID': 'SUP003',
      'Suppliers Name': 'John Doe Supplies',
      Mobile: '8282828282',
      Email: 'johnsupplies@example.com',
      'Purchase Due': '$5000',
      'Purchase Return Due': '$300',
      Status: 'Active',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Suppliers ID': 'SUP004',
      'Suppliers Name': 'Jane Smith Trading',
      Mobile: '9191919191',
      Email: 'janetrading@example.com',
      'Purchase Due': '$2000',
      'Purchase Return Due': '$500',
      Status: 'Inactive',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Suppliers ID': 'SUP005',
      'Suppliers Name': 'Alice Johnson Wholesale',
      Mobile: '8283828383',
      Email: 'alicewholesale@example.com',
      'Purchase Due': '$7000',
      'Purchase Return Due': '$1000',
      Status: 'Active',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Suppliers ID': 'SUP006',
      'Suppliers Name': 'Chris Brown Distribution',
      Mobile: '7373737373',
      Email: 'chrisdistribution@example.com',
      'Purchase Due': '$8000',
      'Purchase Return Due': '$1200',
      Status: 'Active',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Suppliers ID': 'SUP007',
      'Suppliers Name': 'Michael Green Ltd',
      Mobile: '6262626262',
      Email: 'michaelgreen@example.com',
      'Purchase Due': '$1500',
      'Purchase Return Due': '$400',
      Status: 'Inactive',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Suppliers ID': 'SUP008',
      'Suppliers Name': 'Olivia White Corp',
      Mobile: '5151515151',
      Email: 'oliviawhite@example.com',
      'Purchase Due': '$9000',
      'Purchase Return Due': '$200',
      Status: 'Active',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Suppliers ID': 'SUP009',
      'Suppliers Name': 'Emma Blue Enterprises',
      Mobile: '4040404040',
      Email: 'emmablue@example.com',
      'Purchase Due': '$6000',
      'Purchase Return Due': '$700',
      Status: 'Inactive',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Suppliers ID': 'SUP010',
      'Suppliers Name': 'Liam Black Traders',
      Mobile: '3939393939',
      Email: 'liamblack@example.com',
      'Purchase Due': '$7500',
      'Purchase Return Due': '$900',
      Status: 'Active',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Suppliers ID': 'SUP011',
      'Suppliers Name': 'Noah Brown Suppliers',
      Mobile: '2828282828',
      Email: 'noahbrown@example.com',
      'Purchase Due': '$3000',
      'Purchase Return Due': '$600',
      Status: 'Inactive',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Suppliers ID': 'SUP012',
      'Suppliers Name': 'Sophia Grey Supply Co.',
      Mobile: '1717171717',
      Email: 'sophiagrey@example.com',
      'Purchase Due': '$4500',
      'Purchase Return Due': '$350',
      Status: 'Active',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Suppliers ID': 'SUP013',
      'Suppliers Name': 'William Purple Traders',
      Mobile: '6969696969',
      Email: 'williampurple@example.com',
      'Purchase Due': '$2000',
      'Purchase Return Due': '$250',
      Status: 'Inactive',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Suppliers ID': 'SUP014',
      'Suppliers Name': 'Ava Pink Corporation',
      Mobile: '5858585858',
      Email: 'avapink@example.com',
      'Purchase Due': '$5000',
      'Purchase Return Due': '$800',
      Status: 'Active',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Suppliers ID': 'SUP015',
      'Suppliers Name': 'James Orange Suppliers',
      Mobile: '4747474747',
      Email: 'jamesorange@example.com',
      'Purchase Due': '$1000',
      'Purchase Return Due': '$150',
      Status: 'Inactive',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Suppliers ID': 'SUP016',
      'Suppliers Name': 'Lucas Yellow LLC',
      Mobile: '3636363636',
      Email: 'lucasyellow@example.com',
      'Purchase Due': '$4000',
      'Purchase Return Due': '$600',
      Status: 'Active',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Suppliers ID': 'SUP017',
      'Suppliers Name': 'Mia Violet Inc',
      Mobile: '2525252525',
      Email: 'miaviolet@example.com',
      'Purchase Due': '$7000',
      'Purchase Return Due': '$900',
      Status: 'Inactive',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
  ]);

  // State management for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalPages = Math.ceil(data.length / pageSize);
  const [selectedSuppliers, setSelectedSuppliers] = useState<string[]>([]);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Handle page size change
  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
  };
  const handleRowSelect = (selectedIds: string[]) => {
    setSelectedSuppliers(selectedIds);
  };

  // Handle deletion of selected suppliers
  const handleDelete = () => {
    const filteredData = data.filter(
      (supplier) => !selectedSuppliers.includes(supplier['Suppliers ID']),
    );
    // Assuming `setData` is a state setter for `data`
    setData(filteredData);
    setSelectedSuppliers([]); // Clear selection after deletion
  };

  return (
    <div>
      {/* Dashboard component */}
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-2">
          <span className="text-xl font-bold">Suppliers List</span>
          <span className="text-gray-500">View/Search Suppliers</span>
        </div>
        <div className="flex ">
          <div
            className="flex items-center  cursor-pointer "
            onClick={() => navigate('/')}
          >
            <Home className="w-4 h-4 ml-6" />
            <span>Home</span>
          </div>
          <span>&gt;</span>
          <div
            className="flex items-center space-x-1 cursor-pointer text-black-500"
            onClick={() => navigate('/purchase/Suppliers/NewSuppliers')}
          >
            <span>New Suppliers</span>
          </div>
          <span>&gt;</span>
          <div
            className="flex items-center space-x-1 cursor-pointer text-black-500"
            onClick={() => navigate('/purchase/suppliers/importsuppliers')}
          >
            <span>Import Suppliers</span>
          </div>
        </div>
      </div>
      <div className="p-4 rounded-md border border-gray-600 shadow-md">
        <div className="flex justify-between items-center p-4">
          <span className="text-xl font-bold">Suppliers List</span>
          <CustomButton
            className="flex items-center space-x-2 font-bold py-2 px-4 rounded"
            onClick={() => navigate('/purchase/Suppliers/NewSuppliers')}
          >
            <Plus className="w-4 h-4" />
            <span>New Suppliers</span>
          </CustomButton>
        </div>
        {/* CustomTable component */}
        <CustomTable
          headers={headers}
          data={data}
          caption="A list of your recent suppliers."
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          pageSize={pageSize}
          onPageSizeChange={handlePageSizeChange}
          enableCheckbox={true}
          onRowSelect={(selectedIds: string[]) =>
            setSelectedSuppliers(selectedIds)
          }
          enableRowsPerPage={true}
          enableCopy={true}
          enableExport={true}
          enableColumnVisibility={false}
          enablePrint={true}
          enableSearch={true}
          enableDelete={true}
        />
      </div>
    </div>
  );
};

export default SuppliersList;

// function setSelectedSuppliers(selectedIds: string[]) {
//   throw new Error('Function not implemented.');
// }

// function setData(filteredData: { 'Suppliers ID': string; 'Suppliers Name': string; Mobile: string; Email: string; 'Purchase Due': string; 'Purchase Return Due': string; Status: string; }[]) {
//   throw new Error('Function not implemented.');

// import React, { useState } from 'react';
// import { Home, SquarePlus } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import Dashboard from '../../Dashboard/Dashboard';
// import CustomButton from '../../../../CustomComponents/CustomButton/CustomButton';
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../../../../../components/ui/dropdown-menu";
// import CustomTable from '../../../../CustomComponents/CustomTable/CustomTable';
// import { Input } from '@/components/ui/input';

// interface Customer {
//   CustomerId: string;
//   CustomerName: string;
//   Mobile: string;
//   Email: string;
//   'TotalPaid(-)': number;
//   'SalesDue(-)': number;
//   'SalesReturnDue(+)': number;
//   Status: string;
//   Actions: JSX.Element;
//   isChecked?: boolean; // Add isChecked to the type
// }

// const CustomersList: React.FC = () => {
//   const navigate = useNavigate();
//   const [showEntries, setShowEntries] = useState(10);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [customerData, setCustomerData] = useState<Customer[]>([
//     {
//       CustomerId: 'CU0007',
//       CustomerName: 'Vinit Hiremath',
//       Mobile: '866022565988',
//       Email: 'vinit@gmail.com',
//       'TotalPaid(-)': 660.00,
//       'SalesDue(-)': 660.00,
//       'SalesReturnDue(+)': 0.00,
//       Status: 'Inactive',
//       Actions: (
//         <DropdownMenu>
//           <DropdownMenuTrigger className="border rounded px-2 py-2 text-white cursor-pointer">
//             Action
//           </DropdownMenuTrigger>
//           <DropdownMenuContent>
//             <DropdownMenuItem>Edit</DropdownMenuItem>
//             <DropdownMenuItem>Receive Due Payment</DropdownMenuItem>
//             <DropdownMenuItem>Pay Return Due</DropdownMenuItem>
//             <DropdownMenuItem>Delete</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       ),
//       isChecked: false // Initialize with false
//     },
//     {
//       CustomerId: 'CU0007',
//       CustomerName: 'Vinit Hiremath',
//       Mobile: '866022565988',
//       Email: 'vinit@gmail.com',
//       'TotalPaid(-)': 660.00,
//       'SalesDue(-)': 660.00,
//       'SalesReturnDue(+)': 0.00,
//       Status: 'Inactive',
//       Actions: (
//         <DropdownMenu>
//           <DropdownMenuTrigger className="border rounded px-2 py-2 text-white cursor-pointer">
//             Action
//           </DropdownMenuTrigger>
//           <DropdownMenuContent>
//             <DropdownMenuItem>Edit</DropdownMenuItem>
//             <DropdownMenuItem>Receive Due Payment</DropdownMenuItem>
//             <DropdownMenuItem>Pay Return Due</DropdownMenuItem>
//             <DropdownMenuItem>Delete</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       ),
//       isChecked: false // Initialize with false
//     },
//     {
//       CustomerId: 'CU0007',
//       CustomerName: 'Vinit Hiremath',
//       Mobile: '866022565988',
//       Email: 'vinit@gmail.com',
//       'TotalPaid(-)': 660.00,
//       'SalesDue(-)': 660.00,
//       'SalesReturnDue(+)': 0.00,
//       Status: 'Inactive',
//       Actions: (
//         <DropdownMenu>
//           <DropdownMenuTrigger className="border rounded px-2 py-2  cursor-pointer">
//             Action
//           </DropdownMenuTrigger>
//           <DropdownMenuContent>
//             <DropdownMenuItem>Edit</DropdownMenuItem>
//             <DropdownMenuItem>Receive Due Payment</DropdownMenuItem>
//             <DropdownMenuItem>Pay Return Due</DropdownMenuItem>
//             <DropdownMenuItem>Delete</DropdownMenuItem>
//           </DropdownMenuContent>
//         </DropdownMenu>
//       ),
//       isChecked: false // Initialize with false
//     },

//     // Add other customer objects here
//   ]);

//   // Toggle checkbox state for a specific row
//   const handleCheckboxChange = (index: number) => {
//     const updatedData = [...customerData];
//     updatedData[index].isChecked = !updatedData[index].isChecked;
//     setCustomerData(updatedData);
//   };

//   // Select or deselect all checkboxes
//   const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const isChecked = e.target.checked;
//     const updatedData = customerData.map(customer => ({
//       ...customer,
//       isChecked
//     }));
//     setCustomerData(updatedData);
//   };

//   // Generate CSV content
//   const generateCSVContent = () => {
//     const headers = [
//       'CustomerId',
//       'CustomerName',
//       'Mobile',
//       'Email',
//       'TotalPaid(-)',
//       'SalesDue(-)',
//       'SalesReturnDue(+)',
//       'Status'
//     ];
//     const csvHeaders = headers.join(',');
//     const csvRows = customerData.map(row =>
//       ${row.CustomerId},${row.CustomerName},${row.Mobile},${row.Email},${row['TotalPaid(-)']},${row['SalesDue(-)']},${row['SalesReturnDue(+)']},${row.Status}
//     );
//     return ${csvHeaders}\n${csvRows.join('\n')};
//   };

//   const downloadCSV = () => {
//     const csvContent = generateCSVContent();
//     const blob = new Blob([csvContent], { type: 'text/csv' });
//     const url = window.URL.createObjectURL(blob);
//     const aTag = document.createElement('a');
//     aTag.href = url;
//     aTag.download = 'customers_list.csv';
//     document.body.appendChild(aTag);
//     aTag.click();
//     window.URL.revokeObjectURL(url);
//     document.body.removeChild(aTag);
//   };

//   function downloadFileAtURL(arg0: string, arg1: string): void {
//     throw new Error('Function not implemented.');
//   }

//   function setCurrentPage(page: number): void {
//     throw new Error('Function not implemented.');
//   }

//   return (
//     <div>
//       <Dashboard />
//       <div className="flex flex-col md:flex-row items-center justify-between p-4">
//         <div className="flex flex-col md:flex-row items-center md:space-x-2">
//           <span className="text-xl font-bold">Customers List</span>
//           <span className="text-gray-500">View/Search Customers</span>
//         </div>
//         <div
//           className="flex items-center space-x-1 cursor-pointer text-black-500 mt-4 md:mt-0"
//           onClick={() => navigate('/')}
//         >
//           <Home className="w-4 h-4" />
//           <span>Home</span>
//         </div>
//       </div>

//       <div className="p-4 mt-4 border rounded-lg">
//         <div className="flex flex-col md:flex-row justify-between items-center mb-4">
//           <span className="text-xl font-bold">Suppliers List</span>
//           <CustomButton
//             type="button"
//             label="Add Suppliers"
//             icon={<SquarePlus className="w-5 h-5 mr-2" />}
//             className="ml-auto flex items-center mt-4 md:mt-0 w-full md:w-auto"
//             onClick={() => navigate('/NewSuppliers')}
//           />
//         </div>

//         <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0">
//           <div className="flex items-center space-x-2 w-full md:w-auto">
//             <label htmlFor="showEntries" className="text-gray-700">
//               Show
//             </label>
//             <DropdownMenu>
//               <DropdownMenuTrigger className="flex items-center space-x-2 border rounded p-1 cursor-pointer">
//                 <span>{showEntries}</span>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent>
//                 {[10, 25, 50, 100].map((entries) => (
//                   <DropdownMenuItem key={entries} onClick={() => setShowEntries(entries)}>
//                     {entries}
//                   </DropdownMenuItem>
//                 ))}
//               </DropdownMenuContent>
//             </DropdownMenu>
//             <span className="text-gray-700">entries</span>
//           </div>

//           <div className="flex flex-wrap justify-end md:justify-start space-x-1 w-full md:w-auto">
//             <CustomButton type="submit" label="Delete" />
//             <CustomButton
//               type="submit"
//               label="Copy"
//               onClick={() => {
//                 const textToCopy = "Your content to copy";
//                 navigator.clipboard.writeText(textToCopy)
//                   .then(() => {
//                     alert('Copied to clipboard');
//                   })
//                   .catch(err => {
//                     console.error('Failed to copy: ', err);
//                   });
//               }}
//             />
//             <CustomButton
//               type="submit"
//               label="Excel"
//               onClick={() => downloadFileAtURL('http://localhost:3000/file_excel.xlsx', 'customers_list.xlsx')}
//             />
//             <CustomButton
//               type="submit"
//               label="PDF"
//               onClick={() => downloadFileAtURL('http://localhost:3000/file_pdf.pdf', 'customers_list.pdf')}
//             />
//             <CustomButton type="submit" label="Print" onClick={() => window.print()} />
//             <CustomButton type="submit" label="CSV" onClick={downloadCSV} />
//             <DropdownMenu>
//               <DropdownMenuTrigger className="ml-auto flex items-center mt-4 md:mt-0 w-full md:w-auto border rounded p-1 cursor-pointer">
//                 <span>Column</span>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent>
//                 <DropdownMenuLabel>Columns</DropdownMenuLabel>
//                 <DropdownMenuSeparator />
//                 <DropdownMenuItem>CustomerId</DropdownMenuItem>
//                 <DropdownMenuItem>CustomerName</DropdownMenuItem>
//                 <DropdownMenuItem>Mobile</DropdownMenuItem>
//                 <DropdownMenuItem>Email</DropdownMenuItem>
//                 <DropdownMenuItem>TotalPaid(-)</DropdownMenuItem>
//                 <DropdownMenuItem>SalesDue(-)</DropdownMenuItem>
//                 <DropdownMenuItem>SalesReturnDue(+)</DropdownMenuItem>
//                 <DropdownMenuItem>Status</DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </div>
//         </div>
//         <div className="flex items-center space-x-2">
//             <label htmlFor="search" className="text-gray-700">
//               Search:
//             </label>
//             <Input
//               id="search"
//               className="border rounded-lg p-1"
//               type="text"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               placeholder="Search..."
//             />

//         <div className="overflow-x-auto">
//           <table className="w-full border border-gray-200">
//             <thead>
//               <tr>
//                 <th className="border p-2">
//                   <input
//                     type="checkbox"
//                     checked={customerData.every(c => c.isChecked)}
//                     onChange={handleSelectAllChange}
//                   />
//                 </th>
//                 <th className="border p-2">CustomerId</th>
//                 <th className="border p-2">CustomerName</th>
//                 <th className="border p-2">Mobile</th>
//                 <th className="border p-2">Email</th>
//                 <th className="border p-2">TotalPaid(-)</th>
//                 <th className="border p-2">SalesDue(-)</th>
//                 <th className="border p-2">SalesReturnDue(+)</th>
//                 <th className="border p-2">Status</th>
//                 <th className="border p-2">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {customerData.map((customer, index) => (
//                 <tr key={customer.CustomerId}>
//                   <td className="border p-2">
//                     <input
//                       type="checkbox"
//                       checked={customer.isChecked || false}
//                       onChange={() => handleCheckboxChange(index)}
//                     />
//                   </td>
//                   <td className="border p-2">{customer.CustomerId}</td>
//                   <td className="border p-2">{customer.CustomerName}</td>
//                   <td className="border p-2">{customer.Mobile}</td>
//                   <td className="border p-2">{customer.Email}</td>
//                   <td className="border p-2">{customer['TotalPaid(-)']}</td>
//                   <td className="border p-2">{customer['SalesDue(-)']}</td>
//                   <td className="border p-2">{customer['SalesReturnDue(+)']}</td>
//                   <td className="border p-2">{customer.Status}</td>
//                   <td className="border p-2">{customer.Actions}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         <div className="mt-4">
//           <span className="font-bold">Totals:</span>
//           <div>Total Paid: {customerData.reduce((total, c) => total + c['TotalPaid(-)'], 0).toFixed(2)}</div>
//           <div>Sales Due: {customerData.reduce((total, c) => total + c['SalesDue(-)'], 0).toFixed(2)}</div>
//           <div>Sales Return Due: {customerData.reduce((total, c) => total + c['SalesReturnDue(+)'], 0).toFixed(2)}</div>
//         </div>
//         <CustomTable
//           headers={Headers}
//           data={customerData}
//           currentPage={currentPage}
//           pageSize={pageSize}
//           totalPages={Math.ceil(customerData.length / pageSize)}
//           onPageChange={setCurrentPage}
//         />
//       </div>
//     </div>
//   );
// };

// export default CustomersList;
