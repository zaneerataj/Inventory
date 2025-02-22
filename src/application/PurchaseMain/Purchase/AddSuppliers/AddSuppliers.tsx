import CustomTextarea from '../../../../CustomComponents/CustomTextArea/CustomTextarea';
import CustomButton from '../../../../CustomComponents/CustomButton/CustomButton';
import CustomInput from '../../../../CustomComponents/CustomInput/CustomInput';
import React, { useState } from 'react';

interface FormValues {
  supplierName: string;
  mobile: string;
  phone: string;
  email: string;
  openingBalance: string;
  gstNumber: string;
  taxNumber: string;
  country: string;
  state: string;
  city: string;
  postcode: string;
  address: string;
}

const AddSupplierForm = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    supplierName: '',
    mobile: '',
    phone: '',
    email: '',
    openingBalance: '',
    gstNumber: '',
    taxNumber: '',
    country: 'India',
    state: '',
    city: '',
    postcode: '',
    address: '',
  });

  const [formErrors, setFormErrors] = useState({
    supplierName: '',
  });

  // Handle Input Change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // Form validation (basic)
  const validate = () => {
    let isValid = true;
    const errors: any = { supplierName: '' };

    if (!formValues.supplierName.trim()) {
      errors.supplierName = 'Supplier Name is required';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  // Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      // Submit the form
      console.log('Form Submitted', formValues);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-full max-w-4xl p-6 shadow-lg rounded-lg">
        <h2 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r to-black text-white py-2 rounded-t-lg">
          Add Supplier
        </h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          {/* Supplier Name */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Supplier Name*</label>
            <CustomInput
              type="text"
              name="supplierName"
              className={`p-2 border ${formErrors.supplierName ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
              placeholder="Supplier Name"
              value={formValues.supplierName}
              onChange={handleChange}
            />
            {formErrors.supplierName && <p className="text-red-500 text-sm">{formErrors.supplierName}</p>}
          </div>

          {/* Mobile */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Mobile</label>
            <CustomInput
              type="text"
              name="mobile"
              className="p-2 border border-gray-300 rounded-lg"
              placeholder="Mobile"
              value={formValues.mobile}
              onChange={handleChange}
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Phone</label>
            <CustomInput
              type="text"
              name="phone"
              className="p-2 border border-gray-300 rounded-lg"
              placeholder="Phone"
              value={formValues.phone}
              onChange={handleChange}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Email</label>
            <CustomInput
              type="email"
              name="email"
              className="p-2 border border-gray-300 rounded-lg"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>

          {/* Opening Balance */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Opening Balance</label>
            <CustomInput
              type="text"
              name="openingBalance"
              className="p-2 border border-gray-300 rounded-lg"
              placeholder="Opening Balance"
              value={formValues.openingBalance}
              onChange={handleChange}
            />
          </div>

          {/* GST Number */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">GST Number</label>
            <CustomInput
              type="text"
              name="gstNumber"
              className="p-2 border border-gray-300 rounded-lg"
              placeholder="GST Number"
              value={formValues.gstNumber}
              onChange={handleChange}
            />
          </div>

          {/* TAX Number */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">TAX Number</label>
            <CustomInput
              type="text"
              name="taxNumber"
              className="p-2 border border-gray-300 rounded-lg"
              placeholder="TAX Number"
              value={formValues.taxNumber}
              onChange={handleChange}
            />
          </div>

          {/* Country */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Country</label>
            <select
              name="country"
              className="p-2 border border-gray-300 rounded-lg"
              value={formValues.country}
              onChange={handleChange}
            >
              <option value="India">India</option>
            </select>
          </div>

          {/* State */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">State</label>
            <select
              name="state"
              className="p-2 border border-gray-300 rounded-lg"
              value={formValues.state}
              onChange={handleChange}
            >
              <option value="">-Select-</option>
              <option value="State 1">State 1</option>
              <option value="State 2">State 2</option>
            </select>
          </div>

          {/* City */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">City</label>
            <CustomInput
              type="text"
              name="city"
              className="p-2 border border-gray-300 rounded-lg"
              placeholder="City"
              value={formValues.city}
              onChange={handleChange}
            />
          </div>

          {/* Postcode */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium">Postcode</label>
            <CustomInput
              type="text"
              name="postcode"
              className="p-2 border border-gray-300 rounded-lg"
              placeholder="Postcode"
              value={formValues.postcode}
              onChange={handleChange}
            />
          </div>

          {/* Address */}
          <div className="flex flex-col col-span-2">
            <label className="mb-2 font-medium">Address</label>
            
          </div>
          {/* <div className=" mb-2 ml-10 w-[85%]">
          <label
            htmlFor="message"
            className="block text-sm font-medium mb-1"
          >
            Payment Note<span className="text-red-400">*</span>
          </label> */}
          <CustomTextarea />



          <div className="col-span-2 flex justify-center">
            <CustomButton type="submit" className="bg-blue-500 text-white p-2 rounded-lg">
              Add Supplier
            </CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSupplierForm;
