import { BrowserRouter, Link } from "react-router-dom";

const OperatorDash = (props) => {
  return (
    <>
      <nav>
        <Link to='/operator/add'>Add Operator</Link>

        {/* <Link to='/operator/add'>Add Operator</Link> */}

      </nav>

      <ul>Operator dash is working
        {props.operators.map((operator, idx) => (
          <li key={idx}>{operator.operator_name}</li>
        ))}
      </ul>

    </>
  )
}

export default OperatorDash;


