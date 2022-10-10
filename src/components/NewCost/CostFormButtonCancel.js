const ButtonCancel = (props) => {
  const foromHiddenHandler = () => {
    console.log(props.onCancel())
  }
  return (
    <button onClick={foromHiddenHandler}>Отмена</button>
  )

}
export default ButtonCancel;