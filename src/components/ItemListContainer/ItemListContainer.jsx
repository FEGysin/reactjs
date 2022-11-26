import "./ItemListContainer.css";
function ItemListContainer(props){
const{children}=props
    return(
        <div ClassName="item-list-container"

        >{children}</div>
    )
}
export default ItemListContainer;