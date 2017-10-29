import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [{
    id : '1',
    description : 'Gun',
    note : '',
    amount: 195,
    createdAt : 0
},{
    id : '2',
    description : 'More guns',
    note : '',
    amount: 500,
    createdAt : moment(0).subtract(4, 'days').valueOf()
},{
    id : '3',
    description : 'So many guns',
    note : '',
    amount: 4520,
    createdAt : moment(0).add(4, 'days').valueOf()
}
];

test('should filter by text value', () => {
    const filters = {
        text : 'e',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[1]]);
});

test('should filter by start date filter', () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : moment(0),
        endDate : undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2],expenses[0]]);
});

test('should filter by end date', () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate : moment(0).add(2, 'days')
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[0], expenses[1]]);
});

test('should sort by amount', () => {
    const filters = {
        text : '',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[1], expenses[0]]);
});

test('should sort by date', () => {
    const filters = {
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate : undefined
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]]);
});

