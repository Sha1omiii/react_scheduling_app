import { useState, useEffect } from "react"

const AddOperator = (props) => {

  const [operatorForm, setOperatorForm] = useState({
    operator_name: '',
    email: '',
    role: 'operator',
    start_date: ''
  })

  const handleChange = (event) => {
    const addedOperator = ({
      ...operatorForm, [event.target.name]: event.target.value
    })
    setOperatorForm(addedOperator);
    console.log('newly added operator: ', addedOperator)
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    props.addOperator(operatorForm);
    setOperatorForm({
      operator_name: '',
      email: '',
      role: 'operator',
      start_date: ''
    })
  }

  // <form onSubmit={handleSubmit()}>
  //   <div>
  //     <label htmlFor="operator_name">Name</label>
  //     <input type="text" id="operator_name" name="operator_name" value={operatorForm.operator_name} onChange={handleChange()} />
  //   </div>
  //   <div>
  //     <label htmlFor="email">E-mail</label>
  //     <input type="email" id="email" name="email" value={operatorForm.email} onChange={handleChange()} />
  //   </div>
  //   <div>
  //     <label htmlFor="role">Role</label>
  //     <input type="text" id="role" name="role" value={operatorForm.role} onChange={handleChange()} />
  //   </div>
  //   <div>
  //     <label htmlFor="start_date">Start Date (yyyy-dd-mm)</label>
  //     <input id="start_date" name="start_date" value={operatorForm.start_date} onChange={handleChange()} />
  //   </div>
  // </form>

  return (
    <>
      <h1>Add Operator</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="operator_name">Name</label>
          <input type="text" id="operator_name" name="operator_name" value={operatorForm.operator_name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" value={operatorForm.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <input type="text" id="role" name="role" value={operatorForm.role} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="start_date">Start Date (yyyy-dd-mm)</label>
          <input id="start_date" name="start_date" value={operatorForm.start_date} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </>
  )
}

export default AddOperator;
