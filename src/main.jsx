import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const notes=[
   
{
   id:1,
   content:"Working with Lists",
   important:true
},
{
   id:2,
   content:"Useage of keys",
   important:false
},
{
   id:3,
   content:"Conditional Rendering",
   important:true
},
{
   id:4,
   content:"Handling Events",
   important:true
},
{
   id:5,
   content:"Props Vs State",
   important:false
}
]
const notes1=[
   
   {
      id:1,
      content:" Useage of keys",
      important:true
   },
   {
      id:2,
      content:"Working with Lists",
      important:false
   },
   {
      id:3,
      content:"Handling Events ",
      important:true
   },
   {
      id:4,
      content:"Props Vs State",
      important:true
   },
   {
      id:5,
      content:"Conditional Rendering",
      important:false
   }
   ]
   

ReactDOM.createRoot(document.getElementById('root')).render(
 <>
   <App notes={notes}/>
  
 </>
 
 
)
