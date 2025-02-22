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

const ExpensesList: React.FC = () => {
  const navigate = useNavigate();
  const options = [
    { label: 'Edit', value: 'edit' },
    { label: 'Delete', value: 'delete' },
  ];
  // Headers for the data table
  const headers = [
    'Date',
    'Category',
    'Refrence No.',
    'Expense for',
    'Amount',
    'Note',
    'Created by',
    'Action',
  ];

  const [data, setData] = useState([
    {
      Date: '20/4/2024',
      Category: 'Office Vehical',
      'Refrence No.': '101',
      'Expense for': 'submited',
      Amount: '200.00',
      Note: 'Repairing the vehical',
      'Created by': 'Admin',
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
      Date: '12/4/2024',
      Category: 'Petrol',
      'Refrence No.': '102',
      'Expense for': 'submited',
      Amount: '200.00',
      Note: 'Petrol expense information',
      'Created by': 'Admin',
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

  return (
    <div>
      {/* Dashboard component */}
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-2">
          <span className="text-xl font-bold">Expenses List</span>
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
            onClick={() => navigate('/purchase/Expenses/ExpenseList')}
          >
            <span>ExpensesList</span>
          </div>
        </div>
      </div>
      <div className="p-4 rounded-md border border-gray-600 shadow-md">
        <div className="flex justify-between items-center p-4">
          <span className="text-xl font-bold">Expenses List</span>
          <CustomButton
            className="flex items-center space-x-2 font-bold py-2 px-4 rounded"
            onClick={() => navigate('/purchase/expenses/newexpenses')}
          >
            <Plus className="w-4 h-4" />
            <span>New Expenses</span>
          </CustomButton>
        </div>
        {/* CustomTable component */}
        <CustomTable
          headers={headers}
          data={data}
          caption="A list of your recent Expenses."
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

export default ExpensesList;
