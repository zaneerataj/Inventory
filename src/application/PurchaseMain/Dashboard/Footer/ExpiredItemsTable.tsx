import React, { FC, useState } from 'react';
import CustomTable from '../../../../CustomComponents/CustomTable/CustomTable';
import { Link } from 'react-router-dom';

const ExpiredItemsTable: FC = () => {
  const headers = [
    '#',
    'Item Code',
    'Item Name',
    'Category Name',
    'Expiry Date',
  ];
  const data = [
    {
      '#': '1',
      'Item Code': 'IT0015',
      'Item Name': 'Colgate',
      'Category Name': 'Health Care',
      'Expiry Date': '2023-02-15',
    },
    {
      '#': '2',
      'Item Code': 'IT0019',
      'Item Name': 'Lifebuoy',
      'Category Name': 'Health Care',
      'Expiry Date': '2023-03-20',
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
      <h2 className="text-center mt-5 font-bold">EXPIRED ITEMS</h2>
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
          to="/purchase/reports/expireditemsreport"
          className="text-orange-500 font-bold no-underline"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default ExpiredItemsTable;
