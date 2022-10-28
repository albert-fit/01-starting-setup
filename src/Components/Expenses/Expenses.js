import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import  {useState} from "react";

const Expenses = (props) => {
    const [selectedYear, setSelectedYear]=useState("2020");
    const saveYearDataHandler = (year) => {
        setSelectedYear(year)
    }
    const expenses = props.expenses

    return ( 
        <>
        <Card className="expenses">
        <ExpensesFilter selected={selectedYear} onSetNewYear={saveYearDataHandler}/>
        {expenses.filter(expense => expense.date.getFullYear()==selectedYear)
                 .map(filteredExpense => (
                    <ExpenseItem 
                    key={filteredExpense.id} 
                    title={filteredExpense.title} 
                    amount={filteredExpense.amount} 
                    date={filteredExpense.date}/>
                    ))
                    }
         </Card>
        </>   
    )
}

export default Expenses;