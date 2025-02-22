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

// Define the CategoriesList component
const CategoriesList: React.FC = () => {
  const navigate = useNavigate();
  const options = [
    { label: 'Edit', value: 'edit' },
    { label: 'Delete', value: 'delete' },
  ];
  // Headers for the data table
  const headers = [
    'Category code',
    'Category Name',
    'Discription',
    'Status',
    'Action',
  ];

  // Sample data for the table
  const [data, setData] = useState([
    {
      'Category code': 'CT0021',
      'Category Name': 'Accessories',
      Discription: 'Accessories discrition',
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
      'Category code': 'CT0020',
      'Category Name': 'Mobiles',
      Discription: 'Mobiles discrition',
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
      'Category code': 'CT0019',
      'Category Name': 'Watches',
      Discription: 'Mens and Womens',
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
      'Category code': 'CT0018',
      'Category Name': 'Healthcare',
      Discription: 'Healthcare Items Categories',
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
      'Category code': 'CT0017',
      'Category Name': 'Shoes',
      Discription: 'shoes discrition',
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
      'Category code': 'CT0016',
      'Category Name': 'Computer',
      Discription: 'Computer discrition',
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
      'Category code': 'CT0015',
      'Category Name': 'Books',
      Discription: 'Books discrition',
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
      'Category code': 'CT0014',
      'Category Name': 'Mens Wear',
      Discription: 'Mens Wear discrition',
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
      'Category code': 'CT0013',
      'Category Name': 'Jackets',
      Discription: 'Jackets discrition',
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
      'Category code': 'CT0012',
      'Category Name': 'T-Shirts',
      Discription: 'T-Shirts discrition',
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
      'Category code': 'CT0012',
      'Category Name': 'Formal Shirts',
      Discription: 'Formal Shirts discrition',
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
      'Category code': 'CT0012',
      'Category Name': 'Casual Shirts',
      Discription: 'Casual Shirts discrition',
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
      'Category code': 'CT0012',
      'Category Name': 'Jeans',
      Discription: 'Jeans discrition',
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
      (supplier) => !selectedSuppliers.includes(supplier['Category code']),
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
          <span className="text-xl font-bold">Categories List</span>
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
            onClick={() => navigate('/purchase/items/categorieslist')}
          >
            <span>Categories List</span>
          </div>
        </div>
      </div>
      <div className="p-4 rounded-md border border-gray-600 shadow-md">
        <div className="flex justify-between items-center p-4">
          <span className="text-xl font-bold">Categories List</span>
          <CustomButton
            className="flex items-center space-x-2 font-bold py-2 px-4 rounded"
            onClick={() => navigate('/purchase/items/newcategories')}
          >
            <Plus className="w-4 h-4" />
            <span>New Categories</span>
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

export default CategoriesList;
