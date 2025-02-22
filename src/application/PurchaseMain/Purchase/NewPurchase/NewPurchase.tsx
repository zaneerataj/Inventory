import React, { useState, ChangeEvent } from 'react';
import { Barcode, Home, User, UserPlus } from 'lucide-react';
import CustomInput from '../../../../CustomComponents/CustomInput/CustomInput';
import CustomDatePicker from '../../../../CustomComponents/CustomDatePicker/CustomDatePicker';
import CustomTable from '../../../../CustomComponents/CustomTable/CustomTable';
import CustomDropdown from '../../../../CustomComponents/CustomDropDown/CustomDropDown';
import CustomTextarea from '../../../../CustomComponents/CustomTextArea/CustomTextarea';
import Header from '../../Dashboard/Header';
import CustomButton from '../../../../CustomComponents/CustomButton/CustomButton';
import { useNavigate } from 'react-router-dom';
import CustomAlertDialog from '../../../../CustomComponents/CustomAlertDialog/CustomAlertDialog';

interface Supplier {
  supplierName: string;
  mobile: string;
  phone: string;
  email: string;
  openingBalance: number;
  gstNumber: string;
  taxNumber: string;
  country: string;
  state: string;
  city: string;
  postcode: string;
  address: string;
}

const headers = [
  'Item Name',
  'Quantity',
  'Purchase Price(₹)',
  'Discount(₹)',
  'Tax %',
  'Tax Amount(₹)',
  'Unit Cost(₹)',
  'Total Amount(₹)',
  'Action',
];

