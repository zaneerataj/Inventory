// import React, { FC, useState, useMemo } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from '../../../components/ui/table';
// import CustomButton from '../CustomButton/CustomButton';
// import CustomDropdown from '../CustomDropDown/CustomDropDown';
// import { exportToCSV, exportToPDF, exportToExcel } from '../../utils/exportUtils';
// import CustomInput from '../CustomInput/CustomInput';

// interface CustomTableProps {
//   headers: Array<string>;
//   data: Array<Record<string, any>>;
//   caption?: string;
//   currentPage: number;
//   totalPages: number;
//   onPageChange: (page: number) => void;
//   pageSize: number;
//   onPageSizeChange: (size: number) => void;
//   enableCheckbox?: boolean;
//   enableRowsPerPage?: boolean;
//   enableCopy?: boolean;
//   enableDelete?: boolean;
//   enableExport?: boolean;
//   enableColumnVisibility?: boolean;
//   enablePrint?: boolean;
//   enableSearch?: boolean;
//   onRowSelect?: (selectedIds: string[]) => void;
//   onDelete?: (ids: string[]) => void;
// }

// const CustomTable: FC<CustomTableProps> = ({
//   headers,
//   data,
//   caption,
//   currentPage,
//   totalPages,
//   onPageChange,
//   pageSize,
//   onPageSizeChange,
//   enableCheckbox = false,
//   enableRowsPerPage = true,
//   enableCopy = true,
//   enableDelete = false,
//   enableExport = true,
//   enableColumnVisibility = true,
//   enablePrint = true,
//   enableSearch = true,
//   onRowSelect,
//   onDelete,
// }) => {
//   const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
// const [visibleColumns, setVisibleColumns] = useState(headers);
// const [searchQuery, setSearchQuery] = useState('');
// const [tableData, setTableData] = useState<Record<string, any>[]>([]);

//   const filteredData = useMemo(() => {
//     if (!searchQuery) return data;
//     return data.filter(row =>
//       visibleColumns.some(header =>
//         String(row[header]).toLowerCase().includes(searchQuery.toLowerCase())
//       )
//     );
//   }, [data, searchQuery, visibleColumns]);

//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = startIndex + pageSize;
//   const currentData = filteredData.slice(startIndex, endIndex);

//   const handleRowSelection = (rowIndex: number) => {
//     const updatedSelection = new Set(selectedRows);
//     if (updatedSelection.has(rowIndex)) {
//       updatedSelection.delete(rowIndex);
//     } else {
//       updatedSelection.add(rowIndex);
//     }
//     setSelectedRows(updatedSelection);

//     if (onRowSelect) {
//       const selectedIds = Array.from(updatedSelection).map(index => data[index]['Suppliers ID']);
//       onRowSelect(selectedIds);
//     }
//   };

//   const handleSelectAll = () => {
//     if (selectedRows.size === currentData.length) {
//       setSelectedRows(new Set());
//     } else {
//       const allRowIndexes = new Set<number>(
//         currentData.map((_, index) => startIndex + index)
//       );
//       setSelectedRows(allRowIndexes);

//       if (onRowSelect) {
//         const selectedIds = Array.from(allRowIndexes).map(index => data[index]['Suppliers ID']);
//         onRowSelect(selectedIds);
//       }
//     }
//   };

//   const handleColumnVisibilityChange = (value: string | number | (string | number)[]) => {
//     if (Array.isArray(value)) {
//       setVisibleColumns(value as string[]);
//     } else {
//       setVisibleColumns([value.toString()]);
//     }
//   };

//   const handleExport = (type: 'csv' | 'pdf' | 'excel') => {
//     const exportData = filteredData.map(row =>
//       visibleColumns.reduce((acc, header) => {
//         acc[header] = row[header];
//         return acc;
//       }, {} as Record<string, any>)
//     );
//     switch (type) {
//       case 'csv':
//         exportToCSV(exportData, visibleColumns);
//         break;
//       case 'pdf':
//         exportToPDF(exportData, visibleColumns);
//         break;
//       case 'excel':
//         exportToExcel(exportData, visibleColumns);
//         break;
//       default:
//         break;
//     }
//   };

