import React, { useState } from 'react';
import './CostForm.css';

const CostForm = (props) => {
  const [inputName, setInputName] = useState('');
  const [inputAamout, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  // const [userInput, setUserInput] = useState({
  //   name: '',
  //   amount: '',
  //   date: '',
  // })
  const nameChangeHandler = (event) => {
    setInputName(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   name: event.target.value
    // })
    // setUserInput((previousState)=>{
    //   return {
    //     ...previousState,
    //     name: event.target.value
    //   }
    // })
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value
    // })
  }
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value)
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value
    // })
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const costDate = {
      description:inputName,
      amount:inputAamout,
      date:new Date(inputDate)
    }
    setInputName('');
    setInputAmount('');
    setInputDate('');
    //вызов функции , которая была определена в родительском компоненте
    //парметром передаем сформированный обьект
    //в родительском компоненте этот обьект будет изменен(если нужно)
    props.onSaveCostData(costDate)
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-cost__controls'>
        <div className='new-cost__control'>
          <label>Название</label>
          <input type='text' value={inputName} onChange={nameChangeHandler}></input>
        </div>
        <div className='new-cost__control'>
          <label>Сумма</label>
          <input type='number' value={inputAamout} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
        </div>
        <div className='new-cost__control'>
          <label>Дата</label>
          <input type='date' value={inputDate} min="2019-01-01" step="2022-12-31" onChange={dateChangeHandler}></input>
        </div>
        <div className='new-cost__actions'>
          <button type='submit'>Добавить расход</button>
        </div>
      </div>
    </form>
  );
}

export default CostForm;