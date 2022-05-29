import React, {useState} from 'react'

import {StyledTextInput, ListButton, ListButtonTitle, FormContainer, FormHeader } from './_styles'

const AddToDo = ({addTodo}) => {

    const [input, setTodo] = useState('')

    const onButtonPress = () => {
        // Push input from state to parent component to add to list
        addTodo(input)
        // Clean input field once done
        setTodo('')
    }

    return (
        <FormContainer>
            <FormHeader>Agregar un nuevo elemento de tareas pendientes:</FormHeader>
            <StyledTextInput 
                // set value of field to it's content
                value={input}
                // update state with the user input text
                onChangeText={(text) => setTodo(text)}
            />
            <ListButton onPress={onButtonPress} >
                <ListButtonTitle>Añadir artículo</ListButtonTitle>
            </ListButton>
        </FormContainer>
    )
}

export default AddToDo