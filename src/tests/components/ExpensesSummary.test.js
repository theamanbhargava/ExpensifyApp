import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import {ExpenseSummary} from "../../components/ExpensesSummary";

test('should correctly render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={5} expensesTotal={653}/>);
    expect(wrapper).toMatchSnapshot();
});