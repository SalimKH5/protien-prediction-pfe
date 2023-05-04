import React, { useState } from 'react'
import "./Prediction.css"
function Prediction() {

    const [protein,setProtein]=useState()

    function isValidFastaInput(input) {
      // Define regular expression to match FASTA format
      const fastaRegex = /^(>sp\|[A-Z0-9]+\|[A-Z0-9_]+ .+\n([A-Z\n]{41,})|[A-Z\n]{41,})$/gm

    
      // Check if input matches the regular expression
      return fastaRegex.test(input);
    }
    
    


    const handleTextAreaChange = (event) => {
      const isValid = isValidFastaInput(event.target.value);
      if (isValid) {
        console.log("Input is a valid FASTA format");
        
      } else {
        console.log("Input is not a valid FASTA format");
      }  
      setProtein(event.target.value);
      
      }
  return (
    <div className="prediction-container">
        <h1>Please Inter your Protien Sequence</h1>
        <textarea name="" id="" onChange={handleTextAreaChange}  value={protein} placeholder='enter a full-length protein sequence for prediction, with optional FASTA header line'>
        </textarea>
        <h1>The function of your protien sequence is :</h1>
        <div className="result-predictions">
                <h1>{protein}</h1>
        </div>
    </div>
  )
}

export default Prediction