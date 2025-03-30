'use server';

import { EMIResult, EMIState } from '@/types/calculatorTypes';

export async function calculateEMI(prevState: EMIState, formData: FormData): Promise<EMIState> {
    try {
        const loanAmount = parseFloat(formData.get('loanAmount') as string);
        const interestRate = parseFloat(formData.get('interestRate') as string);
        const loanTenure = parseFloat(formData.get('loanTenure') as string);
        const tenureUnit = formData.get('tenureUnit') as 'years' | 'months';

        // Validate inputs
        const errors: Record<string, string> = {};
        if (isNaN(loanAmount)) errors.loanAmount = 'Please enter a valid loan amount';
        if (isNaN(interestRate)) errors.interestRate = 'Please enter a valid interest rate';
        if (isNaN(loanTenure)) errors.loanTenure = 'Please enter a valid loan tenure';

        if (Object.keys(errors).length > 0) {
            return { ...prevState, errors };
        }

        // Convert years to months if needed
        const months = tenureUnit === 'years' ? loanTenure * 12 : loanTenure;
        const rate = interestRate / 12 / 100;

        // EMI calculation formula: [P x R x (1+R)^N]/[(1+R)^N-1]
        const emi = loanAmount * rate * Math.pow(1 + rate, months) / (Math.pow(1 + rate, months) - 1);
        const totalPayment = emi * months;
        const totalInterest = totalPayment - loanAmount;

        const result: EMIResult = {
            emi,
            totalInterest,
            totalPayment,
            loanAmount,
            interestRate,
            loanTenure,
            tenureUnit
        };

        return { result, errors: undefined };
    } catch (error) {
        return {
            result: null,
            errors: { general: 'An error occurred during calculation' }
        };
    }
}