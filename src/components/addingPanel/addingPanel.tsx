import { Box, Input, Button } from '@chakra-ui/react';
import useToDoStore from "../../store/todoStore/todoStore";
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

export const AddingPanel = () => {

	const [text, setText] = useState('');

	const { t } = useTranslation();

	const addItem = useToDoStore(state => state.addItem);


	const handleSubmit = (event: React.SyntheticEvent) => {
		event.preventDefault();
		if (!text.trim()) return;
		addItem(text);
		setText('');
	}
	return (
		<Box height="100px" display="flex" alignItems="center" justifyContent="center">
			<Input htmlSize={20} width="auto" type="text" value={text} onChange={(event) => setText(event.target.value)} />
			<Button onClick={handleSubmit} marginLeft="10px" variant='outline' colorScheme='cyan' height="40px" width="100px">{(t as Function)('addButton')}</Button>
		</Box>
	)
}
