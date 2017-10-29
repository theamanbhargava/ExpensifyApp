import {addExpense, removeExpense, editExpense} from "../../actions/expenses";

test('should setup remove expense', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
});

test('should setup edit expense', () => {
    const action = editExpense('123abc', {note: 'new note value'});
    expect(action).toEqual({
        type : 'EDIT_EXPENSE',
        id: '123abc',
        updates: {note: 'new note value'}
    })
});

test('should setup add expense', () => {
    const expenseData = {
        description : 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'This was last months rent'
    };
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
});

test('should setup add expense with default values', () => {
    const action = addExpense({});
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description : expect.any(String),
            note : expect.any(String),
            amount : expect.any(Number),
            createdAt : expect.any(Number),
            id: expect.any(String)
        }
    })
});