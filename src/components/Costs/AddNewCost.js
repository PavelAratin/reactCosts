const AddNewCost = (props) => {

  const addNewCostHandler = () => {
    console.log('addNewCostHandler=>', 'click')
    console.log(props.onDisplayForm())
  }
  return (
    <button onClick={addNewCostHandler}>Добавить новый расход</button>
  )
}
export default AddNewCost;