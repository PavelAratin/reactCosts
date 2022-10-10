import React, { useState } from 'react';
import AddNewCost from '../Costs/AddNewCost';
import CostForm from './CostForm';
import './NewCost.css';
const NewCost = (props) => {
  const [displayForm, setDisplayForm] = useState(false)
  const saveCostdataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    }
    props.onAddCost(costData);
    setDisplayForm(false)
  }
  const displayFormHandler = () => {
    setDisplayForm(true)
  }
  const hiddenFormHandler = () => {
    setDisplayForm(false)
  }
  return (
    <div className='new-cost'>
      {displayForm
        ? <CostForm onSaveCostData={saveCostdataHandler} onCancel={hiddenFormHandler}></CostForm>
        : <AddNewCost onDisplayForm={displayFormHandler}></AddNewCost>
      }
    </div>
  )
}

export default NewCost;