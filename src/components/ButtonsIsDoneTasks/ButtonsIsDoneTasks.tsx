import { Box, Button } from '@chakra-ui/react';
import useToDoStore from '../../store/todoStore/todoStore';
import { useTranslation } from 'react-i18next';

export const ButtonsIsDoneTasks = () => {

    const setFilter = useToDoStore(state => state.setFilter);

    const { t } = useTranslation();


    const handleFilterChange = (filter: string) => {
        setFilter(filter);
    };
    
    return (
        <Box >
        <Button variant='outline' colorScheme='green' onClick={() => handleFilterChange('Completed')}>{(t as Function)('completedTasks')}</Button>
        <Button variant='outline' colorScheme='green' onClick={() => handleFilterChange('Uncompleted')} marginLeft="10px">{(t as Function)('uncompletedTasks')}</Button>
        </Box>
    )
}