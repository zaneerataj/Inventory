import React, { useState } from 'react';
import { Home, Barcode } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../../Dashboard/Dashboard';
import CustomInput from '../../../../CustomComponents/CustomInput/CustomInput';
import CustomButton from '../../../../CustomComponents/CustomButton/CustomButton';
import CustomTable from '../../../../CustomComponents/CustomTable/CustomTable';

// Example headers for CustomTable
const headers = ['Item Name', 'Quantity', 'Action'];

const initialData = [
  {}
];

export default function PrintLabels() {
  const [itemName, setItemName] = useState('');
  const [data, setData] = useState(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const navigate = useNavigate();

  const handlePreview = () => {
    console.log('Preview button clicked!');
  };

  const handleClose = () => {
    navigate('/');
  };

  const handlePrint = () => {
    window.print();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemName(e.target.value);
  };

  // Calculate the current page data for pagination
  const startIndex = (currentPage - 1) * pageSize;
  const currentPageData = data.slice(startIndex, startIndex + pageSize);

  return (
    <div>
      
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-2">
          <span className="text-xl font-bold">Print Labels</span>
          <span className="text-gray-500">Add/Update Sales</span>
        </div>
        <div
          className="flex items-center space-x-1 cursor-pointer text-black-500"
          onClick={() => navigate('/')}
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
          {/* <span>&gt;</span>
          <span>Print Labels</span> */}
        </div>
      </div>
      <div className="p-4 rounded-md border border-gray-600 shadow-md">
        <div className="m-2  w-[98%] flex items-center mb-8">
          <div className="relative w-full">
            <Barcode className="absolute left-2 top-2 w-6 h-6" />
            <div className="absolute left-10 top-2 h-6 w-px bg-gray-600" />
            <CustomInput
              type="text"
              placeholder="Search Item Name/BarCode/ItemCode"
              value={itemName}
              onChange={handleInputChange}
              className="px-4 py-2 border rounded-md w-full pl-14"
            />
          </div>
        </div>

        <table className="min-w-full border">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="border px-4 py-2">{header}</th>
              ))}
            </tr>
          </thead>
        </table>

        <div className="flex justify-center  space-x-4 mb-3 mt-20">
          <CustomButton type="button" label="Preview" onClick={handlePreview} className='w-56'/>
          <CustomButton type="button" label="Close" onClick={handleClose} className='w-56' />
        </div>
        <div className="flex justify-center mt-2">
          <div className="h-px w-full bg-gray-200" /> {/* Add a divider */}
        </div>

        <div className="flex justify-end mt-1">
          <CustomButton type="button" label="Print" onClick={handlePrint} />
        </div>
      </div>
    </div>
  );
} 