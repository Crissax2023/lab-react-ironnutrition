import { Card, Col, Button } from 'antd';

// Iteration 2
function FoodBox(props) {
  const {name,calories,image,servings} = props
  return (
    <Col>
      <Card
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>{calories}</p>
        <p>{servings}</p>
        <p>
          <b>Total Calories:{calories * servings} </b> kcal
        </p>
        <Button onClick={()=>props.onDelete(name)} type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;