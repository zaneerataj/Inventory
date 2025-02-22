
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../../Dashboard/Dashboard';
import { Home } from 'lucide-react';
import CustomButton from '../../../../CustomComponents/CustomButton/CustomButton';
import CustomInput from '../../../../CustomComponents/CustomInput/CustomInput';
import CustomDropdown from '../../../../CustomComponents/CustomDropDown/CustomDropDown';
import CustomDatePicker from '../../../../CustomComponents/CustomDatePicker/CustomDatePicker';
import Header from '../../Dashboard/Header';

const units = [
  { value: 'Kg', label: 'Kg' },
  { value: 'Liter', label: 'Liter' },
  { value: 'Pcs', label: 'Pcs' },
];

const categories = [
  { value: 'Electronics', label: 'Electronics' },
  { value: 'Grocery', label: 'Grocery' },
  { value: 'Clothing', label: 'Clothing' },
];

const brands = [
  { value: 'Brand1', label: 'Brand1' },
  { value: 'Brand2', label: 'Brand2' },
  { value: 'Brand3', label: 'Brand3' },
];

const taxTypes = [
  { value: 'Exclusive', label: 'Exclusive' },
  { value: 'Inclusive', label: 'Inclusive' },
];

const discountTypes = [
  { value: 'Percentage(%)', label: 'Percentage(%)' },
  { value: 'Fixed Amount', label: 'Fixed Amount' },
];

const taxOptions = [
  { value: 'None(0.00%)', label: 'None(0.00%)' },
  { value: 'GST(18.00%)', label: 'GST(18.00%)' },
  { value: 'VAT(5.00%)', label: 'VAT(5.00%)' },
];

