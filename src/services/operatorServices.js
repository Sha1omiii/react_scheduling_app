const BACKEND_EXPRESS_URL = import.meta.env.VITE_BACKEND_EXPRESS_URL;

const getAllOperators = async () => {
  const res = await fetch(`${BACKEND_EXPRESS_URL}/operator`);

  if (!res.ok) {
    throw new Error(`Error while fetching all operators: ${res.status} -- ${res.statusText}`);
  }

  const data = await res.json();
  return data;
}

const getOperatorById = async (operatorId, operatorData) => {
  // 
  try {
    const res = await fetch(`${BACKEND_EXPRESS_URL}/operator/${operatorId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (!res.ok) throw new Error(`Getting an operator with the id=${operatorId} exhibited an error: ${res.status} --- ${res.statusText}`);

    const data = await res.json();
    return data;
  } catch (error) {
    console.log('error while getting a operator by id: ', error);
  }
}

const updateOperatorById = async (operatorId, operatorData) => {
  // get the operator id 
  // then make a request using put method and stringify the data of an operator with the id 
  try {
    const res = await fetch(`${BACKEND_EXPRESS_URL}/operator/${operatorId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(operatorData)
    })

    if (!res.ok) {
      throw new Error(`Error while updating a users data ${res.status} -- ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log('error while updating an operators data: ', error);
  }
}

export { getAllOperators, getOperatorById, updateOperatorById } 
