
import React, { Component } from 'react'

class App extends Component {

  constructor(props){
    super(props)
    this.state={
      count:null,
      isCart:true,
    }

  
  }

  handleAddToCart=()=>{

    this.setState({
      count:this.state.count+1,
      isCart: !this.state.isCart, // is cart is converted in to false 
      
    }
    )
  }
  handleRemoveFromCart=()=>{
    this.setState({
      count:this.state.count-1,
      isCart: !this.state.isCart,// is cart is converted in to true
      
    }
    )

  }
  
   
  render() {
    return (

      <div>
      <p>{this.state.count}</p>
        {
          this.state.isCart?(<button onClick={this.handleAddToCart}>Add to Cart</button>):(<button onClick={this.handleRemoveFromCart}>Remove from Cart</button>)
        }
      </div>
    )
  }
}

export default App