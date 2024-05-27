import { UnorderedList } from '@chakra-ui/react';
import useToDoStore from '../../store/todoStore/todoStore';
import { ToDoItem } from '../ToDoItem/toDoItem';



export const ToDoListItems = () => {

    const todos = useToDoStore(state => {
        switch (state.filter) {
            case 'Completed':
                return state.todos.filter(todo => todo.completed);
            case 'Uncompleted':
                return state.todos.filter(todo => !todo.completed);
            default:
                return state.todos;
        }
    });

    return (
        <UnorderedList>
            {todos.map(todo => (
                <ToDoItem key={todo.id} todo={todo} />
            ))}
        </UnorderedList>
    )
}
