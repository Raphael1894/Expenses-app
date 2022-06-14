import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/expensesOutput/ExpensesOutput";
import { getDateMinusDays } from "../utilities/Date";
import { ExpensesContext } from "./store/expenses-context";
import { fetchExpenses } from "../utilities/http";

function RecentExpense() {
  //const expensesCtx = useContext(ExpensesContext);

  const [fetchedExpenses, setFetchedExpenses] = useState([]);

  useEffect(() => {
    async function getExpences() {
      const expenses = await fetchExpenses();
      setFetchedExpenses(expenses);
    }

    getExpences();
  }, []);

  const recentExpenses = fetchedExpenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 days"
      fallbackText={"No expenses registered for the last 7 days"}
    />
  );
}

export default RecentExpense;
