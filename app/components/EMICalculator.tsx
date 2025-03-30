'use client';

import React, { useState } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { calculateEMI } from '@/app/actions/calculateEMI';
import InputField from './InputField';
import ResultDisplay from './ResultDisplay';
import { EMIFormData, EMIState } from '@/types/calculatorTypes';

const initialState: EMIState = {
    result: null,
    errors: undefined
};

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md shadow-sm transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {pending ? 'Calculating...' : 'Calculate EMI'}
        </button>
    );
}

const EMICalculator: React.FC = () => {
    const [state, formAction] = useFormState<EMIState, FormData>(calculateEMI, initialState);
    const [formData, setFormData] = useState<EMIFormData>({
        loanAmount: 100000,
        interestRate: 8.5,
        loanTenure: 5,
        tenureUnit: 'years'
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'loanAmount' || name === 'interestRate' || name === 'loanTenure'
                ? parseFloat(value)
                : value
        }));
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-gray-50 rounded-xl shadow-sm my-10">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">EMI Calculator</h1>

            <form action={formAction} className="space-y-4">
                <input type="hidden" name="loanAmount" value={formData.loanAmount} />
                <input type="hidden" name="interestRate" value={formData.interestRate} />
                <input type="hidden" name="loanTenure" value={formData.loanTenure} />
                <input type="hidden" name="tenureUnit" value={formData.tenureUnit} />

                <div className="space-y-4">
                    <InputField
                        label="Loan Amount ($)"
                        name="loanAmount"
                        type="number"
                        value={formData.loanAmount}
                        onChange={handleInputChange}
                        min={1000}
                        step={1000}
                    />

                    <InputField
                        label="Interest Rate (% p.a.)"
                        name="interestRate"
                        type="number"
                        value={formData.interestRate}
                        onChange={handleInputChange}
                        min={0.1}
                        max={30}
                        step={0.01}
                    />

                    <div className="flex space-x-4">
                        <div className="flex-1">
                            <InputField
                                label="Loan Tenure"
                                name="loanTenure"
                                type="number"
                                value={formData.loanTenure}
                                onChange={handleInputChange}
                                min={1}
                                max={formData.tenureUnit === 'years' ? 30 : 360}
                            />
                        </div>
                        <div className="flex-1">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tenure Unit</label>
                            <select
                                name="tenureUnit"
                                value={formData.tenureUnit}
                                onChange={handleInputChange}
                                className="text-gray-700 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                            >
                                <option value="years">Years</option>
                                <option value="months">Months</option>
                            </select>
                        </div>
                    </div>
                </div>

                <SubmitButton />
            </form>

            {state.errors && (
                <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-md animate-shake">
                    {Object.values(state.errors).map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </div>
            )}

            <ResultDisplay result={state.result} />
        </div>
    );
};

export default EMICalculator;