import React from 'react'
import { Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';




export default function ChangePassword() {
    const navigate = useNavigate();
  return (
<>
    <div>
    {/* Heading line Start*/}
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold">Change Password </span>
        
      </div>
      <div
        className="flex items-center space-x-1 cursor-pointer text-black-500"
        onClick={() => navigate('/purchase/dashboard')}>
        <Home className="w-4 h-4" />
        <span>Home</span>
      </div>
      
    </div>

    {/* Heading line end*/}

  </div>
    <div>ChangePassword</div>
    </>
  )


}
