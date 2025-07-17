// <!DOCTYPE html>
// <html>
// <head>
//   <meta charset="UTF-8"/>
//   <title>Coffee Shop - React</title>
// </head>
// <body class="main">
//   <div id="root"></div>
// </body>
// </html>

const { Component, useState, useEffect } = React;

// server provided drink data:
// - key: drink name
// - value: number of seconds for drink to be made
const coffees = {
  mocha: 1,
  chai: 2,
  latte: 4,
  matcha: 5,
};

let baristaInterval
var ordersTimer = 0
var counterTimer = 0
  
const App = () => {
  const [orderDrinks, setOrderDrinks] = useState([])
  const [counterDrinks, setCounterDrinks] = useState([])

  
  clearInterval(baristaInterval)
  baristaInterval = setInterval(() => {
    ++ordersTimer
    if (!orderDrinks.length) ordersTimer = 0
    // console.log(orderDrinks.length ? coffees[orderDrinks[0]] : "no drinks")
    if (coffees[orderDrinks[0]] === ordersTimer) {
      setCounterDrinks((prevState) => [...prevState, orderDrinks[0]])
      setOrderDrinks((prevState) => prevState.slice(1))
      ordersTimer = 0
    }
    
    ++counterTimer
    if (!counterDrinks.length) counterTimer = 0
    if (counterDrinks.length && counterTimer === 3) {
      setCounterDrinks((prevState) => prevState.slice(1))
      counterTimer = 0
    }
    
  }, 1000)
  
  // Use a timout to track the progress of Counter Drinks
  
  
  return (
    <div>
      <h1>Hello Coffee Lovers!</h1>
      <Menu setOrderDrinks={setOrderDrinks}/>
      <Orders orderDrinks={orderDrinks}/>
      <Counter counterDrinks={counterDrinks} />
    </div>
  );
}

const Menu = ({
  setOrderDrinks
}) => {
  return (
    <div className="container">
      <h1 className="title">Menu</h1>
      <ul>
        {
          Object.entries(coffees).map(([name, prepTime], index) => {
            return <ListItem name={name} key={index} setOrderDrinks={setOrderDrinks}/>
          })
        }
      </ul>
    </div>
  );
}

const Orders = ({
  orderDrinks
}) => {
  return (
    <div className="container">
      <h1 className="title">Orders</h1>
      <ul>
        {
          orderDrinks.map((drinkName, index) => <ListItem name={drinkName} key={index} />)
        }
      </ul>
    </div>
  );
}

const Counter = ({
  counterDrinks
}) => {
  return (
    <div className="container">
      <h1 className="title">Counter</h1>
      <ul>
        {
          counterDrinks.map((drinkName, index) => <ListItem name={drinkName} key={index} />)
        }
      </ul>
    </div>
  );
}

const ListItem = ({
  name,
  setOrderDrinks
}) => {
  return (
    <li
      className="item"
      onClick={() => {
        setOrderDrinks((prevState) => [...prevState, name])
      }}
    >
      {name}
    </li>
  );
}

ReactDOM.render(<App/>, document.getElementById("root"));


