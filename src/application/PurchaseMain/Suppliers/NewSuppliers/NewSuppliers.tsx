import React, { useState } from 'react';
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../../Dashboard/Dashboard';
import CustomButton from '../../../../CustomComponents/CustomButton/CustomButton';
import CustomInput from '../../../../CustomComponents/CustomInput/CustomInput';
import CustomDropdown from '../../../../CustomComponents/CustomDropDown/CustomDropDown';
import Header from '../../Dashboard/Header';

const NewSuppliers: React.FC = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');

  const [customerName, setCustomerName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [gstNumber, setGstNumber] = useState('');
  const [taxNumber, setTaxNumber] = useState('');
  const [country, setCountry] = useState('India');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [postcode, setPostcode] = useState('');
  const [address, setAddress] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // Number of rows per page

  const headers = ['#', 'Payment Date', 'Payment', 'Payment Type', 'Payment Note', 'Action'];
  const data: Array<{ [key: string]: string | number | React.ReactNode }> = [];

  const totalPages = Math.ceil(data.length / pageSize);

  const currentPageData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  function handleCategoryChange(value: string | number | (string | number)[]): void {
    throw new Error('Function not implemented.');
  }

  return (
    <div>
      <Header />
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold">Suppliers</span>
          <span className="text-gray-500">Add/Update Suppliers</span>
        </div>
        <div className="flex items-center space-x-1 cursor-pointer text-black-500" onClick={() => navigate('/')}>
          <Home className="w-4 h-4" />
          <span>Home</span>
        </div>
      </div>
      <div className="p-4 border rounded-md"> {/* Main container for form and buttons */}
        <div className="flex flex-wrap">
          {/* Supplier Details Form */}
          <div className="m-2 w-[45%] flex items-center">
            <label className="w-32 text-sm">Supplier Name*</label>
            <CustomInput placeholder="" className="w-full" />
          </div>
          <div className="m-2 w-[45%] flex items-center">
            <label className="w-32 text-sm">Previous due</label>
            <CustomInput placeholder="" className="w-full" />
          </div>
          <div className="m-2 w-[45%] flex items-center">
            <label className="w-32 text-sm">Mobile</label>
            <CustomInput placeholder="" className="w-full" />
          </div>

          {/* Country with CustomInput */}
          <div className="m-2 w-[45%] flex items-center">
            <label className="w-32 text-sm">Country</label>
            <div className='w-[100%]'>
              <CustomDropdown
                options={[
                  { value: 'Category 1', label: 'INDIA' },
                  { value: 'Category 2', label: 'US' },
                ]}
                value={category}
                onChange={handleCategoryChange}
                id={'category'}
                className='w-[45%]'
              />
            </div>
          </div>

          {/* Email */}
          <div className="m-2 w-[45%] flex items-center">
            <label className="w-32 text-sm">Email</label>
            <CustomInput placeholder="" className="w-full" />
          </div>

          {/* State with CustomInput */}
          <div className="m-2 w-[45%] flex items-center">
            <label className="w-32 text-sm">State</label>
            <div className='w-[100%]'>
              <CustomDropdown
                options={[
                  { value: 'Category 1', label: 'karnataka' },
                  { value: 'Category 2', label: 'delhi' },
                ]}
                value={category}
                onChange={handleCategoryChange}
                id={'category'}
                className='w-[45%]'
              />
            </div>
          </div>

          <div className="m-2 w-[45%] flex items-center">
            <label className="w-32 text-sm">Phone</label>
            <CustomInput placeholder="" className="w-full" />
          </div>
          <div className="m-2 w-[45%] flex items-center">
            <label className="w-32 text-sm">City</label>
            <CustomInput placeholder="" className="w-full" />
          </div>
          <div className="m-2 w-[45%] flex items-center">
            <label className="w-32 text-sm">GST Number</label>
            <CustomInput placeholder="" className="w-full" />
          </div>
          <div className="m-2 w-[45%] flex items-center">
            <label className="w-32 text-sm">Postcode</label>
            <CustomInput placeholder="" className="w-full" />
          </div>
          <div className="m-2 w-[45%] flex items-center">
            <label className="w-32 text-sm">Tax Number</label>
            <CustomInput placeholder="" className="w-full" />
          </div>
          <div className="m-2 w-[45%] flex items-center">
            <label className="w-32 text-sm">Address</label>
            <CustomInput placeholder="" className="w-full" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-4 flex justify-center space-x-4">
          <CustomButton type="button" label="Save"  className='w-56'/>
          <CustomButton type="button" label="Close" className='w-56' />
        </div>
      </div>

      {/* Second container for table and heading */}
      <div className="p-4 border rounded-md mt-8"> {/* Separate container for table */}
        <h3 className="font-bold mb-4">Opening Balance Payments</h3>
        <table className="min-w-full border">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th key={index} className="border px-4 py-2">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.length > 0 ? (
              currentPageData.map((row, index) => (
                <tr key={index}>
                  {Object.values(row).map((value, i) => (
                    <td key={i} className="border px-4 py-2">{value as React.ReactNode}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={headers.length} className="border px-4 py-2 text-center">
                  No previous stock entry found!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NewSuppliers;
