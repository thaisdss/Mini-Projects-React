import * as C from "./App.styled";
import { Item } from "./types/Item";
import { categories } from "./data/categories";
import { useState, useEffect } from "react";
import { filterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from "./components/TableArea";
import { InfoArea } from "./components/InfoArea";
import { InsertArea } from "./components/InsertArea";

function App() {
  const [list, setList] = useState<Item[]>([]);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for(let i in filteredList){
      if(categories[filteredList[i].category].expense){
        expenseCount += filteredList[i].value;
      }else{
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  function handleMonthChange(newMonth: string) {
    setCurrentMonth(newMonth);
  };

  function handleAddItem(item: Item) {
    if(list.length === 0){
      return setList([item])
    }

    let newList = [...list];
    newList.push(item);

    setList(newList);
  }

  return(
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea  
        currentMonth={currentMonth}
        onMonthChange={handleMonthChange}
        income={income}
        expense={expense}
        />
        <InsertArea  onAdd={handleAddItem} />
        <TableArea  list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App
