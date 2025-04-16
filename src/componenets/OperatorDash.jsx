const OperatorDash = (props) => {
  return (
    <>
      <ul>Operator dash is working
        {props.operators.map((operator, idx) => (
          <li key={idx}>{operator.operator_name}</li>
        ))}
      </ul>
    </>
  )
}

export default OperatorDash;


