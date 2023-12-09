import { useState } from 'react'







function App() {


  const [name, setName] = useState('');
  const [numbers, setNumbers] = useState([]);


  //console.log(numbers)
  const arr = numbers
  
  function reset()
  {setName("");
} 
  


 
const bubbleSort = (arr = []) => {
  let swapped;
  do {
     swapped = false;
     for (let i = 0; i < arr.length - 1; i++) {
        if (+arr[i].name > +arr[i + 1].name) {
           let temp = arr[i];
           arr[i] = arr[i + 1];
           arr[i + 1] = temp;
           swapped = true;
        };
     };
  }while (swapped);
}


bubbleSort(arr);
//console.log(arr);


  return (
    <>



<h1>Numbers for Bubble Sort</h1>
    <input
    type='number'
      value={name}
      onChange={e => setName(e.target.value)}
 />



    <button onClick={() => {
      setNumbers([
        ...numbers,
        { name: name }
      ]);
      bubbleSort()
      reset()
    }
    
    
    }>Add</button>
    <ul>
      {numbers.map(number => (
        <li key={number.name}>{number.name}</li>
      ))}
    </ul>


    </>
  )
}







export default App


