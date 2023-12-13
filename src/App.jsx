function App(){
    const now =new Date()
    console.log("Hello from component");

    let a=10;

    let b=15;

  return(

    <div>
      <h1>hello world is{now.toString()}</h1>
      <p>{a} plus {b} is {a+b}</p>
    </div>
  )
}

export default App;