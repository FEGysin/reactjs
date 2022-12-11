import "./Card.css"
export default function Card(props){
    const {children}=props;
    return(
        <div className="card__container">{children}</div>
    )
}