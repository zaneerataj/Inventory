import React, { useState } from 'react';
import { Home, Download, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../../Dashboard/Dashboard';
import CustomButton from '../../../../CustomComponents/CustomButton/CustomButton';
import CustomDatePicker from '../../../../CustomComponents/CustomDatePicker/CustomDatePicker';
import CustomDropdown from '../../../../CustomComponents/CustomDropDown/CustomDropDown';
import CustomTable from '../../../../CustomComponents/CustomTable/CustomTable';
import { exportToPDF, exportToExcel } from '../../../../utils/exportUtils';
import Header from '../../Dashboard/Header';

interface RowData {
  '#': string;
  'Purchase Invoice Number': string;
  'Payment Date': string;
  'Suppliers ID': string;
  'Suppliers Name	': string;
  'Payment Type': string;
  'Payment Note': string;
  'Paid Payment(₹)': string;
}

interface invoiceData {
  '#': string;
  'Payment Date': string;
  'Suppliers Name': string;
  'Payment Type': string;
  'Payment Note': string;
  'Paid Payment(₹)': string;
}


export default function PurchasePaymentReport() {
  const navigate = useNavigate();
  const [fromDate, setFromDate] = useState<Date | undefined>(undefined);
  const [toDate, setToDate] = useState<Date | undefined>(undefined);
  const [customerName, setCustomerName] = useState('');
  const [paymentType, setPaymentType] = useState('');
  const [selectedView, setSelectedView] = useState<'item' | 'invoice' | null>('item');
  const [data] = useState<RowData[]>([
    { '#': '1', 'Purchase Invoice Number': 'A001', 'Payment Date': '20/09/2024', 'Suppliers ID': 'Adidas', 'Suppliers Name	': 'John-87456564', 'Payment Type': 'paytm', 'Payment Note': 'done', 'Paid Payment(₹)': '1180' },
    { '#': '2', 'Purchase Invoice Number': 'A002', 'Payment Date': '20/09/2024', 'Suppliers ID': 'Puma', 'Suppliers Name	': 'moin-98324244', 'Payment Type': 'cash', 'Payment Note': 'done', 'Paid Payment(₹)': '896' },
  ]);

  const [invoiceData] = useState<invoiceData[]>([
    { '#': '1', 'Payment Date': '20/09/2024', 'Suppliers Name': 'John-87456564', 'Payment Type': 'paytm', 'Payment Note': 'done', 'Paid Payment(₹)': '1180' },
    { '#': '2', 'Payment Date': '20/09/2024', 'Suppliers Name': 'moin-98324244', 'Payment Type': 'cash', 'Payment Note': 'done', 'Paid Payment(₹)': '896' },
  ]);



  const [filteredData, setFilteredData] = useState<RowData[]>([]);

  const itemHeaders: (keyof RowData)[] = ['#', 'Purchase Invoice Number', 'Payment Date', 'Suppliers ID', 'Suppliers Name	', 'Payment Type', 'Payment Note', 'Paid Payment(₹)'];
  const invoiceHeaders: (keyof invoiceData)[] = ['#', 'Payment Date', 'Suppliers Name', 'Payment Type', 'Payment Note', 'Paid Payment(₹)'];


  const inputClass = 'w-full h-10 px-2 rounded-md border border-gray-300';
  const labelClass = 'block text-sm mb-1';

  const handleExport = (type: 'pdf' | 'excel') => {
    const exportData = filteredData.length > 0 ? filteredData : data;
    switch (type) {
      case 'pdf':
        exportToPDF(exportData, itemHeaders);
        break;
      case 'excel':
        exportToExcel(exportData, itemHeaders);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    const filtered = data.filter((row) => {
      if (fromDate && new Date(row['Payment Date']) < fromDate) return false;
      if (toDate && new Date(row['Payment Date']) > toDate) return false;
      if (customerName && row['Suppliers Name	'] !== customerName) return false;
      if (paymentType && row['Payment Type'] !== paymentType) return false;
      return true;
    });

    setFilteredData(filtered);
    console.log('Filtered Data:', filtered);
  };

  const handleViewChange = (view: 'item' | 'invoice' | null) => {
    setSelectedView(view);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-2">
          <span className="text-xl font-bold">Purchase Payment Report</span>
        </div>
        <div className='flex'>
          <div className="flex items-center  cursor-pointer "
            onClick={() => navigate('/')}>
            <Home className="w-4 h-4 ml-6" />
            <span>Home</span>
          </div>
          <span>&gt;</span>
          <div className="flex items-center space-x-1 cursor-pointer text-black-500"
            onClick={() => navigate('/purchase/reports/purchasepaymentreport')}>
            <span>PurcahsePaymentReport</span>
          </div>
        </div>
      </div>

      <div className="m-2 p-4 rounded-md border border-gray-300 mb-6">
        <span className="text-xl mb-4 block">Please Enter Valid Data</span>

        <div className="flex flex-col md:flex-row md:space-x-28">
          <div className="md:w-[40%] mb-2 ml-16">
            <label className={labelClass}>
              From Date<span className="text-red-400">*</span>
            </label>
            <CustomDatePicker
              selected={fromDate}
              onChange={(date: Date | undefined) => setFromDate(date)}
            />
          </div>
          <div className="md:w-[40%] mb-2">
            <label className={labelClass}>
              To Date<span className="text-red-400">*</span>
            </label>
            <CustomDatePicker
              selected={toDate}
              onChange={(date: Date | undefined) => setToDate(date)}
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:space-x-52">

          <div className="w-full md:w-[30%] mb-2 ml-16">
            <label className={labelClass}>
              Customer Name<span className="text-red-400">*</span>
            </label>
            <CustomDropdown
              options={[
                { value: 'John-87456564', label: 'John-87456564' },
                { value: 'moin-98324244', label: 'moin-98324244' },
                { value: 'Moiz-23457890', label: 'Moiz-23457890' },
              ]}
              value={customerName}
              onChange={(value) => setCustomerName(typeof value === 'string' ? value : '')}
              className={inputClass}
              placeholder="Search Name/Code" id={''} />
          </div>
          <div className="w-full md:w-[30%] mb-2 ml-40">
            <label className={labelClass}>
              Payment Type<span className="text-red-400">*</span>
            </label>
            <CustomDropdown
              options={[
                { value: 'Cash', label: 'Cash' },
                { value: 'Card', label: 'Card' },
                { value: 'UPI', label: 'UPI' },
              ]}
              value={paymentType}
              onChange={(value) => setPaymentType(typeof value === 'string' ? value : '')}
              className={inputClass}
              placeholder="All" id={''} />
          </div>
        </div>

        <div className="mt-4 flex justify-center space-x-5">
          <CustomButton type="button" label="Show" onClick={handleSubmit} className='w-56'/>
          <CustomButton type="button" label="Close" onClick={() => navigate('/')} className='w-56'/>
        </div>
      </div>

      {selectedView === 'item' && (
        <div className="p-4 rounded-md border border-gray-300 shadow-md mt-12">
          <div className="flex  ">
            <CustomButton type="button" label="Item Wise Profit" onClick={() => handleViewChange('item')} />
            <CustomButton type="button" label="Invoice Wise Profit" onClick={() => handleViewChange('invoice')} />
          </div>

          <div className="flex  items-center justify-end">
            <CustomDropdown
              options={[
                { value: 'excel', label: ' Excel' },
                { value: 'pdf', label: ' PDF' },
              ]}
              value=""
              onChange={(value) => handleExport(value as 'pdf' | 'excel')}
              id="exportDropdown"
              className="border border-gray-300 rounded-md p-2 flex items-center"
              placeholder="Export"
              icon={<List className="w-4 h-4" />}
            />
          </div>


          <CustomTable
            headers={itemHeaders}
            data={filteredData.length > 0 ? filteredData : data}
            caption=""
            enableCheckbox={false}
            enableRowsPerPage={false}
            enableCopy={false}
            enableExport={false}
            enableColumnVisibility={false}
            enableSearch={false}

            enablePrint={false} currentPage={0} totalPages={0} onPageChange={function (page: number): void {
              throw new Error('Function not implemented.');
            }} pageSize={0} onPageSizeChange={function (size: number): void {
              throw new Error('Function not implemented.');
            }} />
        </div>
      )}

      {selectedView === 'invoice' && (
        <div className="p-4 rounded-md border border-gray-300 shadow-md mt-12">
          <div className="flex  ">
            <CustomButton type="button" label="Purchase Payment" onClick={() => handleViewChange('item')} />
            <CustomButton type="button" label="Suppliers Payment" onClick={() => handleViewChange('invoice')} />
          </div>
          <div className="flex  items-center justify-end">

            <CustomDropdown
              options={[
                { value: 'excel', label: ' Excel' },
                { value: 'pdf', label: ' PDF' },
              ]}
              value=""
              onChange={(value) => handleExport(value as 'pdf' | 'excel')}
              id="exportDropdown"
              className="border border-gray-300 rounded-md p-2 flex items-center"
              placeholder="Export"
              icon={<List className="w-4 h-4" />}
            />
          </div>


          <CustomTable
            headers={invoiceHeaders}
            data={invoiceData}
            caption=""
            enableCheckbox={false}
            enableRowsPerPage={false}
            enableCopy={false}
            enableExport={false}
            enableColumnVisibility={false}
            enableSearch={false}

            enablePrint={false} currentPage={0} totalPages={0} onPageChange={function (page: number): void {
              throw new Error('Function not implemented.');
            }} pageSize={0} onPageSizeChange={function (size: number): void {
              throw new Error('Function not implemented.');
            }} />
        </div>
      )}
    </div>
  );
}

