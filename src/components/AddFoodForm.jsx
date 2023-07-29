import { Divider, Input,Row,Col } from 'antd';
import {useState} from 'react'

const initialState={
  name:'',
  image:'',
  calories:0,
  servings:0
}

// Iteration 4
function AddFoodForm(props) {

  const {addFood} = props

  const [formData, setformData] = useState(initialState)

  const handleFormInput = (inputName, value)=>{
      
    
    const updatedForm = {... formData}
      updatedForm[inputName]=value
      setformData(updatedForm)
      }


        const sendFood =(e) =>{
          e.preventDefault()
          addFood(FormData)
          setformData(initialState)
        }

  return (

    <Row justify={'center'}>
        <Col span={6}>
        
        <form onSubmit={sendFood}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={(e) => handleFormInput('name',e.target.value)} />

      <label>Image</label>
      {/* render antd <Input /> type="text" here */}
      <Input value={undefined} type="text" onChange={(e) => handleFormInput('image',e.target.value)} />


      <label>Calories</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={undefined} type="number" onChange={(e) => handleFormInput('calories',e.target.value)} />

      <label>Servings</label>
      {/* render antd <Input /> type="number" here */}
      <Input value={undefined} type="number" onChange={(e) => handleFormInput('servings',e.target.value)} />

      <button type="submit">Create</button>
    </form>


        </Col>
    </Row>
    
  );
}

export default AddFoodForm;