// src/utils/exportUtils.ts

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { utils, writeFile } from 'xlsx';

export const exportToCSV = (data: Array<Record<string, any>>, headers: string[], filename = 'data.csv') => {
  const worksheet = utils.json_to_sheet(data, { header: headers });
  const csv = utils.sheet_to_csv(worksheet);

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export const exportToExcel = (data: Array<Record<string, any>>, headers: string[], filename = 'data.xlsx') => {
  const worksheet = utils.json_to_sheet(data, { header: headers });
  const workbook = utils.book_new();
  utils.book_append_sheet(workbook, worksheet, 'Sheet1');
  writeFile(workbook, filename);
};

export const exportToPDF = (data: Array<Record<string, any>>, headers: string[], filename = 'data.pdf') => {
  const doc = new jsPDF();
  const tableData = data.map(row => headers.map(header => row[header]));

  // Use autoTable plugin to create the table in the PDF
  autoTable(doc, {
    head: [headers],
    body: tableData,
  });

  doc.save(filename);
};
