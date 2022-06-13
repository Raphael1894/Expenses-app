import { View } from 'react-native';

import ExpensesList from './ExpensesList';
import ExpensesSummary from './ExpensesSummary';

const DUMMY_EXPENSES = [
	{
		id: 'e1',
		description: 'Pair of shoes',
		amount: 59.99,
    date: new Date('2021-12-19')
	},
  {
		id: 'e2',
		description: 'Pair of shorts',
		amount: 29.99,
    date: new Date('2021-11-11')
	},
  {
		id: 'e3',
		description: 'Bananas',
		amount: 5.99,
    date: new Date('2021-06-05')
	},
  {
		id: 'e4',
		description: 'Book',
		amount: 15.99,
    date: new Date('2021-02-05')
	},
  {
		id: 'e5',
		description: 'Cellphone',
		amount: 415.99,
    date: new Date('2021-12-17')
	}
];

function ExpensesOutput({ expenses, expensesPeriod }) {
	return (
		<View>
			<ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod}  />
			<ExpensesList expenses={DUMMY_EXPENSES}/>
		</View>
	);
}

export default ExpensesOutput;
