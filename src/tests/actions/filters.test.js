import {setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate} from "../../actions/filters";
import moment from 'moment';

test('should generate set start date object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set end action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
       type: 'SET_END_DATE',
       endDate: moment(0)
    });
});

test('should generate set text filter ', () => {
    const text = 'hello';
    const action =  setTextFilter(text);
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
});

test('should generate set text filter with default input', () => {
   const action =  setTextFilter();
   expect(action).toEqual({
       type: 'SET_TEXT_FILTER',
       text: ''
   })
});

test('should generate sort by date action', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
});

test('should generate sort by amount action', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
});
