import React from 'react';

const List = (props) =>console.log(props.index)|| (
    <div key={props.index}> 
      <h3>{props.todo}</h3>
      <button onClick={() =>props.handleDelete(props.index)}>Delete</button>
  </div>
  );
  
  export default List;