import { useReducer } from "react"
import context from "../Context/context"
import reducer from "./reducer"
import store from "./store"
export default  function Provider(props){
const {children} =props
const [myStore,dispatch] = useReducer(reducer,store)
const value={store:myStore,dispatch}
return <context.Provider value={value}>{children}</context.Provider>
}
