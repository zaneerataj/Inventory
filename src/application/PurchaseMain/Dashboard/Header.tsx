import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import { Settings, Globe, LayoutDashboard, User } from 'lucide-react';
import { useTheme } from '../../../../components/ui/theme-provider';
import CustomButton from '../../../../src/CustomComponents/CustomButton/CustomButton';
import CustomSwitch from '../../../../src/CustomComponents/CustomSwitch/CustomSwitch';

// Define the type for your purchase items
type PurchaseItem = {
  name: string;
  amount: number;
};

const Header: React.FC = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [purchaseData, setPurchaseData] = useState<PurchaseItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [openMenuDropdown, setOpenMenuDropdown] = useState(false);
  const navigate = useNavigate();

  // Theme context
  const { theme, setTheme } = useTheme();

  // Function to toggle theme
  const handleThemeToggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  };

  // Placeholder for fetching purchase data
  const fetchPurchaseData = async () => {
    // API fetching logic will be added later
  };

  const handleLanguageClick = () => {
    setShowLanguageDropdown((prev) => !prev);
    setShowUserDetails(false);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setShowLanguageDropdown(false);
  };

  const handleDashboardClick = () => {
    navigate('/');
  };

  const handlePurchaseClick = () => {
    setShowUserDetails((prev) => !prev);
    setShowLanguageDropdown(false);
    if (!showUserDetails) {
      fetchPurchaseData();
    }
  };

  const handleNavigate = (path: string) => {
    setOpenMenuDropdown(false);
    navigate(path);
  };

  return (
    <div className="flex flex-col">
      <div className="h-12 flex items-center justify-between px-4 bg-orange-500 rounded-md text-white ">
        <div className="flex items-center space-x-4 font-bold text-xl">
          {/* Ultimate Inventory */}
        </div>
        <div className="flex items-center space-x-4 relative">
          {/* Language Dropdown */}
          <div className="relative">
            <button
              className="hover:text-[#2d5e7a] font-bold py-2 px-4 flex items-center space-x-2"
              onClick={handleLanguageClick}
            >
              <Globe className="h-4 w-4" />
              <span>{selectedLanguage}</span>
            </button>
            {showLanguageDropdown && (
              <div className="absolute top-full mt-2 right-0 shadow-md rounded-md p-2 ">
                <ul>
                  {['English', 'Hindi', 'Kannada', 'Telugu'].map((lang) => (
                    <li
                      key={lang}
                      className="cursor-pointer hover:bg-gray-600 p-1"
                      onClick={() => handleLanguageSelect(lang)}
                    >
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Dashboard Button */}
          <button
            className="hover:text-[#2d5e7a] font-bold py-2 px-4 flex items-center space-x-2"
            onClick={handleDashboardClick}
          >
            <LayoutDashboard className="h-4 w-4" />
            <span>Dashboard</span>
          </button>

          {/* Purchase/User Details Dropdown */}
          <button
            className="hover:text-[#2d5e7a] font-bold py-2 px-4 flex items-center space-x-2"
            onClick={handlePurchaseClick}
          >
            <User className="h-4 w-4" />
            <span>Purchase</span>
          </button>
          {showUserDetails && (
            <div className="absolute top-12 right-16 bg-gray-600 shadow-md rounded-md p-2">
              {isLoading ? (
                <ul>
                  <li className="p-2">Loading...</li>
                </ul>
              ) : error ? (
                <ul>
                  <li className="p-2 text-white">{error}</li>
                </ul>
              ) : (
                <ul>
                  {purchaseData.length > 0 ? (
                    purchaseData.map((item, index) => (
                      <li key={index} className="p-2 text-white">
                        {item.name}: {item.amount}
                      </li>
                    ))
                  ) : (
                    <li className="p-2 text-white">No Purchase Data Found</li>
                  )}
                </ul>
              )}
            </div>
          )}

          {/* Add Menu Dropdown - Adjusted Positioning */}
          <div className="relative">
            <CustomButton
              className="hover:text-[#2d5e7a] font-bold py-2 px-4 flex items-center space-x-2"
              onClick={() => setOpenMenuDropdown(!openMenuDropdown)}
            >
              <Plus />
            </CustomButton>

            {/* Dropdown Menu */}
            {openMenuDropdown && (
              <div className="absolute left-0 mt-2 w-40 bg-gray-300 rounded-md shadow-lg z-10">
                <ul className="py-1">
                  {[
                    {
                      path: '/purchase/purchase/newpurchase',
                      label: 'Purchase',
                    },
                    {
                      path: '/purchase/suppliers/newsuppliers',
                      label: 'Supplier',
                    },
                    { path: '/purchase/items/newitems', label: 'Item' },
                    { path: '/purchase/Expenses/NewExpenses', label: 'Expense' },
                  ].map((item) => (
                    <li
                      key={item.label}
                      className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-500"
                      onClick={() => handleNavigate(item.path)}
                    >
                      <Plus className="text-black" />
                      <span>{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <CustomSwitch
            className="hover:text-[#2d5e7a] font-bold py-2 px-4 flex items-center space-x-2"
            onClick={handleThemeToggle}
          >
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </CustomSwitch>
        </div>
      </div>
    </div>
  );
};

export default Header;
