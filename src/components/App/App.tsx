import { Box } from '@chakra-ui/react'
import {AddingPanel} from '../addingPanel';
import {ToDoListItems} from '../toDoListItems';
import { ButtonsIsDoneTasks } from '../ButtonsIsDoneTasks';;

export const App = () => {

	return (
		<Box
			maxW="40rem"
			mx="auto"
			minH="100dvh"
			boxShadow='dark-lg' p='6' rounded='md' bg='white' opacity="0.8"
		>
		<AddingPanel/>
		<ButtonsIsDoneTasks/>
		<ToDoListItems/>
		</Box>
	)
}
