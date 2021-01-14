import React from 'react'
import { useEffect, useState } from 'react';
import './App.css';
import User from './components/users'
import Paging from './components/pagination'
import DataTable from './components/datatable';

const App = () => {
  const API_URL = 'http://api.enye.tech/v1/challenge/records';

  const [profiles,setProfiles] = useState([]);
  const [search,setSearch] = useState("");
  const [query,setQuery] = useState("");
  //const todos = [];
  // const todosPerPage = 20;
  // const [ activePage, setCurrentPage ] = useState(1);

  // const indexOfLastTodo  = activePage * todosPerPage;
  //  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  //  const currentTodos     = todos.slice( indexOfFirstTodo, indexOfLastTodo );



  useEffect( () => {
getProfiles();
  },[query]);

//   const renderTodos = currentTodos.map( ( todo, index ) => {
//     return <li key={ index }>{ todo }</li>;
//  } );
//   const handlePageChange = ( pageNumber ) => {
//     console.log( `active page is ${ pageNumber }` );
//     setCurrentPage( pageNumber )
//  };
  const getProfiles = async () => {
    const response  = await fetch(API_URL);
    const data = await response.json();
    console.log(data.records.profiles);
    setProfiles(data.records.profiles);
  };

const updateSearch = e => {
  setSearch(e.target.value)
}

const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
}
function searchData(rows){
  const columns = rows[0] && Object.keys(rows[0]);
  return rows.filter((row) => 
    columns.some((column) => row[column].toString().toLowerCase().indexOf(search.toLowerCase()) >-1 ));

}

return(
<div className="App">
  <h1>Hello react  </h1>
  <div className="searchForm">
    <form onSubmit={getSearch} className="search-form">
    <input className="search-bar" type="text" value={search} onChange={updateSearch} />
    <button className="search-Button bg-btn bg-btn-info" type="submit" >Search records</button>
    </form>
  </div>
  {/*profiles.map(profiles => (
 
<User 
  key={profiles.Email}
  name={profiles.FirstName+" "+profiles.LastName}/>

  ))};
 <Paging />*/}
  <DataTable data={searchData(profiles)} />
</div>
  );

};


export default App;
