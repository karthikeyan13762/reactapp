import React, { useEffect, useState } from 'react'

function App() {
  const[posts,setPosts]=useState(null)
    
   
  const fetchData= async()=>{
    let response=await fetch('https://jsonplaceholder.typicode.com/posts')
    console.log(response);

    let data= await response.json()
    console.log(data);

    setPosts(data)

  }
  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      <h1>API Data</h1>
     {
      posts?(<ul>
        {
          posts.map((post)=> <li key={post.id}>{post.title}</li>

           
          )
        }
      </ul>):(<p>Fetching Data</p>)
     }
    </div>
    

    
  )
}

export default App