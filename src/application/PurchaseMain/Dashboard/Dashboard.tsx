import React from 'react';
import Cards from './Cards/Cards';
import CustomChart from '../../../../src/CustomComponents/CustomChart/CustomChart';
import Footer from './Footer/Footer';
import CustomPiChart from '../../../../src/CustomComponents/CustomPiChart/CustomPiChart';
import CustomTable1 from '../../../CustomComponents/CustomTable/CustomTable1';
import ExpiredItemsTable from './Footer/ExpiredItemsTable';
import StockAlertTable from './Footer/StockAlertTable';
import { Home } from 'lucide-react';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-between p-4">
        <div className="flex flex-col md:flex-row items-center md:space-x-2">
          <span className="text-xl font-bold">Dashboard</span>
          <span className="text-gray-500">
            Overall Information on Single Screen
          </span>
        </div>
        <div className="flex ">
          <div
            className="flex items-center  cursor-pointer "
            onClick={() => navigate('/')}
          >
            <Home className="w-4 h-4 ml-6" />
            <span>Home</span>
          </div>
        </div>
      </div>
      <Cards />
      <div className="flex justify-between m-2 p-2">
        <div className="w-[55%] p-2 transition-transform transform hover:scale-105 hover:shadow-orange-2xl shadow-orange-400 border border-orange-400 rounded-md">
          <h2 className="text-center mt-6 font-bold mb-3">
            PURCHASE AND SALES BARS CHART
          </h2>
          <CustomChart />
        </div>
        <div className="w-[40%] p-2 transition-transform transform hover:scale-105 hover:shadow-orange-2xl shadow-orange-400 border border-orange-400 rounded-md">
          <CustomTable1 />
        </div>
      </div>

      {/* Flex container for ExpiredItemsTable and StockAlertTable */}
      <div className="flex justify-between gap-4 m-4">
        <div className="flex-1 p-4 transition-transform transform hover:scale-105 hover:shadow-orange-2xl shadow-orange-400 border border-orange-400 rounded-md">
          <ExpiredItemsTable />
        </div>
        <div className="flex-1 p-4 transition-transform transform hover:scale-105 hover:shadow-orange-2xl shadow-orange-400 border border-orange-400 rounded-md">
          <StockAlertTable />
        </div>
      </div>

      <div className="p-3 ">
        <CustomPiChart />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
