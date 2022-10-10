import CostForm from './CostForm';
import './NewCost.css';
//props пришел из родительского компонента (там была функция)
const NewCost = (props) => {
  //передача параметров из дочернего компонента родительскому
  //функция saveCostdataHandler передана через props  в дочерний компонент, там она вызывыется с параметром нового обьекта
  // inputCostData принятый обьект из дочернего компонента
  const saveCostdataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,//переданный обьект в дочрнем компоненте
      id:Math.random().toString()//добвляем новый парметр в полученный обьект
    }
    //вызов функции из родительского компонента, параметром передаем сформированный обьект
    props.onAddCost(costData);
  }
  return (
    <div className='new-cost'>
      <CostForm onSaveCostData={saveCostdataHandler}></CostForm>
    </div>
  );
}

export default NewCost;