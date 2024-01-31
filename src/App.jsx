import { Component } from "react";
import './App.css'

class App extends Component{
  constructor(){
    super()
    this.state = {
      count : 0
    }
  }

addFunction = () => {
  this.setState({
    count : this.state.count + 1
  })
}

subFunction = () => {
  this.setState({
    count : this.state.count - 1
  })
}

resetFunction = () => {
  this.setState({ count : 0 })
}

  render(){
    return <div>
      <h1>Counter App</h1>
      <h1>{this.state.count}</h1>
      <div className="buttons">
        <button className="addbtn" onClick={this.addFunction}>Add</button>
        <button className="subbtn" onClick={this.subFunction}>Sub</button>
        <button className="resetbtn" onClick={this.resetFunction}>Reset</button>
      </div>
    </div>
  }
}

export default App;


// Using functional component
 
// import { useState } from 'react';
// import './App.css'

// function App(){
//   const [count, setCount] = useState(0)

//   return (
//     <div>
//       <div>
//         <h1>Counter App</h1>
//       </div>
//       {count}
//       <div>
//         <button onClick={function(){
//           setCount(count+1)
//         }}>+</button>
//         <button onClick={function(){
//           setCount(count-1)
//         }}>-</button>
//         <button onClick={function(){
//           setCount(0)
//         }}>Reset</button>
//       </div>
//     </div>
//   )
// }

// export default App;