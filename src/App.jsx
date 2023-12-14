import Hello from "./Components/Hello";
const App=()=>{
  return (
    <div>
      <h1>Greatings</h1>
      <Hello name={"Karthi"} age={25}/>
      <Hello name={"Karthikeyan"} age={26}/>
    </div>
  )
}
export default App;