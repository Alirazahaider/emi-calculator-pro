import React from 'react';
import { EMIResult } from '@/types/calculatorTypes';

const ResultDisplay: React.FC<{ result: EMIResult | null }> = ({ result }) => {
    if (!result) return null;

    return (
        <div className="mt-8 p-6 bg-white rounded-lg shadow-md animate-fadeIn">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">EMI Calculation Results</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-600">Monthly Payment (EMI)</p>
                    <p className="text-2xl font-bold text-blue-800">${result.emi.toFixed(2)}</p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-600">Total Interest Payable</p>
                    <p className="text-2xl font-bold text-green-800">${result.totalInterest.toFixed(2)}</p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-600">Principal Amount</p>
                    <p className="text-2xl font-bold text-purple-800">${result.loanAmount.toFixed(2)}</p>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-orange-600">Total Payment</p>
                    <p className="text-2xl font-bold text-orange-800">${result.totalPayment.toFixed(2)}</p>
                </div>
            </div>

            <div className="mt-4 text-sm text-gray-500">
                <p>Interest Rate: {result.interestRate}% per annum</p>
                <p>Loan Tenure: {result.loanTenure} {result.tenureUnit}</p>
            </div>
        </div>
    );
};

export default ResultDisplay;