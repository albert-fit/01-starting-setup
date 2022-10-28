import {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [title,
        setTitle] = useState("");
    const [amount,
        setAmount] = useState(null);
    const [date,
        setDate] = useState("");

    const titleChangeHandler = (e) => {
        setTitle(e.target.value);
    };

    const amountChangeHandler = (e) => {
        setAmount(e.target.value);
    };

    const dateChangeHandler = (e) => {
        setDate(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title: title,
            amount: amount,
            date: new Date(date)
        };
        props.onSaveExpenseData(expenseData);
        
        console.log(expenseData);
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={title} onChange={titleChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__controls'>
                <label>Amount</label>
                <div className='new-expense__control'>
                    <input type='number' value={amount} onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        type='date'
                        min="2019-01-01"
                        max="2022-12-31"
                        onChange={dateChangeHandler}/>
                </div>
                <div className='new-expense__actions'>
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>
    )
};

export default ExpenseForm;
