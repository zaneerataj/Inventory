import React, { useState } from 'react';
import CustomDropdown from '../../CustomComponents/CustomDropDown/CustomDropDown';
import { useNavigate } from 'react-router-dom';
import CustomAlert from '../CustomAlert/CustomAlert';
import CustomDatePicker from '../../CustomComponents/CustomDatePicker/CustomDatePicker';
import CustomInput from '../../CustomComponents/CustomInput/CustomInput';

interface Option {
  label: string;
  value: string | number;
}

interface ActionDropdownProps {
  id: string;
  data: any;
  onDelete: (id: string) => void;
  onChange: (value: string | number | (string | number)[]) => void;
  options: Option[];
}

const CustomActionDropdown: React.FC<ActionDropdownProps> = ({
  id,
  data,
  onDelete,
  onChange,
  options,
}) => {
  const navigate = useNavigate();

  const [alertVisible, setAlertVisible] = useState(false);
  const [returnDueAlertVisible, setReturnDueAlertVisible] = useState(false);
  const [viewPaymentsAlertVisible, setViewPaymentsAlertVisible] =
    useState(false);
  const [paymentReceiveAlertVisible, setPaymentReceiveAlertVisible] =
    useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [paymentNote, setPaymentNote] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedPaymentType, setSelectedPaymentType] = useState('');

  const customerData = [
    { label: 'Name', value: 'Vinit Hiremath' },
    { label: 'Mobile', value: '866022565988' },
    { label: 'Phone', value: '0878787777' },
    { label: 'Email', value: 'vinit@gmail.com' },
    { label: 'GST Number', value: 'GST75655' },
    { label: 'TAX Number', value: 'TAX76565' },
  ];

  const handleAction = (value: string | number | (string | number)[]) => {
    const selectedValue = Array.isArray(value) ? value[0] : value;

    switch (selectedValue) {
      case 'edit':
        navigate('/purchase/suppliers/newsuppliers', {
          state: {
            customerData: data,
            isEditable: true,
            customerId: id,
          },
        });
        break;
      case 'delete':
        if (window.confirm('Are you sure you want to delete this customer?')) {
          onDelete(id);
        }
        break;
      case 'receive-due-payments':
        setAlertVisible(true);
        break;
      case 'pay-return-due':
        setReturnDueAlertVisible(true);
        break;
      case 'view-payments':
        setViewPaymentsAlertVisible(true);
        break;
      case 'payment-receive':
        setPaymentReceiveAlertVisible(true);
        break;
      default:
        onChange(selectedValue);
        break;
    }
  };

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
  };

  const handlePaymentNoteChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPaymentNote(event.target.value);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(event.target.value);
  };

  const handlePaymentTypeChange = (
    value: string | number | (string | number)[],
  ) => {
    setSelectedPaymentType(
      Array.isArray(value) ? (value[0] as string) : (value as string),
    );
  };

  return (
    <>
      <CustomDropdown
        placeholder="Action"
        options={options}
        onChange={handleAction}
        id={id}
        value={''}
        className="max-w-[100px]"
      />

      {alertVisible && (
        <CustomAlert
          open={alertVisible}
          onClose={() => setAlertVisible(false)}
          onSave={() => setAlertVisible(false)}
          message={
            <div className="p-5">
              <h2 className="text-lg font-bold text-center">
                Pay Sales Return Due Payments
              </h2>
              <div>
                Customer Details
                <br />
                {customerData.map((item, index) => (
                  <div key={index}>
                    {item.label}: {item.value}
                    <br />
                  </div>
                ))}
              </div>
              <table className="border-collapse w-full mt-4 ">
                <tbody>
                  <tr>
                    <th className="p-2 border border-gray-300">
                      Opening Balance
                    </th>
                    <td className="p-2 border border-gray-300">₹ 500.00</td>
                    <th className="p-2 border border-gray-300">
                      Total Sales Amount
                    </th>
                    <td className="p-2 border border-gray-300">₹ 1320.00</td>
                  </tr>
                  <tr>
                    <th className="p-2 border border-gray-300">
                      Opening Balance Due
                    </th>
                    <td className="p-2 border border-gray-300">₹ 500.00</td>
                    <th className="p-2 border border-gray-300">Paid Payment</th>
                    <td className="p-2 border border-gray-300">₹ 660.00</td>
                  </tr>
                  <tr>
                    <th className="p-2 border border-gray-300">Sales Due</th>
                    <td className="p-2 border border-gray-300">₹ 660.00</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex items-center gap-4 mt-5">
                <div className="flex-1">
                  <label htmlFor="date-picker" className="block mb-1">
                    Date
                  </label>
                  <CustomDatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="amount" className="block mb-1">
                    Amount
                  </label>
                  <CustomInput
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Amount"
                    id="amount"
                    className="w-full"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="payment-type" className="block mb-1">
                    Payment Type
                  </label>
                  <CustomDropdown
                    placeholder="Payment Type"
                    options={[
                      { label: 'Card', value: 'card' },
                      { label: 'Cash', value: 'cash' },
                      { label: 'Paytm', value: 'paytm' },
                      { label: 'Finance', value: 'finance' },
                    ]}
                    onChange={handlePaymentTypeChange}
                    id="payment-type"
                    value={selectedPaymentType}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="payment-note" className="block mb-1">
                  Payment Note
                </label>
                <CustomInput
                  value={paymentNote}
                  onChange={handlePaymentNoteChange}
                  placeholder="Payment Note"
                  id="payment-note"
                  className="w-full h-20"
                />
              </div>
            </div>
          }
        />
      )}

      {returnDueAlertVisible && (
        <CustomAlert
          open={returnDueAlertVisible}
          onClose={() => setReturnDueAlertVisible(false)}
          onSave={() => setReturnDueAlertVisible(false)}
          message={
            <div className="p-5">
              <h2 className="text-lg font-bold text-center">
                Pay Sales Return Due Payments
              </h2>
              <div>
                Customer Details
                <br />
                {customerData.map((item, index) => (
                  <div key={index}>
                    {item.label}: {item.value}
                    <br />
                  </div>
                ))}
              </div>
              <table className="border-collapse w-full mt-4">
                <tbody>
                  <tr>
                    <th className="p-2 border border-gray-300">
                      Total Sales Amount
                    </th>
                    <td className="p-2 border border-gray-300">₹ 0.00</td>
                  </tr>
                  <tr>
                    <th className="p-2 border border-gray-300">Paid Payment</th>
                    <td className="p-2 border border-gray-300">₹ 0.00</td>
                  </tr>
                  <tr>
                    <th className="p-2 border border-gray-300">Sales Due</th>
                    <td className="p-2 border border-gray-300">₹</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex items-center gap-4 mt-5">
                <div className="flex-1">
                  <label htmlFor="date-picker" className="block mb-1">
                    Date
                  </label>
                  <CustomDatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                  />
                </div>

                <div className="flex-1">
                  <label htmlFor="amount" className="block mb-1">
                    Amount
                  </label>
                  <CustomInput
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Amount"
                    id="amount"
                    className="w-full"
                  />
                </div>

                <div className="flex-1">
                  <label htmlFor="payment-type" className="block mb-1">
                    Payment Type
                  </label>
                  <CustomDropdown
                    placeholder="Payment Type"
                    options={[
                      { label: 'Card', value: 'card' },
                      { label: 'Cash', value: 'cash' },
                      { label: 'Paytm', value: 'paytm' },
                      { label: 'Finance', value: 'finance' },
                    ]}
                    onChange={handlePaymentTypeChange}
                    id="payment-type"
                    value={selectedPaymentType}
                    className="w-full"
                  />
                </div>
              </div>

              <div className="mt-5">
                <label htmlFor="payment-note" className="block mb-1">
                  Payment Note
                </label>
                <CustomInput
                  value={paymentNote}
                  onChange={handlePaymentNoteChange}
                  placeholder="Payment Note"
                  id="payment-note"
                  className="w-full h-20"
                />
              </div>
            </div>
          }
        />
      )}

      {viewPaymentsAlertVisible && (
        <CustomAlert
          open={viewPaymentsAlertVisible}
          onClose={() => setViewPaymentsAlertVisible(false)}
          onSave={() => setViewPaymentsAlertVisible(false)}
          message={
            <div className="p-5">
              <h2 className="text-lg font-bold text-center">View Payments</h2>
              <table className="border-collapse w-full mt-4">
                <tbody>
                  <tr>
                    <th className="p-2 border border-gray-300">Date</th>
                    <th className="p-2 border border-gray-300">Amount</th>
                    <th className="p-2 border border-gray-300">Payment Type</th>
                    <th className="p-2 border border-gray-300">Payment Note</th>
                  </tr>
                  {/* Add payment data here */}
                </tbody>
              </table>
            </div>
          }
        />
      )}

      {paymentReceiveAlertVisible && (
        <CustomAlert
          open={paymentReceiveAlertVisible}
          onClose={() => setPaymentReceiveAlertVisible(false)}
          onSave={() => setPaymentReceiveAlertVisible(false)}
          message={
            <div className="p-5">
              <h2 className="text-lg font-bold text-center">Receive Payment</h2>
              <div className="flex items-center gap-4 mt-5">
                <div className="flex-1">
                  <label htmlFor="date-picker" className="block mb-1">
                    Date
                  </label>
                  <CustomDatePicker
                    selected={selectedDate}
                    onChange={handleDateChange}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="amount" className="block mb-1">
                    Amount
                  </label>
                  <CustomInput
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="Amount"
                    id="amount"
                    className="w-full"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="payment-type" className="block mb-1">
                    Payment Type
                  </label>
                  <CustomDropdown
                    placeholder="Payment Type"
                    options={[
                      { label: 'Card', value: 'card' },
                      { label: 'Cash', value: 'cash' },
                      { label: 'Paytm', value: 'paytm' },
                      { label: 'Finance', value: 'finance' },
                    ]}
                    onChange={handlePaymentTypeChange}
                    id="payment-type"
                    value={selectedPaymentType}
                    className="w-full"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="payment-note" className="block mb-1">
                  Payment Note
                </label>
                <CustomInput
                  value={paymentNote}
                  onChange={handlePaymentNoteChange}
                  placeholder="Payment Note"
                  id="payment-note"
                  className="w-full h-20"
                />
              </div>
            </div>
          }
        />
      )}
    </>
  );
};

export default CustomActionDropdown;
