
import CustomButton from '../../CustomComponents/CustomButton/CustomButton';
import React, { FC } from 'react';
// import CustomTabs from '../../CustomComponents/CustomTabs/CustomTabs';
// import Box from '../../application/admin/Box/Box';
// import CustomChart from '../../CustomComponents/CustomChart/CustomChart';
import { useNavigate } from 'react-router-dom';
const CenterPage: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="">
      <div className="flex justify-center pt-10">
        <h1 className="text-6xl font-bold ">Maskan Project Inventory and POS...</h1>
        {/* <h1 className="text-6xl font-bold">Maskan Project Inventory and POS coming soon...</h1> */}

      </div>
      <div className="flex justify-center items-center h-screen">
        <CustomButton
          type="button"
          className="mt-4 flex justify-center space-x-4"
          // className="flex items-center justify-center px-8 py-2 bg-white text-black rounded-lg space-x-1 cursor-pointer hover:bg-black focus:outline-none focus:ring-2 focus:ring-white"
          onClick={() => navigate('/purchase')}
        >
          <span>Purchase</span>
        </CustomButton>
      </div>

      {/* <Box />s */}
      {/* <CustomChart /> */}
      {/* <CustomTabs/> */}
    </div>
  );
};

export default CenterPage;
