import "./ItemListContainer.css";
function ItemListContainer(props){
const{children}=props
    return(
        <div className="item-list-container"

        >{children}</div>
    )
}
export default ItemListContainer;