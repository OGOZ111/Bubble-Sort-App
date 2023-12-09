import { useState } from 'react'







function App() {


  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);


  console.log(artists)
  const arr = artists
  
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
      setArtists([
        ...artists,
        { name: name }
      ]);
      bubbleSort()
      reset()
    }
    
    
    }>Add</button>
    <ul>
      {artists.map(artist => (
        <li key={artist.name}>{artist.name}</li>
      ))}
    </ul>


    </>
  )
}







export default App


