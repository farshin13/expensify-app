import React from "react";
import {connect} from "react-redux";
import ExpenseListitem from "./ExpenseListitem";
import selectExpenses from '../selectors/expenses'
const ExpenseList = (props) => (
    <div>
        <h1>Expense List Melina</h1>

        {props.expenses.map( (expense) => {
            return <ExpenseListitem key={expense.id} {...expense} />
            }
        )  }
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses , state.filters)
    };
}

const ConnectedExpenseList = connect(mapStateToProps) (ExpenseList);
export default ConnectedExpenseList ;