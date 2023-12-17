import React, { Component } from 'react'


  class Hello extends Component{
    render(){
      console.log(this.props);
      const {name}=this.props;
      return(
        <h1>Hello {name}</h1>
      )
    }

  }


 class App extends Component {
  render() {
    return (
      <Hello name={"Karthikeyan"}/>
    )
  }
}

export default App