export default function NewItems() {
  const navigate = useNavigate();
  const [itemCode, setItemCode] = useState('');
  const [itemName, setItemName] = useState('');
  const [brand, setBrand] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [unit, setUnit] = useState<string>('');
  const [sku, setSku] = useState('');
  const [hsn, setHsn] = useState('');
  const [minimumQty, setMinimumQty] = useState('');
  const [expireDate, setExpireDate] = useState<Date | undefined>(undefined);
  const [barcode, setBarcode] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [price, setPrice] = useState('');
  const [tax, setTax] = useState<string>('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [taxType, setTaxType] = useState<string>('');
  const [profitMargin, setProfitMargin] = useState('');
  const [salesPrice, setSalesPrice] = useState('');
  const [finalPrice, setFinalPrice] = useState('');
  const [discountType, setDiscountType] = useState<string>('');
  const [discount, setDiscount] = useState('');
  const [currentOpeningStock, setCurrentOpeningStock] = useState('');
  const [adjustStock, setAdjustStock] = useState('');
  const [adjustmentNote, setAdjustmentNote] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = () => {
    console.log({
      itemCode, itemName, brand, category, unit, sku,
      hsn,
      minimumQty,
      expireDate,
      barcode,
      description,
      image,
      price,
      tax,
      purchasePrice,
      taxType,
      profitMargin,
      salesPrice,
      finalPrice,
      discountType,
      discount,
      currentOpeningStock,
      adjustStock,
      adjustmentNote,
    });
    // Add navigation or other logic if needed
    navigate('/'); // Redirect to home or another page
  };
  const headers = ['#', 'Payment Date', 'Payment', 'Payment Type', 'Payment Note', 'Action'];
  const data: Array<{ [key: string]: string | number | React.ReactNode }> = [];

  const totalPages = Math.ceil(data.length / pageSize);

  const currentPageData = data.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  return (
    <div>
     <Header />
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-2">
          <span className="text-xl font-bold">Items</span>
          <span className="text-gray-400">Add/Update Item</span>
        </div>
        <div
          className="flex items-center space-x-1 cursor-pointer text-black-400"
          onClick={() => navigate('/purchase/items/itemslist')}
        >
          <Home className="w-4 h-4" />
          <span>Home</span>
          <span>&gt;</span>
          <span>Items List</span>
          <span>&gt;</span>
          <span>Items </span>
        </div>
      </div>
      <div className="p-4 border rounded-md">
        {/* Item Details Form */}
        <div className="flex flex-col space-y-2">
          {/* Row 1 */}
          <div className="flex flex-wrap mb-2">
            <div className="m-1 w-[45%]">
              <label className="block text-sm font-semibold">
                Item Code<span className="text-red-400">*</span>
              </label>
              <CustomInput
                placeholder=""
                value={itemCode}
                onChange={(e) => setItemCode(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap mb-2">
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Item Name<span className="text-red-400">*</span>
              </label>
              <CustomInput
                placeholder=""
                value={itemName}
                onChange={(e) => setItemName(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Brand
              </label>
              <CustomDropdown
                options={brands}
                value={brand}
                onChange={(value) => setBrand(value as string)}
                className="w-full"
                id="brand"
              />
            </div>
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Category<span className="text-red-400">*</span>
              </label>
              <CustomDropdown
                options={categories}
                value={category}
                onChange={(value) => setCategory(value as string)}
                className="w-full"
                id="category"
              />
            </div>
          </div>

          {/* Row 3 */}
          <div className="flex flex-wrap mb-2">
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Unit<span className="text-red-400">*</span>
              </label>
              <CustomDropdown
                options={units}
                value={unit}
                onChange={(value) => setUnit(value as string)}
                className="w-full"
                id="unit"
              />
            </div>
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                SKU
              </label>
              <CustomInput
                placeholder=""
                value={sku}
                onChange={(e) => setSku(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                HSN
              </label>
              <CustomInput
                placeholder=""
                value={hsn}
                onChange={(e) => setHsn(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Row 4 */}
          <div className="flex flex-wrap mb-2">
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Minimum Qty<span className="text-red-400">*</span>
              </label>
              <CustomInput
                placeholder=""
                value={minimumQty}
                onChange={(e) => setMinimumQty(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Expiry Date
              </label>
              <CustomDatePicker
                selected={expireDate}
                onChange={(date: React.SetStateAction<Date | undefined>) => setExpireDate(date)}
              />
            </div>
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Barcode
              </label>
              <CustomInput
                placeholder=""
                value={barcode}
                onChange={(e) => setBarcode(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Row 5 */}
          <div className="flex flex-wrap mb-2 w-[45%]">
            <div className="m-1 w-full">
              <label className="block text-sm font-semibold">
                Description
              </label>
              <CustomInput
                placeholder=""
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full h-20"
              />
            </div>
          </div>

          {/* Row 6 */}
          <div className="flex flex-wrap mb-2">
            <div className="m-1 w-[40%]">
              <label className="block text-sm font-semibold">
                Select Image
              </label>
              <input type="file" onChange={handleImageChange} />
              <span className="text-xs mt-1 block">
                Max Width/Height: 1000px * 1000px & Size: 1MB
              </span>
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <div className="h-px w-full bg-gray-200" /> {/* Add a divider */}
          </div>

          {/* Row 7 */}
          <div className="flex flex-wrap mb-2">
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Price<span className="text-red-400">*</span>
              </label>
              <CustomInput
                placeholder=""
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Tax
              </label>
              <CustomDropdown
                options={taxOptions}
                value={tax}
                onChange={(value) => setTax(value as string)}
                className="w-full"
                id="tax"
              />
            </div>
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Purchase Price<span className="text-red-400">*</span>
              </label>
              <CustomInput
                placeholder=""
                value={purchasePrice}
                onChange={(e) => setPurchasePrice(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Row 8 */}
          <div className="flex flex-wrap mb-2">
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Tax Type<span className="text-red-400">*</span>
              </label>
              <CustomDropdown
                options={taxTypes}
                value={taxType}
                onChange={(value) => setTaxType(value as string)}
                className="w-full"
                id="taxType"
              />
            </div>
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Profit Margin (%)
              </label>
              <CustomInput
                placeholder=""
                value={profitMargin}
                onChange={(e) => setProfitMargin(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Sales Price<span className="text-red-400">*</span>
              </label>
              <CustomInput
                placeholder=""
                value={salesPrice}
                onChange={(e) => setSalesPrice(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Row 9 */}
          <div className="flex flex-wrap mb-2">
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Final Price<span className="text-red-400">*</span>
              </label>
              <CustomInput
                placeholder=""
                value={finalPrice}
                onChange={(e) => setFinalPrice(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <div className="h-px w-full bg-gray-200" /> {/* Add a divider */}
          </div>
          {/* Row 10 */}
          <div className="flex flex-wrap mb-2">
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Discount Type<span className="text-red-400">*</span>
              </label>
              <CustomDropdown
                options={discountTypes}
                value={discountType}
                onChange={(value) => setDiscountType(value as string)}
                className="w-full"
                id="discountType"
              />
            </div>
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Discount
              </label>
              <CustomInput
                placeholder=""
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Row 11 */}
          <div className="flex flex-wrap mb-2">
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Current Opening Stock<span className="text-red-400">*</span>
              </label>
              <CustomInput
                placeholder=""
                value={currentOpeningStock}
                onChange={(e) => setCurrentOpeningStock(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Adjust Stock
              </label>
              <CustomInput
                placeholder=""
                value={adjustStock}
                onChange={(e) => setAdjustStock(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="m-1 w-full md:w-[30%]">
              <label className="block text-sm font-semibold">
                Adjustment Note
              </label>
              <CustomInput
                placeholder=""
                value={adjustmentNote}
                onChange={(e) => setAdjustmentNote(e.target.value)}
                className="w-full h-20" // Added more height
              />
            </div>
          </div>
          <div className="flex justify-center mt-2">
            <div className="h-px w-full bg-gray-200" /> {/* Add a divider */}
          </div>
          {/* Action Buttons */}
          <div className="flex justify-center mt-4">
            <CustomButton onClick={handleSubmit} label="Save" className='w-56' />
            <CustomButton onClick={() => navigate('/')} label="Close" className="ml-2 w-56" />
          </div>
        </div>
      </div>
      <div className="p-4 border rounded-md mt-8">
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
}

// import React, { useState } from 'react';
// import { Label } from "../../../../../components/ui/label";
// import { Input } from "../../../../../components/ui/input";
// import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent } from '../../../../../components/ui/dropdown-menu';
// import CustomButton from '../../../../CustomComponents/CustomButton/CustomButton';

// interface PaymentFormProps {
//   onSave: (amount: number, note: string, type: string) => void;
// }

// const MakePayment: React.FC<PaymentFormProps> = ({ onSave }) => {
//   const [amount, setAmount] = useState<string>('');
//   const [note, setNote] = useState<string>('');
//   const [paymentType, setPaymentType] = useState<string>('');

//   const handleSave = () => {
//     if (amount && paymentType) {
//       onSave(Number(amount), note, paymentType);
//       // Reset form
//       setAmount('');
//       setNote('');
//       setPaymentType('');
//     } else {
//       alert('Please fill out all required fields.');
//     }
//   };

//   return (
//     <div className="mx-auto p-6 shadow-lg rounded-md">
//       <h2 className="text-lg font-semibold mb-4">Make Payment :</h2>
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//         <div>
//           <Label className="block text-sm font-medium mb-1">Amount</Label>
//           <Input
//             type="number"
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//         </div>
//         <div>
//           <Label className="block text-sm font-medium mb-1">Payment Type</Label>
//           <DropdownMenu>
//             <DropdownMenuTrigger className="w-full p-2 border border-gray-300 rounded-md focus:ring-2">
//               {paymentType || '-Select-'}
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//               {['Cash', 'Card', 'Paytm', 'Finance'].map(type => (
//                 <DropdownMenuItem key={type} onSelect={() => setPaymentType(type)}>
//                   {type}
//                 </DropdownMenuItem>
//               ))}
//             </DropdownMenuContent>
//           </DropdownMenu>
//         </div>
//         <div className="col-span-2">
//           <Label className="block text-sm font-medium mb-1">Payment Note</Label>
//           <Input
//             type="text"
//             className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
//             value={note}
//             onChange={(e) => setNote(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="mt-4 ">
//         <CustomButton
//           onClick={handleSave}
//           className=" border p-2 rounded-md w-1/2"
//         >
//           Save
//         </CustomButton>
//         <CustomButton
//           onClick={handleSave}
//           className="  p-2 rounded-md w-1/2"
//         >
//           Close
//         </CustomButton>
//       </div>
//     </div>
//   );
// };

// export default MakePayment;
