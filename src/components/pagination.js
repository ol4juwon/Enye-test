import React ,{ useState }from "react";
import Pagination from 'react-js-pagination';
import User from './users';
import App from '../App'
const Paging= () => {

const todos = [1,2,3,4,5,6,7,8,9,10];
    const todosPerPage = 20;
   const [ activePage, setCurrentPage ] = useState(1);

   const indexOfLastTodo  = activePage * todosPerPage;
   const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
   const currentTodos     = todos.slice( indexOfFirstTodo, indexOfLastTodo );
   const renderTodos = currentTodos.map( ( todo, index ) => {
    return <li key={ index }>{ todo }</li>;
 } );
 const handlePageChange = ( pageNumber ) => {
    console.log( `active page is ${ pageNumber }` );
    setCurrentPage( pageNumber )
 };
 return (
    <div>
       <div className="result">
          { renderTodos }
       </div>
       <div className="pagination">
          <Pagination
             activePage={ activePage }
             itemsCountPerPage={ 20 }
             totalItemsCount={ todos.length }
             pageRangeDisplayed={ 20 }
             onChange={ handlePageChange }
          />
       </div>
    </div>
 )

};

export default Paging