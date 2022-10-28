import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, {useState}from 'react';

const ExpenseItem=(props)=> {
    const [expenseTitle, setExpenseTitle] = useState(props.title);
    const expenseDate = props.date;
    const expenseAmount = props.amount;

    const clickHandler = () =>{
        console.log(props.date)
        setExpenseTitle('Updated!'); ;
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">£{expenseAmount}</div>
            </div>
            <button onClick={clickHandler}>Change title</button>

        </Card>
    )
}
export default ExpenseItem;