//   const handleCopyToClipboard = () => {
//     const text = currentData
//       .map(row => visibleColumns.map(header => row[header]).join('\t'))
//       .join('\n');
//     navigator.clipboard.writeText(text);
//     alert('Copied to clipboard');
//   };

//   const handleDelete = () => {
//     if (selectedRows.size === 0) {
//       alert('No rows selected for deletion.');
//       return;
//     }

//     const confirmDelete = window.confirm('Are you sure you want to delete the selected rows?');

//     if (confirmDelete) {
//       if (onDelete) {
//         const selectedIds = Array.from(selectedRows).map(index => tableData[index]['Customers ID']);

//         onDelete(selectedIds);

//         setSelectedRows(new Set());

//         const newTableData = tableData.filter((row, index) => !selectedRows.has(index));
//         setTableData(newTableData);
//       }
//     }
//   };

//   return (
//     <div>
//       <div className="flex justify-between items-center mb-6">
//       {enableRowsPerPage && (
//             <CustomDropdown
//               id="rows-per-page"
//               value={pageSize}
//               options={[10, 20, 30, 50].map(size => ({ value: size, label: `${size} rows` }))}
//               onChange={value => onPageSizeChange(Number(value))}
//               className="ml-2"
//             />
//           )}
//         <div className="flex items-center space-x-2 flex-grow ml-32">
//         {enableDelete && (
//           <CustomButton label="Delete" onClick={handleDelete} className="ml-2" />
//         )}
//           {enableCopy && enableExport && enablePrint && (
//             <div className="flex items-center space-x-2 ml-4">
//               {enableCopy && (
//                 <CustomButton label="Copy" onClick={handleCopyToClipboard} />
//               )}
//               {enableExport && (
//                 <>
//                   <CustomButton label="Excel" onClick={() => handleExport('excel')} />
//                   <CustomButton label="CSV" onClick={() => handleExport('csv')} />
//                   <CustomButton label="PDF" onClick={() => handleExport('pdf')} />
//                 </>
//               )}
//               {enablePrint && (
//                 <CustomButton label="Print" onClick={() => window.print()} />
//               )}
//             </div>
//           )}
//           {enableColumnVisibility && (
//             <CustomDropdown
//               id="column-visibility"
//               value={visibleColumns}
//               options={headers.map(header => ({
//                 value: header,
//                 label: header,
//                 checked: visibleColumns.includes(header),
//               }))}
//               onChange={handleColumnVisibilityChange}
//               multiple
//               className="ml-2"
//             />
//           )}
//         </div>
//         {enableSearch && (
//           <CustomInput
//             type="text"
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={e => setSearchQuery(e.target.value)}
//             className="px-4 py-2 border rounded-md w-[35%] ml-4"/>
//         )}
//       </div>

//       <Table>
//         {caption && <TableCaption>{caption}</TableCaption>}
//         <TableHeader>
//           <TableRow>
//             {enableCheckbox && (
//               <TableHead>
//                 <input
//                   type="checkbox"
//                   checked={selectedRows.size === currentData.length}
//                   onChange={handleSelectAll}
//                 />
//               </TableHead>
//             )}
//             {visibleColumns.map((header, index) => (
//               <TableHead key={index}>{header}</TableHead>
//             ))}
//           </TableRow>
//         </TableHeader>
//         <TableBody>
//           {currentData.map((row, rowIndex) => (
//             <TableRow key={rowIndex}>
//               {enableCheckbox && (
//                 <TableCell>
//                   <input
//                     type="checkbox"
//                     checked={selectedRows.has(startIndex + rowIndex)}
//                     onChange={() => handleRowSelection(startIndex + rowIndex)}
//                   />
//                 </TableCell>
//               )}
//               {visibleColumns.map((header, colIndex) => (
//                 <TableCell key={colIndex} className={header === 'Amount' ? 'text-right' : ''}>
//                   {row[header]}
//                 </TableCell>
//               ))}
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>

