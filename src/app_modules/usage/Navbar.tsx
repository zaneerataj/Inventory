import React, { FC } from 'react';
// import { Button } from '../../../components/ui/button';
// import CustomButton from "../../../CustomComponents/CustomButton/CustomButton";
// import CustomButton from '../../CustomComponents/CustomButton/CustomButton';

const Navbar: FC = () => {

// const navigate = useNavigate()
//   const handleSignInClick = (e) =>{
//     e.preventDefault()
//     navigate('/signin')
//   }

  return (
    <nav className="flex justify-between items-center bg-blue-400 h-10" >

      
      {/* <div className="logo flex items-center h-full">
        <div className="w-20 h-full">
          <img
            src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="I&P"
            className="h-full w-full  text-black"
          />
        </div>
      </div>
      <div className="flex mr-5 w-44 justify-between ">
        <CustomButton label="Sign In" />
        <CustomButton label="Sign Up" />
      </div> */}
    </nav>
  );
};

export default Navbar;
