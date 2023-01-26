import { useState } from 'react';
import MOCK_DATA from './MOCK_DATA.json'

function App() {
  // searchTerm
  const [searchTerm, setSearchTerm] = useState('');
  // set input value to searchTerm
  const inputVal = (e) => {
    setSearchTerm(e.target.value)
  }
  return (
    <div className="App">
      <input type='text' placeholder='Search .....' onChange={inputVal} />
      <div className='filter_container'>
        {
          MOCK_DATA.filter(data => {
            if (searchTerm === '') {
              return data
            } else if (data.first_name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
              return data
            }
          })
            .map(data => {
              return (
                <p key={data.id}>{data.first_name}</p>
              )
            })
        }
      </div>
    </div>
  );
}

export default App;