//       <div className="flex justify-between items-center mt-4">
//         <CustomButton
//           onClick={() => onPageChange(currentPage - 1)}
//           disabled={currentPage === 1}
//           label="<"
//           className="ml-2"
//         />
//         <div className="flex items-center space-x-2">
//           <span>Page {currentPage} of {totalPages}</span>
//         </div>
//         <CustomButton
//           onClick={() => onPageChange(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           label=">"
//           className="ml-2"
//         />
//       </div>
//     </div>
//   );
// };

// export default CustomTable;
// function setData(newData: Record<string, any>[]) {
//   throw new Error('Function not implemented.');
// }

import React, { FC, useState, useMemo } from 'react';
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
import CustomDropdown from '../CustomDropDown/CustomDropDown';
import {
  exportToCSV,
  exportToPDF,
  exportToExcel,
} from '../../utils/exportUtils';
import CustomInput from '../CustomInput/CustomInput';

interface CustomTableProps {
  headers: Array<string>;
  data: Array<Record<string, any>>;
  caption?: string;
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageSize: number;
  onPageSizeChange: (size: number) => void;
  enableCheckbox?: boolean;
  enableRowsPerPage?: boolean;
  enableCopy?: boolean;
  enableDelete?: boolean;
  enableExport?: boolean;
  enableColumnVisibility?: boolean;
  enablePrint?: boolean;
  enableSearch?: boolean;
  enablePagination?: boolean;
  onRowSelect?: (selectedIds: string[]) => void;
  onDelete?: (ids: string[]) => void;
}

