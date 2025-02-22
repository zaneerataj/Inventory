
import React, { useState } from 'react';
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../../Dashboard/Dashboard';
import CustomInput from '../../../../CustomComponents/CustomInput/CustomInput';
import CustomButton from '../../../../CustomComponents/CustomButton/CustomButton';
import CustomDatePicker from '../../../../CustomComponents/CustomDatePicker/CustomDatePicker';
import CustomDropdown from '../../../../CustomComponents/CustomDropDown/CustomDropDown';
import Header from '../../Dashboard/Header';

export default function NewExpenses() {
  const navigate = useNavigate();
  const [expireDate, setExpireDate] = useState<Date | undefined>(undefined);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [expenseFor, setExpenseFor] = useState('');
  const [amount, setAmount] = useState('');
  const [referenceNo, setReferenceNo] = useState('');

  const handleCategoryChange = (value: string | number | Array<string | number>) => {
    if (typeof value === 'string') {
      setCategory(value);
    }
  };

  const handleSubmit = () => {
    console.log('Expire Date:', expireDate);
    console.log('Description:', description);
    console.log('Category:', category);
    console.log('Expense For:', expenseFor);
    console.log('Amount:', amount);
    console.log('Reference No:', referenceNo);
  };

  const inputClass = "w-full h-10 px-2 rounded-md border border-gray-300";
  const labelClass = "block text-sm mb-1";

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-2">
          <span className="text-xl font-bold">Expense</span>
          <span className="text-gray-500">Add/update Expense</span>
        </div>
        <div
          className="flex items-center space-x-1 cursor-pointer text-black-500"
          onClick={() => navigate('/purchase/Expenses/ExpensesList')}
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
          <span>&gt;</span>
          <span>Expense List</span>
          {/* <span>&gt;</span>
          <span>Expense</span> */}
        </div>
      </div>

      <div className="m-2 p-4 rounded-md border border-gray-300">
        <span className="text-xl mb-4 block">Please Enter Valid Data</span>
        <div className='pl-36'>
          <div className="flex flex-col md:flex-row md:space-x-2 ">
            <div className="w-full md:w-[35%] mb-2 ">
              <label className={labelClass}>
                Expire Date<span className="text-red-400">*</span>
              </label>
              <div className="relative flex-row">
                <CustomDatePicker
                  selected={expireDate}
                  onChange={(date: Date | undefined) => setExpireDate(date)}

                />

              </div>
            </div>
            <div className="w-full md:w-[35%] mb-2 ml-10 pl-24 flex flex-col">
              <label className={labelClass}>
                Reference No<span className="text-red-400">*</span>
              </label>
              <CustomInput
                type="text"
                placeholder=""
                value={referenceNo}
                onChange={(e) => setReferenceNo(e.target.value)}
                className={`${inputClass} mt-1`} // Add margin-top to input
              />
            </div>

          </div>

          <div className="flex flex-col md:flex-row md:space-x-2">
            <div className="w-full md:w-[35%] mb-2">
              <label className={labelClass}>
                Category<span className="text-red-400">*</span>
              </label>
              <div className="relative">
                <CustomDropdown
                  options={[
                    { value: 'Category 1', label: '-Select-' },
                    { value: 'Category 2', label: 'Petrol' },
                    { value: 'Category 3', label: 'Bills' },
                    { value: 'Category 4', label: 'Office Vehicles' },
                  ]}
                  value={category}
                  onChange={handleCategoryChange}
                  id={'category'}
                  className={inputClass}
                />
              </div>
            </div>
            <div className="w-full md:w-[35%] mb-2 ml-10 pl-24">
              <label className={labelClass}>
                Note
              </label>
              <div className="relative">
                <CustomInput
                  type="text"
                  placeholder=""
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className={`${inputClass} h-14`}

                />
              </div>
            </div>
          </div>

          <div className="mb-2 w-full md:w-[35%]">
            <label className={labelClass}>
              Expense For<span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <CustomInput
                type="text"
                placeholder=""
                value={expenseFor}
                onChange={(e) => setExpenseFor(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>

          <div className="mb-2 w-full md:w-[35%]">
            <label className={labelClass}>
              Amount<span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <CustomInput
                type="text"
                placeholder=""
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className={inputClass}
              />
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="mt-4 flex justify-center space-x-5">
          <CustomButton type="button" label="Save" onClick={handleSubmit} className='w-56' />
          <CustomButton type="button" label="Close" onClick={() => navigate('/')} className='w-56' />
        </div>
      </div>
    </div>
  );
}