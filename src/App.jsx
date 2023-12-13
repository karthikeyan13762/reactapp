
function Hello(props){
  console.log(props);
return(

  <>
  <p>Hello {props.userName} and your age is {props.age}</p>
 
  </>
  
)



}



function App(){
   

  return(
    <div>
      <h1>Greatings</h1>
      <Hello userName={"Karthi"} age={25}/>
      <Hello userName={"KarthiKeyan"} age={26}/>
    </div>
    
  )
}

export default App;