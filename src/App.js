// Style Guide:
// In this file you can find a reference example of the structure
// and content that the component should render.
// Remember to import Ant Design components before using them.
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox'
import foodData from './foods.json'
import {useState} from 'react';
import AddFoodForm from './components/AddFoodForm'
import Search from './components/Search';

const foodDataExample= {
  name: "Orange",
  calories: 85,
  image: "https://i.imgur.com/abKGOcv.jpg",
  servings: 1
}

function App() {

  const [foods,setFoods] = useState(foodData)

  const [word,setword] = useState('')

  const [show,setShow] = useState(false)

  const onSearch = (searchCriteria) => setword(searchCriteria)

  const onDelete = (foodName) =>{
    const filteredfoods=foods.filter(food =>
      
     { 
      return food.name !==foodName
    }
      
      )
      setFoods(filteredfoods)
  }

   const addFood = (newFood) =>{
   /*
    const updateFood = [...foods]
    updateFood.unshift(newFood)
    setFoods(updateFood)
    */
   setFoods( prevFoods =>[newFood, ...prevFoods])

  }



  return (
    <div className="App">
      {/* Display Add Food component here */}
      
      {show ? <AddFoodForm addFood={addFood}  />: null}
      
      <Button onClick={()=>setShow(!show)}>{show?  "Hide Form" : "Add New Food"} </Button>

      {/* Display Search component here */}
      <Search onSearch={onSearch}/>
      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* Render the list of Food Box components here */}
        {

          foods
          .filter(foodItem =>foodItem.name.toLowerCase().includes(word.toLowerCase())).length
          ?


          foods
          .filter(foodItem =>foodItem.name.toLowerCase().includes(word.toLowerCase()))
          .map((food,i) => <FoodBox onDelete={onDelete} key={i} {...food} />)
          :
          'no hay alimentos que mostrar'

        }
        
      </Row>
    </div>
  );
}

export default App;