const NewPurchase: React.FC = () => {
  const [supplierName, setSupplierName] = useState('');
  const [purchaseDate, setPurchaseDate] = useState<Date | undefined>(undefined);
  const [status, setStatus] = useState('');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [itemName, setItemName] = useState('');
  const [expireDate, setExpireDate] = useState<Date | undefined>(undefined);
  const [category, setCategory] = useState('');
  const labelClass = 'text-sm text-gray-600';
  const inputClass = 'w-full p-2 pl-10 text-sm text-gray-700';
  const [data, setData] = useState([{}]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [otherCharges, setOtherCharges] = useState('');
  const [discountOnAll, setDiscountOnAll] = useState('');
  const [note, setNote] = useState('');
  const [otherChargesType, setOtherChargesType] = useState('');
  const navigate = useNavigate();
  const [State, setState] = useState<string>('');

  const [selectedSupplier, setSelectedSupplier] = useState<Supplier | null>(
    null,
  );

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setItemName(event.target.value);
  }

  function handleSupplierNameChange(
    event: ChangeEvent<HTMLInputElement>,
  ): void {
    setSupplierName(event.target.value);
  }

  function handlePurchaseDateChange(date: Date | undefined): void {
    setPurchaseDate(date);
  }

  function handleStatusChange(event: ChangeEvent<HTMLInputElement>): void {
    setStatus(event.target.value);
  }

  function handleReferenceNumberChange(
    event: ChangeEvent<HTMLInputElement>,
  ): void {
    setReferenceNumber(event.target.value);
  }

  function handlePageSizeChange(size: number): void {
    setPageSize(size);
  }

  function setSelectedCustomers(selectedIds: string[]): void {
    console.log(selectedIds);
  }

  function handleTotalQuantitiesChange(
    event: ChangeEvent<HTMLInputElement>,
  ): void {
    setTotalQuantities(parseInt(event.target.value, 10) || 0);
  }

  function handleOtherChargesChange(
    event: ChangeEvent<HTMLInputElement>,
  ): void {
    setOtherCharges(event.target.value);
  }

  function handleDiscountOnAllChange(
    event: ChangeEvent<HTMLInputElement>,
  ): void {
    setDiscountOnAll(event.target.value);
  }

  function handleNoteChange(event: ChangeEvent<HTMLInputElement>): void {
    setNote(event.target.value);
  }

  function handleOtherChargesTypeChange(
    event: ChangeEvent<HTMLInputElement>,
  ): void {
    setOtherChargesType(event.target.value);
  }

  function handleSaveSupplier(supplier: Supplier): void {
    setSelectedSupplier(supplier);
  }

  function handleSubmit(event: React.MouseEvent<HTMLButtonElement>): void {
    event.preventDefault();
    console.log('Submitting:', {
      supplierName,
      purchaseDate,
      status,
      referenceNumber,
      itemName,
      expireDate,
      category,
      totalQuantities,
      otherCharges,
      discountOnAll,
      note,
      otherChargesType,
    });
  }
  function handleStateChange(
    value: string | number | (string | number)[],
  ): void {
    throw new Error('Function not implemented.');
  }

  function handleCategory(value: string | number | (string | number)[]): void {
    throw new Error('Function not implemented.');
  }
  
  return (
    <div className="min-h-screen">
      <Header />
      <div className="p-4 flex justify-between items-center">
        <h3 className="text-2xl font-semibold mb-4">
          Purchase
          <small className="text-sm text-gray-500 ml-2">
            Add/Update Purchase
          </small>
        </h3>

        <div className="flex">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/')}
          >
            <Home className="w-4 h-4 ml-6" />
            <span>Home</span>
          </div>
          <span>&gt;</span>
          <div
            className="flex items-center space-x-1 cursor-pointer text-black-500"
            onClick={() => navigate('/purchase/Purchase/PurchaseList')}
          >
            <span>Purchase List</span>
          </div>
          <span>&gt;</span>
          <div
            className="flex items-center space-x-1 cursor-pointer text-black-500"
            onClick={() => navigate('/purchase/Purchase/newpurchase')}
          >
            <span> New Purchase </span>
          </div>
        </div>
      </div>
      <div className="m-2 p-4 rounded-md border border-gray-290 ">
        <div className="flex md:space-x-52">
          <div className="w-[40%] mb-2 ml-16 relative" style={{ width: 290 }}>
            <label className={labelClass}>
              Supplier Name<span className="text-red-400">*</span>
            </label>
            <CustomDropdown
              options={[
                { value: 'Category 1', label: 'John-87456564' },
                { value: 'Category 2', label: 'moin-98324244' },
                { value: 'Category 3', label: 'Moiz-23457890' },
              ]}
              value={category}
              onChange={(value) =>
                setCategory(typeof value === 'string' ? value : '')
              }
              className={inputClass}
              placeholder="Search Name/Code"
              id={''}
            />

            <CustomAlertDialog
              className="absolute ml-72 top-6 w-8 h-9 border  bottom-5 rounded-sm"
              open={false}
              onClose={function (): void {
                throw new Error('Function not implemented.');
              }}
              onSave={function (): void {
                throw new Error('Function not implemented.');
              }}
            >
              <div className="flex justify-center text-xl font-bold mb-4">
                Add Supplier
              </div>

              {/* Form content */}
              <div className="flex flex-wrap">
                {/* First row */}
                <div className="flex w-full justify-between mb-4">
                  <div className="m-2 w-[45%] flex items-center">
                    <label className="w-32 text-sm">Supplier Name*</label>
                    <CustomInput placeholder="" className="w-full" />
                  </div>
                  <div className="m-2 w-[45%] flex items-center">
                    <label className="w-32 text-sm">Mobile</label>
                    <CustomInput placeholder="" className="w-full" />
                  </div>
                  <div className="m-2 w-[45%] flex items-center">
                    <label className="w-32 text-sm">Phone</label>
                    <CustomInput placeholder="" className="w-full" />
                  </div>
                </div>

                {/* Second row */}
                <div className="flex w-full justify-between mb-4">
                  <div className="m-2 w-[45%] flex items-center">
                    <label className="w-32 text-sm">Email</label>
                    <CustomInput placeholder="" className="w-full" />
                  </div>
                  <div className="m-2 w-[45%] flex items-center">
                    <label className="w-32 text-sm">Previous Due</label>
                    <CustomInput placeholder="" className="w-full" />
                  </div>
                  <div className="m-2 w-[45%] flex items-center">
                    <label className="w-32 text-sm">GST Number</label>
                    <CustomInput placeholder="" className="w-full" />
                  </div>
                </div>

                {/* Third row */}
                <div className="flex w-full justify-between mb-4">
                  <div className="m-2 w-[45%] flex items-center">
                    <label className="w-32 text-sm">TAX Number</label>
                    <CustomInput placeholder="" className="w-full" />
                  </div>
                  <div className="m-2 w-[45%] flex items-center">
                    <label className="w-32 text-sm">Country</label>
                    <div className="w-[100%]">
                      <CustomDropdown
                        options={[
                          { value: 'Category 1', label: 'INDIA' },
                          { value: 'Category 2', label: 'US' },
                        ]}
                        value={category}
                        onChange={handleCategory}
                        id={'country'}
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="m-2 w-[45%] flex items-center">
                    <label className="w-32 text-sm">State</label>
                    <div className="w-[100%]">
                      <CustomDropdown
                        options={[
                          { value: 'Category 1', label: 'Karnataka' },
                          { value: 'Category 2', label: 'Delhi' },
                        ]}
                        value={State}
                        onChange={handleStateChange}
                        id={'state'}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Fourth row */}
                <div className="flex w-full justify-between mb-4">
                  <div className="m-2 w-[45%] flex items-center">
                    <label className="w-32 text-sm">City</label>
                    <CustomInput placeholder="" className="w-full" />
                  </div>
                  <div className="m-2 w-[45%] flex items-center">
                    <label className="w-32 text-sm">Postcode</label>
                    <CustomInput placeholder="" className="w-full" />
                  </div>
                  <div className="m-2 w-[45%] flex items-center">
                    <label className="w-32 text-sm">Address</label>
                    <CustomTextarea />
                  </div>
                </div>
              </div>
            </CustomAlertDialog>
          </div>
          <div
            className="w-full md:w-[30%] mb-2 ml-46"
            style={{ marginLeft: 250 }}
          >
            <label className={labelClass}>
              Purchase Date<span className="text-red-400 ">*</span>
            </label>
            <CustomDatePicker
              selected={expireDate}
              onChange={(date: Date | undefined) => setExpireDate(date)}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-52">
          <div className="w-full md:w-[30%] mb-2 ml-16">
            <label className={labelClass}>
              Status<span className="text-red-400">*</span>
            </label>
            <CustomDropdown
              options={[
                { value: 'Category 1', label: 'Received' },
                { value: 'Category 2', label: 'Pending' },
                { value: 'Category 3', label: 'Ordered' },
              ]}
              value={category}
              onChange={(value) =>
                setCategory(typeof value === 'string' ? value : '')
              }
              className={inputClass}
              placeholder=""
              id={''}
            />
          </div>
          <div className="w-full md:w-[30%] mb-2 ml-40">
            <label className={labelClass}>
              Reference No<span className="text-red-400">*</span>
            </label>
            <CustomInput />
          </div>
        </div>
      </div>
      <div className="p-4 rounded-md border border-gray-300 shadow-md">
        <div className="m-2 w-[98%] flex items-center mb-8">
          <div className="relative align-middle ml-24 w-[80%]">
            <Barcode className="absolute left-2 top-2 w-6 h-6" />
            <div className="absolute left-10 top-2 h-6 w-px" />
            <CustomInput
              type="text"
              placeholder="Search Item Name/BarCode/ItemCode"
              value={itemName}
              onChange={handleInputChange}
              className="py-2 border rounded-md w-full pl-14"
            />
          </div>
        </div>
        <div className="mb-6">
          <CustomTable
            headers={headers}
            data={data}
            caption=""
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageSizeChange}
            pageSize={pageSize}
            onPageSizeChange={handlePageSizeChange}
            enableCheckbox={false}
            onRowSelect={(selectedIds: string[]) =>
              setSelectedCustomers(selectedIds)
            }
            enableRowsPerPage={false}
            enableCopy={false}
            enableExport={false}
            enableColumnVisibility={false}
            enablePrint={false}
            enableSearch={false}
            enableDelete={false}
            enablePagination={false}
          />
        </div>

        <div className="flex flex-row w-[100%]">
          <div>
            <div className=" w-auto  mb-2">
              <label
                className="block text-sm font-medium "
                htmlFor="totalQuantities"
              >
                Total Quantities<span className="text-red-500">*</span>
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 ml-5 left-0 flex items-center pl-3 pointer-events-none">
                  <span className=" sm:text-sm">
                    <span className="sr-only">Total Quantities</span>
                  </span>
                </div>
                <CustomInput
                  type="number"
                  name="totalQuantities"
                  id="totalQuantities"
                  className="block w-full pl-10 pr-3 py-2  sm:text-sm"
                  placeholder="0"
                  value={totalQuantities}
                  onChange={handleTotalQuantitiesChange}
                />
              </div>
            </div>

            {/* Other Charges Section */}
            <div className="md:w-1/2 mb-2 flex w-auto items-center">
              <label
                className="block text-sm w-auto font-medium "
                htmlFor="otherCharges"
              >
                Other Charges<span className="text-red-500 ml-2">*</span>
              </label>
              <div className="mt-1 relative rounded-md shadow-sm flex  items-center">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                <CustomInput
                  type="number"
                  name="otherCharges"
                  id="otherCharges"
                  className="block w-auto pl-10 pr-3 ml-5 sm:text-sm mr-2"
                  placeholder="0"
                  value={otherCharges}
                  onChange={handleOtherChargesChange}
                />
                <div className="ml-3 w-[35%]" style={{ width: 200 }}>
                  <CustomDropdown
                    options={[
                      { value: 'Category 1', label: 'Vat 5%' },
                      { value: 'Category 2', label: 'tax 10%' },
                      { value: 'Category 3', label: 'tax 18%' },
                      { value: 'Category 4', label: 'IGST 4.5%' },
                      { value: 'Category 5', label: 'SGST 4.5%' },
                      { value: 'Category 6', label: 'GST 9%' },
                      { value: 'Category 7', label: 'SGST 4.5%' },
                      { value: 'Category 7', label: 'IGST 4.5%' },
                      { value: 'Category 7', label: 'SGST 4.5%' },
                    ]}
                    value={otherChargesType}
                    onChange={(value) =>
                      setOtherChargesType(
                        typeof value === 'string' ? value : '',
                      )
                    }
                    className="w-[40%] p-2 pl-10 text-sm"
                    placeholder="None"
                    id={''}
                  />
                </div>
              </div>
            </div>

            {/* Discount on All Section */}
            <div className="w-auto md:w-1/2 mb-2 flex items-center">
              <label
                className="block text-sm font-medium mr-3"
                htmlFor="discountOnAll"
              >
                Discount on All<span className="text-red-500">*</span>
              </label>
              <div className="mt-1 relative rounded-md shadow-sm flex items-center">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
                <CustomInput
                  type="number"
                  name="discountOnAll"
                  id="discountOnAll"
                  className="block pl-10 pr-3 py-2 border w-auto ml-4 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mr-2"
                  placeholder="0"
                  value={discountOnAll}
                  onChange={handleDiscountOnAllChange}
                />
                <div className="w-auto ml-3" style={{ width: 200 }}>
                  <CustomDropdown
                    options={[
                      { value: 'Category 1', label: 'Per6%' },
                      { value: 'Category 2', label: 'Fixed' },
                    ]}
                    value={category}
                    onChange={(value) =>
                      setCategory(typeof value === 'string' ? value : '')
                    }
                    className="w-full p-2 pl-10 text-sm text-gray-700"
                    placeholder=""
                    id={''}
                  />
                </div>
              </div>
            </div>

            {/* Note Section */}
            <div className="w-auto mb-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-1"
              >
                Note<span className="text-red-400">*</span>
              </label>
              <CustomTextarea />
            </div>
          </div>
          <div className="p-4 ml-16  ">
            {/* Move the total calculation section upwards */}
            <div className="flex space-x-10 justify-end mb-4 ml-44 mt-6">
              <span className="font-medium">Subtotal</span>
              <span>₹ 0.00</span>
            </div>
            <div className="flex space-x-10 justify-end mb-4">
              <span className="font-medium">Other Charges</span>
              <span>₹ 0.00</span>
            </div>
            <div className="flex space-x-10 justify-end mb-4">
              <span className="font-medium">Discount on All</span>
              <span>₹ 0.00</span>
            </div>
            <div className="flex space-x-10 justify-end mb-4">
              <span className="font-medium">Grand Total</span>
              <span>₹ 0.00</span>
            </div>
            <div className="flex-col justify-end "></div>
          </div>
        </div>
      </div>
      <div className="flex  justify-start ml-5 mt-5">
        <span className="font-medium">Previous Payments Information :</span>
      </div>
      <div className="mb-6">
        <CustomTable
          headers={[
            '#',
            'Date',
            'Payment Type',
            'Payment Note',
            'Payment',
            'Action',
          ]}
          data={data}
          caption=""
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageSizeChange}
          pageSize={pageSize}
          onPageSizeChange={handlePageSizeChange}
          enableCheckbox={false}
          onRowSelect={(selectedIds: string[]) =>
            setSelectedCustomers(selectedIds)
          }
          enableRowsPerPage={false}
          enableCopy={false}
          enableExport={false}
          enableColumnVisibility={false}
          enablePrint={false}
          enableSearch={false}
          enableDelete={false}
          enablePagination={false}
        />
      </div>

      <div className="p-4 rounded-md border border-gray-300 shadow-md mt-20">
        <div className="flex flex-row w-[100%] ">
          <div className=" md:w-[40%] mb-2 ml-12">
            <label className={labelClass}>
              Amount<span className="text-red-400">*</span>
            </label>
            <CustomInput
              type="number"
              placeholder="Enter Amount"
              value={''}
              onChange={() => { }}
              className="block w-full pl-10 pr-3 py-2  sm:text-sm"
            />
          </div>
          <div className="w-full md:w-[40%] mb-2 ml-8">
            <label className={labelClass}>
              Payment Type<span className="text-red-400">*</span>
            </label>
            <CustomDropdown
              options={[
                { value: 'Category 1', label: 'Cash' },
                { value: 'Category 2', label: 'Bank Transfer' },
                { value: 'Category 3', label: 'Credit Card' },
              ]}
              value={''}
              onChange={(value) => { }}
              className="block w-[45%]  pr-3 py-2  sm:text-sm"
              placeholder="Select Payment Type"
              id={''}
            />
          </div>
        </div>
        <div className=" mb-2 ml-10 w-[85%]">
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            Payment Note<span className="text-red-400">*</span>
          </label>
          <CustomTextarea />
        </div>
      </div>
      <div className="mt-4 flex justify-center space-x-4 mb-6 ">
        <CustomButton type="button" label="Save" onClick={handleSubmit} className=' w-56' />
        <CustomButton
          type="button"
          label="Close"
          onClick={() => navigate('/')}
          className=' w-56'
        />
      </div>
    </div>
  );
};

export default NewPurchase;
