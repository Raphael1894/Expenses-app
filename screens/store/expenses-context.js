import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "Pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e2",
    description: "Pair of shorts",
    amount: 29.99,
    date: new Date("2021-11-11"),
  },
  {
    id: "e3",
    description: "Bananas",
    amount: 5.99,
    date: new Date("2021-06-05"),
  },
  {
    id: "e4",
    description: "Book",
    amount: 15.99,
    date: new Date("2021-02-05"),
  },
  {
    id: "e5",
    description: "Cellphone",
    amount: 415.99,
    date: new Date("2021-12-17"),
  },
  {
    id: "e6",
    description: "Pair of shoes",
    amount: 59.99,
    date: new Date("2021-12-19"),
  },
  {
    id: "e7",
    description: "Pair of shorts",
    amount: 29.99,
    date: new Date("2021-11-11"),
  },
  {
    id: "e8",
    description: "Bananas",
    amount: 5.99,
    date: new Date("2021-06-05"),
  },
  {
    id: "e9",
    description: "Book",
    amount: 15.99,
    date: new Date("2021-02-05"),
  },
  {
    id: "e10",
    description: "Cellphone",
    amount: 415.99,
    date: new Date("2021-12-17"),
  },
  {
    id: "e11",
    description: "Water",
    amount: 99.99,
    date: new Date("2022-06-10"),
  },
  {
    id: "e12",
    description: "Food",
    amount: 39.99,
    date: new Date("2022-06-25"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updatableExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatableExpense = state[updatableExpenseIndex];
      const updatedItem = { ...updatableExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatableExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
