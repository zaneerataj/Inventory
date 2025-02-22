import React, { useState } from 'react';
import CustomTable from '../../../../CustomComponents/CustomTable/CustomTable';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../../../../CustomComponents/CustomButton/CustomButton';
import {
  BriefcaseBusiness,
  Home,
  Hourglass,
  Plus,
  RefreshCcw,
  SquarePlus,
} from 'lucide-react';
import CustomDropdown from '../../../../CustomComponents/CustomDropDown/CustomDropDown';
import CustomActionDropdown from '../../../../CustomComponents/CustomActionDropdown/CustomActionDropdown';
import Header from '../../Dashboard/Header';
import {
  ShoppingCart,
  BadgeCent,
  Percent,
  Expand,
  ArrowRight,
} from 'lucide-react';
import { CardWithForm } from '../../Dashboard/Cards/Card';
import { Link } from 'react-router-dom';

const PurchaseList: React.FC = () => {
  const navigate = useNavigate();
  const options = [
    { label: 'Edit', value: 'edit' },
    // { label: 'Receive Due Payments', value: 'receive-payments' },
    // { label: 'Pay Return Due', value: 'pay-return' },
    { label: 'View Purchase', value: 'view-purchase' },
    { label: 'Pdf', value: 'pdf' },
    { label: 'Print', value: 'print' },
    { label: 'Delete', value: 'delete' },
  ];
  interface CardData {
    title: string;
    value: string;
    icon: React.ReactNode;
    description: string;
    amount: string;
    moreInfo: string;
    moreInfoLink: string;
  }

  const cardData: CardData[] = [
    {
      title: 'Total Invoices',
      value: '10',
      icon: <BriefcaseBusiness />,
      description: '',
      amount: '',
      moreInfo: 'More info',
      moreInfoLink: '/purchase/reports/purchasereport',
    },
    {
      title: 'Total Invoices Amount',
      value: '310,475.00',
      icon: <SquarePlus />,
      description: '',
      amount: '',
      moreInfo: 'More info',
      moreInfoLink: '/purchase/reports/purchasereport',
    },
    {
      title: 'Total Paid Amount',
      value: '3,331.00',
      icon: <RefreshCcw />,
      description: 'Total Paid Amount',
      amount: '',
      moreInfo: 'More info',
      moreInfoLink: '/purchase/reports/purchasepaymentreport',
    },
    {
      title: 'Total Purchase Due',
      value: '307,144.00',
      icon: <Hourglass />,
      description: '',
      amount: '',
      moreInfo: 'More info',
      moreInfoLink: '/purchase/reports/purchasepaymentreport',
    },
  ];

  const headers = [
    'Purchase Date',
    'Purchase Code',
    'Purchase Status',
    'Reference No',
    'Suppliers Name',
    'Total',
    'Paid Payment',
    'Due',
    'Payment Status',
    'Created by',
    'Action',
  ];

  // Sample data for the table
  const [data, setData] = useState([
    {
      'Purchase Date': '20/07/2020',
      'Purchase Code': 'PS0001',
      'Purchase Status': 'Paid',
      'Reference No': '12344',
      'Suppliers Name': 'waseem',
      Total: '5000',
      'Paid Payment': '4000',
      Due: '300',
      'Payment Status': 'done',
      'Created by': 'self',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Purchase Date': '18/07/2020',
      'Purchase Code': 'PS0002',
      'Purchase Status': 'Paid',
      'Reference No': '123333',
      'Suppliers Name': 'moiz',
      Total: '5000',
      'Paid Payment': '4000',
      Due: '300',
      'Payment Status': 'done',
      'Created by': 'self',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    {
      'Purchase Date': '01/07/2020',
      'Purchase Code': 'PS0003',
      'Purchase Status': 'Paid',
      'Reference No': '12999',
      'Suppliers Name': 'inam',
      Total: '5000',
      'Paid Payment': '4000',
      Due: '300',
      'Payment Status': 'done',
      'Created by': 'self',
      Action: (
        <CustomActionDropdown
          options={options}
          id={''}
          onChange={function (
            value: string | number | (string | number)[],
          ): void {
            throw new Error('Function not implemented.');
          }}
          data={undefined}
          onDelete={function (id: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      ),
    },
    // ... rest of the data
  ]);

  // State management for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalPages = Math.ceil(data.length / pageSize);
  const [selectedPurchase, setSelectedPurchase] = useState<string[]>([]);

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Handle page size change
  const handlePageSizeChange = (size: number) => {
    setPageSize(size);
  };

  const handleRowSelect = (selectedIds: string[]) => {
    setSelectedPurchase(selectedIds);
  };

  // Handle deletion of selected Purchase
  const handleDelete = () => {
    const filteredData = data.filter(
      (purchase) => !selectedPurchase.includes(purchase['Purchase Code']),
    );
    setData(filteredData);
    setSelectedPurchase([]); // Clear selection after deletion
  };

  const handleMoreInfoClick = (link: string) => {
    navigate(link);
  };

  return (
    <div>
      {/* Dashboard component */}
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-2">
          <span className="text-xl font-bold">Purchase List</span>
          <span className="text-gray-500">View/Search Purchase</span>
        </div>
        <div className="flex">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/')}
          >
            <Home className="w-4 h-4 ml-6" />
            <span>Home</span>
          </div>
          <span>&gt;</span>
          <div
            className="flex items-center space-x-1 cursor-pointer text-black-500"
            onClick={() => navigate('/purchase/Purchase/PurchaseList')}
          >
            <span>Purchase List</span>
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mb-10 space-x-5">
        {cardData.map((card, index) => (
          <CardWithForm
            key={index}
            heading={card.title}
            CurrencySign="$"
            amount={parseFloat(card.value)}
            icon={card.icon}
          >
            <div className="flex items-center">
              <Link to={card.moreInfoLink} className=" cursor-pointer">
                {card.moreInfo}
              </Link>
              <ArrowRight className="w-4 h-4 ml-2" />
            </div>
          </CardWithForm>
        ))}
      </div>
      <div className="p-4 rounded-md border border-gray-300 shadow-md mb-6">
        <div className="flex justify-between items-center p-4">
          <span className="text-xl font-bold">Purchase List</span>
          <CustomButton
            className="flex items-center space-x-2 font-bold py-2 px-4 rounded"
            onClick={() => navigate('/purchase/Purchase/NewPurchase')}
          >
            <Plus className="w-4 h-4" />
            <span>New Purchase</span>
          </CustomButton>
        </div>

        {/* CustomTable component */}
        <CustomTable
          headers={headers}
          data={data}
          caption="A list of your recent Purchase."
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          pageSize={pageSize}
          onPageSizeChange={handlePageSizeChange}
          enableCheckbox={true}
          onRowSelect={(selectedIds: string[]) =>
            setSelectedPurchase(selectedIds)
          }
          enableRowsPerPage={true}
          enableCopy={true}
          enableExport={true}
          enableColumnVisibility={false}
          enablePrint={true}
          enableSearch={true}
          enableDelete={true}
        />
      </div>
    </div>
  );
};

export default PurchaseList;
