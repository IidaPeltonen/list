import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const names = ['Jorma', 'Erkki', 'Taneli','Kalle', 'Reino'];
    setItems(names);
    console.log(items);
  }, [] )
  
  return (
      <div style={{margin: '30pvx'}}>
        <h3>Names</h3>
        <ul>
          {items.map(item => (
            <li key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
  );
}

export default App;
