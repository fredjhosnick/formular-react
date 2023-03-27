import React, { useState } from 'react'

const Form = () => {
  const[inputName,setInputName] = useState(null)
  const[inputLastName,setInputLastName] = useState(null)
  const [selectOption,setSelectOption] = useState(null)
  const[inputValue,setInputValue] = useState(false)
  const[print,setPrint] = useState(true);

  const clickChange =(event)=>{
    event.preventDefault();
    setPrint(true)

  }

  return (
    <div>
    <div>
      <form >
      <br/>
      <br/>
      <label for="fname">First name:</label><br/>
        <input type="text"  
        value={inputName} 
        onChange={(e)=>{setInputName(e.target.value); setPrint(false)}} 
        placeholder="First name"/><br/>

        <label for="lname">Last name:</label><br/>
        <input type="text" 
        value={inputLastName} 
        onChange={(e)=>{setInputLastName(e.target.value);setPrint(false)}}
        placeholder="Last name"/><br/>

        <label for="courses">Course Names:</label><br/>
            <select onChange={(event)=>{setSelectOption(event.target.value);setPrint(false)}} value={selectOption} >
            <option value="reactjs">ReactJS</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            </select>

            <form>
            <input type="checkbox" onChange={()=>{setInputValue(!inputValue)}} checked={inputValue}/>Returning
            </form><br/> 

        <button onClick={clickChange}>Submit</button>
      </form>
      {
        print?
        <>
        <h2>{inputName}</h2>
        <h2>{inputLastName}</h2>
        <h2>{inputValue.toString()}</h2>
       <h2>{selectOption}</h2>
       </>
        :null
      }
      
    </div>
  </div>
  )
}

export default Form