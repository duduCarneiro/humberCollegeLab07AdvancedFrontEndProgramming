
export default function Todos(props) {
   return (
   <div>
      <ul>
         {props.todosList.map((todo) => (
         <li>
            <input type="checkbox" name="search" value="search"/><label for="search"><b>{todo.taskName}</b> is due in {todo.deadline}</label>
         </li>
         ))}
      </ul>
   </div>
   );
}

    // Todos should     display the list of todo items. 
