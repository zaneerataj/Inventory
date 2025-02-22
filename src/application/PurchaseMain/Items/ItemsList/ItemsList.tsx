import React, { useState } from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import CustomTable from '../../../../CustomComponents/CustomTable/CustomTable';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../../../CustomComponents/CustomButton/CustomButton';
import { Home, Plus } from 'lucide-react'; // Import Plus Icon
import { Link } from 'react-router-dom';
import CustomDropdown from '../../../../CustomComponents/CustomDropDown/CustomDropDown';
import CustomActionDropdown from '../../../../CustomComponents/CustomActionDropdown/CustomActionDropdown';
import imagePlaceholder from '../../../../assets/imges/inv.jpeg';
import ActionDropdown from '../../../../CustomComponents/CustomActionDropdown/CustomActionDropdown';
import Header from '../../Dashboard/Header';

const ItemsList: React.FC = () => {
  const navigate = useNavigate();
  const options = [
    { label: 'Edit', value: 'edit' },
    { label: 'Delete', value: 'delete' },
  ];
  const headers = [
    'Image',
    'Item Code',
    'Item Name',
    'Brand',
    'Category',
    'Unit',
    'stock Qty',
    'Minium Qty',
    'Purchase price',
    'Final sales price',
    'Tax',
    'Status',
    'Action',
  ];

  const dropdownProps = {
    options: [
      { label: 'Edit', value: 'edit' },
      // { label: 'Receive Due Payments', value: 'receive-payments' },
      // { label: 'Pay Return Due', value: 'pay-return' },
      // { label: 'View Purchase', value: 'view-purchase' },
      // { label: 'Pdf', value: 'pdf' },
      // { label: 'Print', value: 'print' },
      { label: 'Delete', value: 'delete' },
    ],
  };

  const [data, setData] = useState([
    {
      Image: <img src={imagePlaceholder} alt="Item" width="40" height="40" />,
      'Item Code': 'ITM001',
      'Item Name': 'T-Shirt',
      Brand: 'Nike',
      Category: 'Apparel',
      Unit: 'Piece',
      'stock Qty': '100',
      'Minium Qty': '10',
      'Purchase price': '$10',
      'Final sales price': '$20',
      Tax: '5%',
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
      Image: <img src={imagePlaceholder} alt="Item" width="50" height="50" />,
      'Item Code': 'ITM002',
      'Item Name': 'Jeans',
      Brand: "Levi's",
      Category: 'Apparel',
      Unit: 'Piece',
      'stock Qty': '50',
      'Minium Qty': '5',
      'Purchase price': '$20',
      'Final sales price': '$30',
      Tax: '5%',
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
      Image: <img src={imagePlaceholder} alt="Item" width="40" height="40" />,
      'Item Code': 'ITM001',
      'Item Name': 'T-Shirt',
      Brand: 'Nike',
      Category: 'Apparel',
      Unit: 'Piece',
      'stock Qty': '100',
      'Minium Qty': '10',
      'Purchase price': '$10',
      'Final sales price': '$20',
      Tax: '5%',
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
      Image: <img src={imagePlaceholder} alt="Item" width="50" height="50" />,
      'Item Code': 'ITM002',
      'Item Name': 'Jeans',
      Brand: "Levi's",
      Category: 'Apparel',
      Unit: 'Piece',
      'stock Qty': '50',
      'Minium Qty': '5',
      'Purchase price': '$20',
      'Final sales price': '$30',
      Tax: '5%',
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
      Image: <img src={imagePlaceholder} alt="Item" width="40" height="40" />,
      'Item Code': 'ITM001',
      'Item Name': 'T-Shirt',
      Brand: 'Nike',
      Category: 'Apparel',
      Unit: 'Piece',
      'stock Qty': '100',
      'Minium Qty': '10',
      'Purchase price': '$10',
      'Final sales price': '$20',
      Tax: '5%',
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
      Image: <img src={imagePlaceholder} alt="Item" width="50" height="50" />,
      'Item Code': 'ITM002',
      'Item Name': 'Jeans',
      Brand: "Levi's",
      Category: 'Apparel',
      Unit: 'Piece',
      'stock Qty': '50',
      'Minium Qty': '5',
      'Purchase price': '$20',
      'Final sales price': '$30',
      Tax: '5%',
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
      Image: <img src={imagePlaceholder} alt="Item" width="40" height="40" />,
      'Item Code': 'ITM001',
      'Item Name': 'T-Shirt',
      Brand: 'Nike',
      Category: 'Apparel',
      Unit: 'Piece',
      'stock Qty': '100',
      'Minium Qty': '10',
      'Purchase price': '$10',
      'Final sales price': '$20',
      Tax: '5%',
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

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalPages = Math.ceil(data.length / pageSize);

  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  // Brand and Category dropdown options
  const brandOptions = [
    { label: 'Nike', value: 'Nike' },
    { label: "Levi's", value: 'Levis' },
    { label: 'Adidas', value: 'Adidas' },
    { label: 'Puma', value: 'Puma' },
  ];

  const categoryOptions = [
    { label: 'Apparel', value: 'Apparel' },
    { label: 'Jackets', value: 'Jackets' },
    { label: 'T-shirts', value: 'T-shirts' },
    { label: 'Electronics', value: 'Electronics' },
  ];

  const handleBrandChange = (value: string | number | (string | number)[]) => {
    if (typeof value === 'string') {
      setSelectedBrand(value);
    }
  };

  const handleCategoryChange = (
    value: string | number | (string | number)[],
  ) => {
    if (typeof value === 'string') {
      setSelectedCategory(value);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
  };

  const handleRowSelect = (selectedIds: string[]) => {
    setSelectedCustomers(selectedIds);
  };

  const handleDelete = () => {
    const filteredData = data.filter(
      (item) => !selectedCustomers.includes(item['Item Name']),
    );
    setData(filteredData);
    setSelectedCustomers([]);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-2">
          <span className="text-xl font-bold">Items List</span>
          <span className="text-gray-500">View/Search Items</span>
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
            onClick={() => navigate('/purchase/items/itemslist')}
          >
            <span>Items List</span>
          </div>
        </div>
      </div>
      <div className="p-4 rounded-md border border-gray-600 shadow-md">
        <div className="flex flex-col md:flex-row items-center justify-between p-4">
          <div className="flex items-center space-x-4 w-full md:w-[35%]">
            <div className="flex items-center space-x-2 w-full">
              <label htmlFor="brand">Brand:</label>
              <CustomDropdown
                id="brand"
                options={brandOptions}
                value={selectedBrand}
                onChange={handleBrandChange}
              />
            </div>
            <div className="flex items-center space-x-2 w-full">
              <label htmlFor="category">Category:</label>
              <CustomDropdown
                id="category"
                options={categoryOptions}
                value={selectedCategory}
                onChange={handleCategoryChange}
              />
            </div>
          </div>
          <CustomButton
            className="flex items-center space-x-2 font-bold py-2 px-4 rounded"
            onClick={() => navigate('/purchase/items/newitems')}
          >
            <Plus className="w-4 h-4" />
            <span>Add Item</span>
          </CustomButton>
        </div>
        <div className="flex justify-center mt-1">
          <div className="h-px w-full bg-gray-800 mb-5" /> {/* Add a divider */}
        </div>

        {/* CustomTable component */}
        <CustomTable
          headers={headers}
          data={data}
          caption="A list of your recent Items."
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          pageSize={pageSize}
          onPageSizeChange={handlePageSizeChange}
          enableCheckbox={true}
          onRowSelect={handleRowSelect}
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

export default ItemsList;
