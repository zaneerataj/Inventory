import React, { FC, useState } from 'react';
import CustomTable from '../../CustomComponents/CustomTable/CustomTable';
import { Link } from 'react-router-dom'; // Import the Link component

const CustomTable1: FC = () => {
  const headers = ['Sl.No', 'Item Name', 'Item Sales Price'];

  const [data, setData] = useState([
    {
      'Sl.No': '1',
      'Item Name': 'Apple Earpods',
      'Item Sales Price': '₹ 13,200.00',
    },
    {
      'Sl.No': '2',
      'Item Name': 'Samsung Galaxy Buds',
      'Item Sales Price': '₹ 9,500.00',
    },
    {
      'Sl.No': '3',
      'Item Name': 'Sony Headphones',
      'Item Sales Price': '₹ 15,000.00',
    },
    {
      'Sl.No': '4',
      'Item Name': 'JBL Speaker',
      'Item Sales Price': '₹ 6,500.00',
    },
    {
      'Sl.No': '5',
      'Item Name': 'Bose Soundlink',
      'Item Sales Price': '₹ 20,000.00',
    },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [selectedCustomers, setSelectedCustomers] = useState<string[]>([]);

  const totalPages = Math.ceil(data.length / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
  };

  const handleRowSelect = (selectedIds: string[]) => {
    setSelectedCustomers(selectedIds);
  };

  return (
    <div className="m-2 p-2">
      <h2 className="text-center mt-5 font-bold">RECENTLY ADDED ITEMS</h2>
      <CustomTable
        headers={headers}
        data={data}
        caption=""
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
        enableCheckbox={false}
        onRowSelect={handleRowSelect}
        enableRowsPerPage={false}
        enableCopy={false}
        enableExport={false}
        enableColumnVisibility={false}
        enablePrint={false}
        enableSearch={false}
        enablePagination={false} // Disable pagination if not needed
        enableDelete={false}
      />
      <div className="text-center mt-5">
        <Link
          to="/purchase/items/itemslist"
          className="text-orange-500 font-bold no-underline"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default CustomTable1;
