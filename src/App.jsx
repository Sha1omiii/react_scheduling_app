import * as operatorServices from './services/operatorServices';
import { useState, useEffect } from 'react';
import OperatorDash from './componenets/OperatorDash';

function App() {

  const BACKEND_EXPRESS_URL = import.meta.env.VITE_BACKEND_EXPRESS_URL;
  const [operators, setOperators] = useState([])

  const getAllOperators = async () => {
    const res = await operatorServices.getAllOperators();

    if (!res.ok) {
      throw new Error(`http error getting all operators ${res.statusText}`)
    }
    setOperators(res)
  }

  useEffect(() => {
    console.log('updated list of operators: ', operators);
  }, [operators])
  return (
    <>
      <OperatorDash operators={operators} />

      <h1>Testing -- hopefully works</h1>

    </>
  )
}

export default App
