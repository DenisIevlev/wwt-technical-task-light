import { Box, Checkbox, Editable, EditablePreview, EditableInput, Button } from '@chakra-ui/react';
import useToDoStore from '../../store/todoStore/todoStore';
import { useTranslation } from 'react-i18next';


interface ToDo {
    id: string,
    text: string,
    completed: boolean,
}

interface ToDoListItemProps {
    todo: ToDo
}


export const ToDoItem = ({todo}: ToDoListItemProps) => {


    const {removeItem, toggleItem, changeItem} = useToDoStore();

    const { t } = useTranslation();


    const handleTextChange = (newText: string) => {
        changeItem(todo.id, newText);
    };


    return (
        
        <Box maxW="90rem" margin="10px" display="flex" justifyContent="center" alignItems="center">
        <Checkbox colorScheme='green' isChecked={todo.completed} onChange={() => toggleItem(todo.id)}/>
        <Editable marginLeft="10px" width="auto" defaultValue={todo.text} onChange={(newText) => handleTextChange(newText)} >
        <EditablePreview css={todo.completed ? { textDecoration: "line-through" } : 'none'} />
        <EditableInput />
        </Editable>
        <Button marginLeft="10px" variant='outline' colorScheme='red' height="40px" width="100px" onClick={() => removeItem(todo.id)}>{(t as Function)('deleteButton')}</Button>
        </Box>
    )
}
