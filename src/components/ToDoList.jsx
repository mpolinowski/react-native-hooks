import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import { v4 as uuidv4 } from 'uuid';

import { StyledList, ListButton, ListButtonTitle } from './_styles'
import AddToDo from './AddToDo';

const ToDoList = () => {

    const [todos, setTodos] = useState([
        {text: 'Qué tengas un lindo día!', id: `${uuidv4()}`},
    ])

    const addTodo = (text) => {
        setTodos([...todos, { text, id: `${uuidv4()}`}])
    }

    const [count, setCount] = useState(0)

    useEffect (() => {
        console.log('useEffect', todos)
    }, [todos])

    return (
        <View>
            <StyledList 
                data={todos}
                keyExtractor={(todo) => todo.id}
                renderItem={ ({ item }) => {
                    return (
                        <Text>{item.text}</Text>
                    )
                }}
            />
            <AddToDo addTodo={addTodo} />
            <ListButton onPress={() => setCount(count +1)} >
                <ListButtonTitle>Current count: {count}</ListButtonTitle>
            </ListButton>
        </View>
    )
}

export default ToDoList