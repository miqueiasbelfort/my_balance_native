import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

//pages
import Home from "./pages/Home"

function Router(){
    return(
        <Stack.Navigator>
           <Stack.Screen name="Home" component={Home}/> 
        </Stack.Navigator>
    )
}
export default Router