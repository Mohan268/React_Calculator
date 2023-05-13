import React, { useState} from "react";
import "./Calculator.css"

function Calculator(){
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [error, setError] = useState("");
    const [result, setResult] = useState("");

    function validInput(){
        if(num1 === ""){
          setError("Error: Num1 cannot be empty");
            return false;
        }
        if(num2 === ""){
            setError("Error: Num2 cannot be empty")
            return false;
        }
       return true;
    }
     
    function handleAddition(){
     if(validInput()){
        const ans = parseFloat(num1) + parseFloat(num2);
        setResult(ans);

       }
     }
     function handleSubtraction(){
        if(validInput()){
           const ans = parseFloat(num1) - parseFloat(num2);
           setResult(ans);
          
          }
        }
        function handleMultiplication(){
            if(validInput()){
               const ans = parseFloat(num1) * parseFloat(num2);
               setResult(ans);
           
              }
            }
            function handleDivision(){
                if(validInput()){
                  if(parseFloat(num2) === 0){
                    setError("Num2 should not be 0");
                  }
                   const ans = parseFloat(num1) / parseFloat(num2);
                   setResult(ans);
                
                  }
                }
           
           function handleNum1(event){
            setNum1(event.target.value)
           }
           function handleNum2(event){
            setNum2(event.target.value)
           }

        return(
               
        <div className="calculator">
              <h2>React Calculator</h2>
            <div className="inputs">
               <input placeholder="Num1" className="numbers" type="text" id="num1" value={num1} onChange={handleNum1}/>
               <input placeholder="Num2" className="numbers"  type="text" id="num2" value={num2} onChange={handleNum2}/>
            </div>
            <div className="operations">
               <button className="btn" onClick={handleAddition}>+</button>
               <button className="btn" onClick={handleSubtraction}>-</button>
               <button className="btn" onClick={handleMultiplication}>*</button>
               <button className="btn" onClick={handleDivision}>/</button>
            </div>
           <div className="results">
             {error ? (
                <p className="error">{error}</p>
             ): (
              <>
                 {result &&(
                    <>
                    <p className="result">Result = {result}</p>
                    <p className="resultMessage">Success: Your result is shown above!</p>
                    </>
                 )}
 
              </>
             )}
           
           </div>
       </div>


        )
}

export default Calculator;