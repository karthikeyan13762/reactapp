function Hello(props){

  return (

    <p>Hello {props.name} your age is {props.age}</p>
  )
}




const App=()=>{
  return (
    <div>
      <h1>Greatings</h1>
      <Hello nage={"Karthi"} age={25}/>
      <Hello name={"Karthikeyan"} age={26}/>
    </div>
  )
}
export default App;