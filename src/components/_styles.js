import styled from 'styled-components/native'
import { Text, View, FlatList, TouchableOpacity, TextInput } from 'react-native';

export const RootView = styled(View)`
    flex: 1;
`

export const StyledList = styled(FlatList)`
    margin-top: 50px;
`

export const ListButton = styled(TouchableOpacity)`
    background-color: dodgerblue;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 0 5px 0 5px;
`

export const ListButtonTitle = styled(Text)`
    color: white;
    padding-top: 5px;
`

export const FormContainer = styled(View)`
    margin-top: 250px;
`

export const FormHeader = styled(Text)`
    font-size: 18px;
    font-weight: 500;
    padding: 5px;
`

export const StyledTextInput = styled(TextInput)`
    font-size: 18px;
    padding: 5px;
    margin: 5px;
    border-width: 1px;
    border-color: deepskyblue;
    border-radius: 3px;
`