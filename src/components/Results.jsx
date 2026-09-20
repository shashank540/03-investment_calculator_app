import {calculateInvestmentResults, formatter} from '../util/investment.js';

export default function Results({input}) {
   
    const resutData = calculateInvestmentResults(input);
    const initialInvestment = 
    resutData[0].valueEndOfYear - 
    resutData[0].interest -
    resutData[0].annualInvestment;

    return(        
       
    <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>            
        </thead>
        <tbody>
            {resutData.map(yearData => {
                const totalIntrest = 
                yearData.valueEndOfYear - 
                yearData.annualInvestment * yearData.year - 
                initialInvestment;

                const totalInvestmentedAmout = yearData.valueEndOfYear - totalIntrest;

                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear) }</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalIntrest)}</td>
                    <td>{formatter.format(totalInvestmentedAmout)}</td>
                </tr>
            })}
        </tbody>
    </table>
    
    );
}