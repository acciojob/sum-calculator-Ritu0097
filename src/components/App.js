import React from "react";
import './../styles/App.css';
import { useState,useEffect } from "react";

const App = () => {
  const [numbers, setNumbers] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const calculateSum = async () => {
      let sum = 0;
      for (const num of numbers) {
        sum += num;
      }
      setTotalSum(sum);
    };
    calculateSum();
  }, [numbers]);

  const handleNumberInputChange = (event) => {
    const inputValue = parseInt(event.target.value);
    setNumbers([...numbers, inputValue]);
  };
  return (
    <div>
        <h2>Sum Calculator</h2>
      <input type="number" onChange={handleNumberInputChange}/>
      <div>
        <p>Sum: {totalSum}</p>
      </div>
    </div>
  )
}
export default App
