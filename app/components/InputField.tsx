import React from 'react';

type InputFieldProps = {
    label: string;
    name: string;
    type: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    min?: number;
    max?: number;
    step?: number;
    required?: boolean;
    className?: string;
};

const InputField: React.FC<InputFieldProps> = ({
                                                   label,
                                                   name,
                                                   type,
                                                   value,
                                                   onChange,
                                                   min,
                                                   max,
                                                   step,
                                                   required = true,
                                                   className = ''
                                               }) => {
    return (
        <div className={`mb-4 ${className}`}>
            <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
                {label}
            </label>
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                min={min?.toString()}
                max={max?.toString()}
                step={step?.toString()}
                required={required}
                className="text-gray-800 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
        </div>
    );
};

export default InputField;