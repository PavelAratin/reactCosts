
import React,{useState} from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    description: "Холодильник",
    amount: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2021, 2, 25),
    description: "MacBook",
    amount: 1254.72,
  },
  {
    id: 'c3',
    date: new Date(2021, 4, 1),
    description: "Джинсы",
    amount: 49.99,
  }
]
function App() {
  const[costs,setCosts]=useState(INITIAL_COSTS)
//определяем функция для передачи параметра из дочернего компонента
//cost придет из вызова этой функции в дочернем компоненте , парметром будет передан обьект
  const addCostHandler = (cost) => {
    setCosts((prevCosts)=>{
      return [cost,...prevCosts]
    })
  }

  //onAddCost передаем пропсом в дочерний компонент функцию обработчик
  return (
    <div>
      <NewCost onAddCost={addCostHandler}></NewCost>
      <Costs costs={costs}></Costs>
    </div>
  );
}

export default App;
