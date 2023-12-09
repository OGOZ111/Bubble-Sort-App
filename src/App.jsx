import { useState } from 'react'

function App() {


  const [name, setName] = useState('');
  const [numbers, setNumbers] = useState([]);


  //console.log(numbers)
  const arr = numbers
  
  function reset()
  {setName("");
  
} 


function clear()
{
  setNumbers([])
  setName("")
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
<div className="container">
<div className="box">


<h1>Enter Number and click add to automatically bubble sort</h1>
    <input className='input'
    type='number'
      value={name}
      onChange={e => setName(e.target.value)}
 />


<div className='buttons'>
    <button className='button' onClick={() => {
      setNumbers([
        ...numbers,
        { name: name }
      ]);
      bubbleSort()
      reset()
    }
    
    
    }>Add Number</button>

  <button className='button' onClick={() => {
      clear()
    }
    
    
    }> Reset </button>
    </div>
    <ul>
      {numbers.map(number => (
        <li className='result' key={number.name}>{number.name}</li>
      ))}
    </ul>
    </div>
    </div>


    </>
  )
}







export default App


