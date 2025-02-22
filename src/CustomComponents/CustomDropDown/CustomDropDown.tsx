import React from 'react';
import { ChevronDown } from 'lucide-react';


interface Option {
  value: string | number;
  label: string;
}

interface CustomDropdownProps {
  id: string;
  className?: string;
  value: string | number | Array<string | number>;
  options: Option[];
  onChange: (value: string | number | Array<string | number>) => void;
  multiple?: boolean;
  placeholder?: string;
  style?: React.CSSProperties;
  label?: string;
  icon?: React.ReactNode; // Add icon prop
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  id,
  className,
  value,
  options,
  onChange,
  multiple = false,
  placeholder = '',
  style = {},
  label,
  icon, // Accept icon prop here
}) => {
  const normalizedValue = multiple
    ? (Array.isArray(value) ? value : [value]).map(v => String(v))
    : String(value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOptions = Array.from(event.target.selectedOptions, option => option.value);
    onChange(multiple ? selectedOptions : selectedOptions[0]);
  };

  return (
    <div className="relative" style={style}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      <div className="relative flex items-center">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>
        )}
        <select
          id={id}
          className={`
            block w-full px-4 py-2 pr-8 leading-tight bg-white dark:bg-gray-950
            border border-gray-200 dark:border-gray-600 rounded-md shadow-sm
            focus:outline-none focus:ring-2 focus:ring-blue-500
            text-gray-700 dark:text-gray-200
            appearance-none transition duration-150 ease-in-out
            ${icon ? 'pl-10' : ''}  // Add left padding when the icon is present
            ${className || ''}
          `}
          value={normalizedValue}
          onChange={handleChange}
          multiple={multiple}
          aria-label={placeholder || 'Select option'}
        >
          {placeholder && !multiple && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map(option => (
            <option key={option.value} value={String(option.value)}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <ChevronDown className="w-5 h-5 text-gray-400 dark:text-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default CustomDropdown;
