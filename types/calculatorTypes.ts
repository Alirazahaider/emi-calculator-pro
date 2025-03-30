export type EMIFormData = {
    loanAmount: number;
    interestRate: number;
    loanTenure: number;
    tenureUnit: 'years' | 'months';
};

export type EMIResult = {
    emi: number;
    totalInterest: number;
    totalPayment: number;
    loanAmount: number;
    interestRate: number;
    loanTenure: number;
    tenureUnit: 'years' | 'months';
};

export type EMIState = {
    result: EMIResult | null;
    errors?: Record<string, string>;
};