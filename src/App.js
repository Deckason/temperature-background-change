import './App.css';
import MOCK_DATA_JSON from "./MOCK_DATA.json";
import {useState} from "react";
function App() {
  const [temp, setTemp] = useState(10)

  
  /*SEARCH FILTER
  const [input, setInput] = useState("")
*/

  return (
    <div className="App">
      <div className="container">
        <div style={{background: temp > 15 ? "#fc8301" : "#14148d"}} className="degrees">
          <p>{temp}<sup>o</sup>C</p>
        </div>
        <div className="buttons">
          <button onClick={()=>{setTemp(temp === 0 ? 0 : temp-1)}}>-</button>
          <button onClick={()=>{setTemp(temp === 30 ? 30 : temp+1)}}>+</button>
        </div>
      </div>
    </div>

    /*    SERCH FILTER
    <div className="App">
      <div className="container">
        <div><input type="text" placeholder='Search' onChange={(e)=>setInput(e.target.value)}/></div>
        
        <div className="haed"><h3>First Name</h3> <h3>Last Name</h3> <h3>Email</h3> <h3>Gender</h3></div>
        {MOCK_DATA_JSON.filter(data=>{
          if (input === "") {
            return data
          }else if (data.first_name.toLowerCase().includes(input.toLowerCase())) {
            return data
          }
        }).map((data,key)=>(
          <div className='data' key={key}>
            <p className='details'>{data.first_name}</p> <p className='details'>{data.last_name}</p> 
            <p className='details'>{data.email}</p> <p className='details'>{data.gender}</p>
          </div>
        ))}
      </div>
    </div>
  */
  );
}

export default App;
