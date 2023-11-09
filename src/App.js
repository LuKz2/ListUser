import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import listUser from "./views/listUser";
import formUser from "./views/formUser";
import { Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';
import { UsersProvider } from "./context/UsersContext";

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <UsersProvider>
            <NavigationContainer>
                <Stack.Navigator
                    initialRouteName="listUser"
                    screenOptions={screenOptions}
                >
                    <Stack.Screen
                        name="listUser"
                        component={listUser}
                        options={({ navigation }) => {
                            return {
                                title: "Lista de Usuários",
                                headerRight: () => (
                                    <Button
                                        onPress={() => navigation.navigate('formUser')}
                                        type="clear"
                                        icon={<Icon name="plus" size={25} color="white" />}

                                    />

                                )

                            }
                        }}
                    />
                    <Stack.Screen
                        name="formUser"
                        component={formUser}
                        options={{
                            title: "Formulario de Usuários"
                        }}

                    />
                </Stack.Navigator>
            </NavigationContainer>
        </UsersProvider>
    )
}

const screenOptions = {
    headerStyle: {
        backgroundColor: '#f4511e'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold'
    }
}