import React, { useState } from 'react';
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../../Dashboard/Dashboard';
import CustomInput from '../../../../CustomComponents/CustomInput/CustomInput';
import CustomButton from '../../../../CustomComponents/CustomButton/CustomButton';
import Header from '../../Dashboard/Header';

export default function NewCategories() {
  const navigate = useNavigate();
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');

  const handleCategoryNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };

  const handleDescriptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to the backend
    console.log('Category Name:', categoryName);
    console.log('Description:', description);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-2">
          <span className="text-xl font-bold">Category</span>
          <span className="text-gray-500">Add/update category</span>
        </div>
        <div
          className="flex items-center space-x-1 cursor-pointer text-black-500"
          onClick={() => navigate('/purchase/items/categorieslist')}
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
          <span>&gt;</span>
          <span>Categories List</span>
          <span>&gt;</span>
          <span>Categories</span>
        </div>
      </div>
      <div className="m-2 p-4 rounded-md border border-gray-300">
        <span className="text-xl mb-8">Please Enter Valid Data</span>
        <div className='pl-36'>
          <div className="m-2 flex items-center">
            <label className="mr-2 text-sm">
              Category Name<span className="text-red-400">*</span>
            </label>
            <CustomInput
              type="text"
              placeholder="Enter category name"
              className="w-[45%] h-10"
              value={categoryName}
              onChange={handleCategoryNameChange}
            />
          </div>
          <div className="m-2 flex items-center">
            <label className="mr-2 text-sm">
              Description
            </label>
            <CustomInput
              type="text"
              placeholder="Enter description"
              className="w-[45%] h-20 ml-8"
              value={description}
              onChange={handleDescriptionChange}
            />
          </div>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <CustomButton type="button" label="Save" onClick={handleSubmit} className='w-56' />
          <CustomButton type="button" label="Close" onClick={() => navigate('/')} className='w-56' />
        </div>
      </div>
    </div>
  );
}