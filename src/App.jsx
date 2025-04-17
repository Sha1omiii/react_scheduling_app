import * as operatorServices from './services/operatorServices';
import { useState, useEffect } from 'react';

import OperatorDash from './componenets/OperatorDash';
import HomePage from './componenets/Home';
import AddOperator from './componenets/AddOperator';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [operators, setOperators] = useState([])

  const fetchAllOperators = async () => {
    try {
      const res = await operatorServices.getAllOperators();

      setOperators(res)
    } catch (error) {
      console.log('error encountered while fetching operators: ', error);
    }
  }

  const addOperator = async (operatorData) => {
    try {
      const newOperator = await operatorServices.addOperator(operatorData);
      setOperators((prevOperators) => [...prevOperators, newOperator]);
    } catch (error) {
      console.log('error encountered while fetching newly added operator');
    }
  }


  useEffect(() => {
    fetchAllOperators();
  }, [operators])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/operator' element={< OperatorDash operators={operators} />} />
          <Route path='/operator/add' element={< AddOperator addOperator={addOperator} />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
