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
  'Item Code': string;
  'Item Name': string;
  'Lot Number': string;
  'Expired Date': string;
  'Stock': string;
}

export default function ExpiredItemsReport() {
  const navigate = useNavigate();
  const [expireDate, setExpireDate] = useState<Date | undefined>(undefined);
  const [category, setCategory] = useState('');
  const [data] = useState<RowData[]>([
    { '#': '1', 'Item Code': 'A001', 'Item Name': 'Item 1', 'Lot Number': 'L123', 'Expired Date': '2024-09-01', 'Stock': '50' },
    { '#': '2', 'Item Code': 'A002', 'Item Name': 'Item 2', 'Lot Number': 'L124', 'Expired Date': '2024-10-01', 'Stock': '30' },
  ]);
  const [filteredData, setFilteredData] = useState<RowData[]>([]);

  const headers: (keyof RowData)[] = ['#', 'Item Code', 'Item Name', 'Lot Number', 'Expired Date', 'Stock'];

  const inputClass = 'w-full h-10 px-2 rounded-md border border-gray-300';
  const labelClass = 'block text-sm mb-1';

  const handleExport = (type: 'pdf' | 'excel') => {
    const exportData = filteredData.map(row =>
      headers.reduce((acc, header) => {
        acc[header] = row[header];
        return acc;
      }, {} as Record<string, any>)
    );
    switch (type) {
      case 'pdf':
        exportToPDF(exportData, headers);
        break;
      case 'excel':
        exportToExcel(exportData, headers);
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    const filtered = data.filter((row) => {
      if (category && row['Item Name'] !== category) return false;
      if (expireDate && new Date(row['Expired Date']) > expireDate) return false;
      return true;
    });

    setFilteredData(filtered);
    console.log('Filtered Data:', filtered);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-2">
          <span className="text-xl font-bold">Expired Items Report</span>
        </div>
        <div className='flex '>
          <div className="flex items-center  cursor-pointer "
            onClick={() => navigate('/')}>
            <Home className="w-4 h-4 ml-6" />
            <span>Home</span>
          </div>
          <span>&gt;</span>
          <div className="flex items-center space-x-1 cursor-pointer text-black-500"
            onClick={() => navigate('/purchase/reports/expireditemsreport')}>
            <span>ExpiredItemsReport</span>
          </div>
        </div>
      </div>

      <div className="m-2 p-4 rounded-md border border-gray-300">
        <span className="text-xl mb-4 block">Please Enter Valid Data</span>

        <div className="flex flex-col md:flex-row md:space-x-28">
          <div className="w-full md:w-[35%] mb-2 ml-16">
            <label className={labelClass}>
              Item Name<span className="text-red-400">*</span>
            </label>
            <CustomDropdown
              options={[
                { value: 'Category 1', label: 'Category 1' },
                { value: 'Category 2', label: 'Category 2' },
              ]}
              value={category}
              onChange={(value) => setCategory(typeof value === 'string' ? value : '')}
              id="category"
              className={inputClass}
              placeholder="Search Name/Code"
            />
          </div>
          <div className="md:w-[40%] mb-2">
            <label className={labelClass}>
              To Date<span className="text-red-400">*</span>
            </label>
            <CustomDatePicker
              selected={expireDate}
              onChange={(date: Date | undefined) => setExpireDate(date)}
            />
          </div>
        </div>

        <div className="mt-4 flex justify-center space-x-5">
          <CustomButton type="button" label="Show" onClick={handleSubmit} className='w-56' />
          <CustomButton type="button" label="Close" onClick={() => navigate('/')} className='w-56' />
        </div>
      </div>

      <div className="p-4 rounded-md border border-gray-300 shadow-md mt-12 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-xl">Record Table</span>

          <CustomDropdown
            options={[
              { value: 'excel', label: 'Export as Excel' },
              { value: 'pdf', label: 'Export as PDF' },
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
          headers={headers}
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
    </div>
  );
}
