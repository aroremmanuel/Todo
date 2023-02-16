import {
  ChakraProvider,
  theme,
  Heading,
  VStack,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import { useState } from 'react';

function App() {

const [todos, setTodos] = useState(
  () => JSON.parse(localStorage.getItem('todos')) || []
);


function deleteTodo(id) {
  const newTodos = todos.filter((todo) => {
    return todo.id !== id;
  })
  setTodos(newTodos);
}

function addTodo(todo) {
  setTodos([...todos, todo]);
}


  return (
    <ChakraProvider theme={theme} >
      <VStack p={4}>
      <ColorModeSwitcher />
      <Heading
      mb='8'
      fontWeight='extrabold'
      size='2xl'
      bgGradient='linear(to-r, pink.500, pink.300, blue.500)'
      bgClip='text'
      >
        Todo Application
      </Heading>
      <TodoList todos={todos} deleteTodo={deleteTodo} />
      <AddTodo addTodo={addTodo} />
      </VStack>
    </ChakraProvider>
  );
}

export default App;
