import { useState } from "react";
import "./MortgageCalculator.css"
import { Paper } from "@mui/material";



export default function MortgageCalculator() {
  
  const suffixMap = {
    total:'K',
    aip:'%',
    term:' year'
  }
  
  const [input, setInput]=useState({
    total:'100K',
    aip:'3%',
    term:'30 year'
  })



  const onChange = (event)=> {
    const scrubbedInput = `${String(event.target.value).match(/[0-9]*[.]*[0-9]*/)}${suffixMap[event.target.id]}`

    setInput((prev)=>({
      ...prev, [event.target.id] : scrubbedInput
    }))
  }

  const P = parseFloat(input.total) * 1000
  const i = parseFloat(input.aip) /100 /12;
  const n = parseInt(input.term) * 12;

  const monthly = ()=>{
    if(i==0) return Math.round(P/n)
    return Math.round(P*(i*(1+i)**n)/((1+i)**n - 1));
  }

  const totalPayment = ()=>{
    if(i==0) return P

    return Math.round(n * monthly());
  }

  const interestPayment = ()=>{
    if(i==0) return 0;

    return Math.round(totalPayment() - P);
  }
  
  return (
    <Paper>
    <h1>Mortgage Calculator</h1>
    <div className="content-container">
    <Form onChange={onChange} input={input} contentArr={Object.keys(input)}>
    </Form>
    </div>
    <div><h2>{`${"Monthly Mortgage Payment:"}`}</h2><h2>{`$${monthly()}`}</h2></div>
    <div><h2>{`${"Total Payment Amount:"}`}</h2><h2>{`$${totalPayment()}`}</h2></div>
    <div><h2>{`${"Total Interest Paid:"}`}</h2><h2>{`$${interestPayment()}`}</h2></div>

    </Paper>
    
  );
}

function Input({id, onChange, value}) {
  return (
    
      <div className="input-row" key={id}>
      <label htmlFor={id}>{id}:</label>
      <input name={id} id={id} type="text" value={`${value}`} onChange={onChange}/>
      </div>
      
    
  );
}

function Form({contentArr, onChange, input}) {
  return (
    <form> 
      <div className="form-container">
      {contentArr.map(id=>Input({id, onChange, value: input[id]}))}
      </div>
    </form>
  )
}