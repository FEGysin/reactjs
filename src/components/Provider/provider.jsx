import { useReducer } from "react"
import context from "../Context/context"
import reducer from "./reducer"
import myStore from "./store"
export default  function Provider(props){
const {children} =props
const [store,dispatch] = useReducer(reducer,myStore)
const value={myStore:store,dispatch}
return <context.Provider value={value}>{children}</context.Provider>
}
