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
  'Brand': string;
  'Category': string;
  'Unit Price(₹)': string;
  'Tax': string;
  'Sales Price(₹)': string;
  'Current Stock': string;
  'Stock Value': string;
}

interface BrandData {
  '#': string;
  'Brand Name': string;
  'Current Stock': string;
}

interface CategoryData {
  '#': string;
  'Category Name': string;
  'Current Stock': string;
}

export default function StockReport() {
  const navigate = useNavigate();
  const [expireDate, setExpireDate] = useState<Date | undefined>(undefined);
  const [category, setCategory] = useState('');
  const [brand, setBrand] = useState(''); 
  const [selectedView, setSelectedView] = useState<'item' | 'brand' | 'category' | null>('item'); // Default to 'item'
  const [data] = useState<RowData[]>([
    { '#': '1', 'Item Code': 'A001', 'Item Name': 'Item 1', 'Brand': 'Adidas', 'Category': 'Shoes', 'Unit Price(₹)': '1000', 'Tax': '18%', 'Sales Price(₹)': '1180', 'Current Stock': '50', 'Stock Value': '59000' },
    { '#': '2', 'Item Code': 'A002', 'Item Name': 'Item 2', 'Brand': 'Puma', 'Category': 'Shoes', 'Unit Price(₹)': '800', 'Tax': '12%', 'Sales Price(₹)': '896', 'Current Stock': '30', 'Stock Value': '26880' },
  ]);

  const [brandData] = useState<BrandData[]>([
    { '#': '1', 'Brand Name': 'Adidas', 'Current Stock': '50' },
    { '#': '2', 'Brand Name': 'Puma', 'Current Stock': '30' },
  ]);

  const [categoryData] = useState<CategoryData[]>([
    { '#': '1', 'Category Name': 'Shoes', 'Current Stock': '80' },
  ]);

  const [filteredData, setFilteredData] = useState<RowData[]>([]);

  const itemHeaders: (keyof RowData)[] = ['#', 'Item Code', 'Item Name', 'Brand', 'Category', 'Unit Price(₹)', 'Tax', 'Sales Price(₹)', 'Current Stock', 'Stock Value'];
  const brandHeaders: (keyof BrandData)[] = ['#', 'Brand Name', 'Current Stock'];
  const categoryHeaders: (keyof CategoryData)[] = ['#', 'Category Name', 'Current Stock'];


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
      if (category && row['Category'] !== category) return false;
      if (brand && row['Brand'] !== brand) return false; 
      if (expireDate && new Date(row['Current Stock']) > expireDate) return false;
      return true;
    });

    setFilteredData(filtered);
    console.log('Filtered Data:', filtered);
  };

  const handleViewChange = (view: 'item' | 'brand' | 'category' | null) => {
    setSelectedView(view);
  };

  return (
    <div>
      <Header/>
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-2">
          <span className="text-xl font-bold">Stock Report</span>
        </div>
        <div className='flex '>
  <div className="flex items-center  cursor-pointer "
  onClick={() => navigate('/')}>
  <Home className="w-4 h-4 ml-6" />
  <span>Home</span>
</div>
<span>&gt;</span>
<div className="flex items-center space-x-1 cursor-pointer text-black-500"
  onClick={() => navigate('/purchase/reports/stockreport')}>
  <span>StockReport</span>
</div>
</div>
      </div>

      <div className="m-2 p-4 rounded-md border border-gray-300">
        <span className="text-xl mb-4 block">Please Enter Valid Data</span>

        <div className="flex flex-col md:flex-row md:space-x-28">
          <div className="w-full md:w-[35%] mb-2 ml-16">
            <label className={labelClass}>
             Brand<span className="text-red-400">*</span>
            </label>
            <CustomDropdown
              options={[
                { value: 'Adidas', label: 'Adidas' },
                { value: 'Puma', label: 'Puma' },
                { value: 'Nike', label: 'Nike' },
                { value: 'Reebok', label: 'Reebok' },
              ]}
              value={brand}
              onChange={(value) => setBrand(typeof value === 'string' ? value : '')}
              id="brand"
              className={inputClass}
              placeholder="Search Name/Code"
            />
          </div>
          <div className="w-full md:w-[35%] mb-2 ml-16">
            <label className={labelClass}>
              Category<span className="text-red-400">*</span>
            </label>
            <CustomDropdown
              options={[
                { value: 'Shoes', label: 'Shoes' },
                { value: 'Clothes', label: 'Clothes' },
                { value: 'Accessories', label: 'Accessories' },
              ]}
              value={category}
              onChange={(value) => setCategory(typeof value === 'string' ? value : '')}
              id="category"
              className={inputClass}
              placeholder="Search Name/Code"
            />
          </div>
        </div>

        <div className="mt-4 flex justify-center space-x-5">
          <CustomButton type="button" label="Show" onClick={handleSubmit} className='w-56'/>
          <CustomButton type="button" label="Close" onClick={() => navigate('/')} className='w-56'/>
        </div>
      </div>
       {selectedView === 'item' && (
        <div className="p-4 rounded-md border border-gray-300 shadow-md mt-12 mb-6">
          <div className="flex  ">
        <CustomButton type="button" label="Item Wise" onClick={() => handleViewChange('item')} />
        <CustomButton type="button" label="Brand Wise" onClick={() => handleViewChange('brand')} />
        <CustomButton type="button" label="Category Wise" onClick={() => handleViewChange('category')} />
      </div>
          <div className="w-full md:w-[35%] mb-2 ml-12">
            <label className={labelClass}>
             Item Name<span className="text-red-400">*</span>
            </label>
            <CustomDropdown
              options={[
                { value: 'Adidas', label: 'Adidas' },
                { value: 'Puma', label: 'Puma' },
              ]}
              value={brand}
              onChange={(value) => setBrand(typeof value === 'string' ? value : '')}
              id="brand"
              className={inputClass}
              placeholder="Search Name/Code"
            />
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
            enableSearch = {false}

            enablePrint={false} currentPage={0} totalPages={0} onPageChange={function (page: number): void {
              throw new Error('Function not implemented.');
            } } pageSize={0} onPageSizeChange={function (size: number): void {
              throw new Error('Function not implemented.');
            } }        />
        </div>
      )}

      {selectedView === 'brand' && (
        <div className="p-4 rounded-md border border-gray-300 shadow-md mt-12">
           <div className="flex justify-start ">
        <CustomButton type="button" label="Item Wise" onClick={() => handleViewChange('item')} />
        <CustomButton type="button" label="Brand Wise" onClick={() => handleViewChange('brand')} />
        <CustomButton type="button" label="Category Wise" onClick={() => handleViewChange('category')} />
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
            headers={brandHeaders}
            data={brandData} 
            caption=""
            enableCheckbox={false}
            enableRowsPerPage={false}
            enableCopy={false}
            enableExport={false}
            enableColumnVisibility={false}
            enableSearch = {false}

            enablePrint={false} currentPage={0} totalPages={0} onPageChange={function (page: number): void {
              throw new Error('Function not implemented.');
            } } pageSize={0} onPageSizeChange={function (size: number): void {
              throw new Error('Function not implemented.');
            } }        />
        </div>
      )}

      {selectedView === 'category' && (
        <div className="p-4 rounded-md border border-gray-300 shadow-md mt-12">
           <div className="flex  ">
        <CustomButton type="button" label="Item Wise" onClick={() => handleViewChange('item')} />
        <CustomButton type="button" label="Brand Wise" onClick={() => handleViewChange('brand')} />
        <CustomButton type="button" label="Category Wise" onClick={() => handleViewChange('category')} />
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
            headers={categoryHeaders}
            data={categoryData}
            caption=""
            enableCheckbox={false}
            enableRowsPerPage={false}
            enableCopy={false}
            enableExport={false}
            enableColumnVisibility={false}
            enableSearch={false} currentPage={0} totalPages={0} onPageChange={function (page: number): void {
              throw new Error('Function not implemented.');
            } } pageSize={0} onPageSizeChange={function (size: number): void {
            } }
                    />
        </div>
      )}
    </div>
  );
}