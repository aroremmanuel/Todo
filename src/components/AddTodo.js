import { Button, HStack, useToast } from '@chakra-ui/react';
import React from 'react'
import {useState} from 'react';
import { nanoid } from 'nanoid';


function AddTodo({addTodo}) {

    const toast = useToast();
    
    function handleSubmit( e) {
        e.preventDefault();

        if (!content) {
            toast({
                title: 'No Todo Added',
                status: 'error',
                duration: 2000,
                isClosable: true,
            });
            return;
        }
        
        const todo = {
            id: nanoid(),
            body: content,
        };
        
        addTodo(todo);
        setContent('');
    } 

    const [content, setContent] = useState('');
    
  return (
    <form onSubmit={handleSubmit}>
        <HStack
            mt='8'
        >
            <input 
                variant='filled' 
                placeholder='Add Todo' 
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <Button
                type='submit'
                colorScheme='pink'
                px='8'
            >Add Todo</Button>
        </HStack>
    </form>
  )
}

export default AddTodo