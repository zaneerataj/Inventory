import React, { FC } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../components/ui/table';
import CustomButton from '../CustomButton/CustomButton';

interface CustomTableProps {
  headers: Array<string>;
  data: Array<Record<string, any>>;
  caption?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  onPageSizeChange: (size: number) => void;
  pageSize: number; // Number of rows per page
}

const CustomTable: FC<CustomTableProps> = ({
  headers,
  data,
  caption,
  currentPage,
  totalPages,
  onPageChange,
  pageSize,
}) => {
  // Calculate the start and end index for the current page
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div>
      <Table>
        {caption && <TableCaption>{caption}</TableCaption>}
        <TableHeader>
          <TableRow>
            {headers.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {headers.map((header, colIndex) => (
                <TableCell key={colIndex} className={header === 'Amount' ? 'text-right' : ''}>
                  {row[header]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <CustomButton
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          label='<'
          // className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        />
        <div className="flex items-center space-x-2">
          <span>Page {currentPage} of {totalPages}</span>
        </div>
        <CustomButton
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          label='>'
          // className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
          />
      </div>
    </div>
  );
};

export default CustomTable;
