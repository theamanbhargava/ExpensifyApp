import moment from 'moment';

export default  [{
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