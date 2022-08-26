import {createNativeStackNavigator} from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator()

//pages
import Home from "./pages/Home"
import Details from "./pages/Details"

function Router(){
    return(
        <Stack.Navigator>
           <Stack.Screen name="Home" component={Home}/> 
           <Stack.Screen name="Sobre" component={Details}/> 
        </Stack.Navigator>
    )
}
export default Router