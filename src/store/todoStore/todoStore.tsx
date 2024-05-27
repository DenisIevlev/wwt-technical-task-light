import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";


interface ToDo {
    text: string,
    id: string,
    completed: boolean,
}

interface toDoStore {
    todos: ToDo[],
    originalTodos: ToDo[],
    filter: string,
    addItem: (text: string) => void,
    removeItem: (id: string) => void,
    toggleItem: (id: string) => void,
    changeItem: (id: string, newText: string) => void,
    setFilter: (filter: string) => void
}

const useToDoStore = create<toDoStore>((set) => {
    let storageToDoList = JSON.parse(localStorage.getItem('toDoList') || '[]');
    return {
        originalTodos: storageToDoList,
        todos: storageToDoList, 
        addItem: (text) => set((state) => {
            const newToDoList = { text, completed: false, id: uuidv4() };
            const updatedTodos = [...state.todos, newToDoList];
            localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
            return { todos: updatedTodos, originalTodos: updatedTodos };
        }),
        removeItem: (id) => set((state) => {
            const updatedTodos = state.todos.filter((item) => item.id !== id);
            localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
            return { todos: updatedTodos, originalTodos: state.originalTodos };
        }),
        toggleItem: (id) => set((state) => {
            const updatedTodos = state.todos.map((item) => item.id === id ? { ...item, completed: !item.completed } : item);
            localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
            return { todos: updatedTodos, originalTodos: state.originalTodos };
        }),
        changeItem: (id, newText) => set((state) => {
            const updatedTodos = state.todos.map((item) => item.id === id ? { ...item, text: newText } : item);
            localStorage.setItem('toDoList', JSON.stringify(updatedTodos));
            return { todos: updatedTodos, originalTodos: state.originalTodos };
        }),
        filter: '',
        setFilter: (filter) => set({ filter }),
    };
});

export default useToDoStore;