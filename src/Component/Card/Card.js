const Card = ({name,surname,address}) =>{
    return (
       <div>
        <div className="card p-2 m-3">
            <h4>{name}</h4>
            <h4>{surname}</h4>
            <p>{address}</p>

        </div>

       </div>

    )
}
export default Card