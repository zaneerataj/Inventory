import React, { FC, useState } from 'react';
import CustomTable from '../../../../CustomComponents/CustomTable/CustomTable';
import { Link } from 'react-router-dom';

const StockAlertTable: FC = () => {
  const headers = ['#', 'Item Name', 'Category Name', 'Stock'];
  const data = [
    {
      '#': '1',
      'Item Name': 'Apple Earpods',
      'Category Name': 'Electronics',
      Stock: '5',
    },
    {
      '#': '2',
      'Item Name': 'Samsung Galaxy Buds',
      'Category Name': 'Electronics',
      Stock: '10',
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const totalPages = Math.ceil(data.length / pageSize);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
  };

  return (
    <div className="m-2 p-2">
      <h2 className="text-center mt-5 font-bold">STOCK ALERT</h2>
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
          to="/purchase/reports/stockreport"
          className="text-orange-500 font-bold no-underline"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default StockAlertTable;
