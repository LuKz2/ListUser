import { useContext, useState } from 'react'
import { Text, View, TextInput, StyleSheet } from "react-native";
import { Button } from 'react-native-elements';
import UsersContext from '../context/UsersContext';

export default ({ route, navigation }) => {
    const [user, setUser] = useState(route.params ? route.params : {})
    const {dispatch} = useContext(UsersContext)
    return (
        <View style={style.form}>
            <Text>
                Nome
            </Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUser({ ...user, name })}
                placeholder='Digite seu nome'
                value={user.name}
            />
            <Text>
                Email
            </Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUser({ ...user, email })}
                placeholder='Digite seu Email'
                value={user.email}
            />
            <Text>
                URL do avatar
            </Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUser({ ...user, avatarUrl })}
                placeholder='Digite seu URL do avatar'
                value={user.avatarUrl}
            />

            <Button
            title="Salvar"
            onPress={() =>{
                dispatch({
                    type:user.id ? 'updateUser' : 'createUser',
                    payload:user,
                })
                navigation.goBack()
            }}
            />
        </View>
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 0.5,
        marginBottom: 15
    }
})