const CustomTable: FC<CustomTableProps> = ({
  headers,
  data,
  caption,
  currentPage,
  totalPages,
  onPageChange,
  pageSize,
  onPageSizeChange,
  enableCheckbox = false,
  enableRowsPerPage = true,
  enableCopy = true,
  enableDelete = false,
  enableExport = true,
  enableColumnVisibility = true,
  enablePrint = true,
  enableSearch = true,
  enablePagination = true,
  onRowSelect,
  onDelete,
}) => {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [visibleColumns, setVisibleColumns] = useState(headers);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData = useMemo(() => {
    if (!searchQuery) return data;
    return data.filter((row) =>
      visibleColumns.some((header) =>
        String(row[header]).toLowerCase().includes(searchQuery.toLowerCase()),
      ),
    );
  }, [data, searchQuery, visibleColumns]);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = filteredData.slice(startIndex, endIndex);

  const handleRowSelection = (rowIndex: number) => {
    const updatedSelection = new Set(selectedRows);
    if (updatedSelection.has(rowIndex)) {
      updatedSelection.delete(rowIndex);
    } else {
      updatedSelection.add(rowIndex);
    }
    setSelectedRows(updatedSelection);

    if (onRowSelect) {
      const selectedIds = Array.from(updatedSelection).map(
        (index) => data[index]['Suppliers ID'],
      );
      onRowSelect(selectedIds);
    }
  };

  const handleSelectAll = () => {
    if (selectedRows.size === currentData.length) {
      setSelectedRows(new Set());
    } else {
      const allRowIndexes = new Set<number>(
        currentData.map((_, index) => startIndex + index),
      );
      setSelectedRows(allRowIndexes);

      if (onRowSelect) {
        const selectedIds = Array.from(allRowIndexes).map(
          (index) => data[index]['Suppliers ID'],
        );
        onRowSelect(selectedIds);
      }
    }
  };

  const handleColumnVisibilityChange = (
    value: string | number | (string | number)[],
  ) => {
    if (Array.isArray(value)) {
      setVisibleColumns(value as string[]);
    } else {
      setVisibleColumns([value.toString()]);
    }
  };

  const handleExport = (type: 'csv' | 'pdf' | 'excel') => {
    const exportData = filteredData.map((row) =>
      visibleColumns.reduce(
        (acc, header) => {
          acc[header] = row[header];
          return acc;
        },
        {} as Record<string, any>,
      ),
    );
    switch (type) {
      case 'csv':
        exportToCSV(exportData, visibleColumns);
        break;
      case 'pdf':
        exportToPDF(exportData, visibleColumns);
        break;
      case 'excel':
        exportToExcel(exportData, visibleColumns);
        break;
      default:
        break;
    }
  };

  const handleCopyToClipboard = () => {
    const text = currentData
      .map((row) => visibleColumns.map((header) => row[header]).join('\t'))
      .join('\n');
    navigator.clipboard.writeText(text);
    alert('Copied to clipboard');
  };

  const handleDelete = () => {
    if (selectedRows.size === 0) {
      alert('No rows selected for deletion.');
      return;
    }

    const confirmDelete = window.confirm(
      'Are you sure you want to delete the selected rows?',
    );

    if (confirmDelete) {
      if (onDelete) {
        const selectedIds = Array.from(selectedRows).map(
          (index) => data[index]['Customers ID'],
        );
        onDelete(selectedIds);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        {enableRowsPerPage && (
          <CustomDropdown
            id="rows-per-page"
            value={pageSize}
            options={[10, 20, 30, 50].map((size) => ({
              value: size,
              label: `${size} rows `,
            }))}
            onChange={(value) => onPageSizeChange(Number(value))}
            className="ml-2 w-8"
            style={{ width: 150 }}
          />
        )}
        <div className="flex items-center space-x-2 flex-grow ml-32">
          {enableDelete && (
            <CustomButton
              label="Delete"
              onClick={handleDelete}
              className="ml-2"
            />
          )}
          {enableCopy && enableExport && enablePrint && (
            <div className="flex items-center space-x-2 ml-4">
              {enableCopy && (
                <CustomButton label="Copy" onClick={handleCopyToClipboard} />
              )}
              {enableExport && (
                <>
                  <CustomButton
                    label="Excel"
                    onClick={() => handleExport('excel')}
                  />
                  <CustomButton
                    label="CSV"
                    onClick={() => handleExport('csv')}
                  />
                  <CustomButton
                    label="PDF"
                    onClick={() => handleExport('pdf')}
                  />
                </>
              )}
              {enablePrint && (
                <CustomButton label="Print" onClick={() => window.print()} />
              )}
            </div>
          )}
          {enableColumnVisibility && (
            <CustomDropdown
              id="column-visibility"
              value={visibleColumns}
              options={headers.map((header) => ({
                value: header,
                label: header,
                checked: visibleColumns.includes(header),
              }))}
              onChange={handleColumnVisibilityChange}
              multiple
              className="ml-2"
            />
          )}
        </div>
        {enableSearch && (
          <CustomInput
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 border rounded-md w-[35%] ml-4"
          />
        )}
      </div>

      <Table>
        {caption && <TableCaption>{caption}</TableCaption>}
        <TableHeader>
          <TableRow>
            {enableCheckbox && (
              <TableHead>
                <input
                  type="checkbox"
                  checked={selectedRows.size === currentData.length}
                  onChange={handleSelectAll}
                />
              </TableHead>
            )}
            {visibleColumns.map((header, index) => (
              <TableHead key={index} className="text-orange-500 font-extrabold">
                {' '}
                {/* Set header text color */}
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {currentData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {enableCheckbox && (
                <TableCell>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="hidden"
                      checked={selectedRows.has(startIndex + rowIndex)}
                      onChange={() => handleRowSelection(startIndex + rowIndex)}
                    />
                    <span className="w-4 h-4 border-2 border-gray-400 rounded-sm flex items-center justify-center transition-colors duration-200">
                      {selectedRows.has(startIndex + rowIndex) && (
                        <span className="w-2 h-2 bg-orange-500 rounded-full" />
                      )}
                    </span>
                  </label>
                </TableCell>
              )}

              {visibleColumns.map((header, colIndex) => (
                <TableCell
                  key={colIndex}
                  className={header === 'Amount' ? 'text-right' : ''}
                >
                  {row[header]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {enablePagination && ( // Conditionally render pagination controls
        <div className="flex justify-between items-center mt-4">
          <CustomButton
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            label="<"
            className="ml-2"
          />
          <div className="flex items-center space-x-2">
            <span>
              Page {currentPage} of {totalPages}
            </span>
          </div>
          <CustomButton
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            label=">"
            className="ml-2"
          />
        </div>
      )}
    </div>
  );
};

export default CustomTable;
