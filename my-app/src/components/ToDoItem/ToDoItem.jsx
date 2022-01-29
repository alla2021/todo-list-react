import React from 'react';
 
const ToDoItem = ({todo}) => {
   return (
       <div>
           {todo.task}
       </div>
   );
};
 
export default ToDoItem;