const Card = ({id,name,surname,address,removeData,editData}) =>{
    return (
       <div>
        <div className="card p-2 m-3">
            <h4>{name}</h4>
            <h4>{surname}</h4>
            <p>{address}</p>

            <p onClick={()=>{
                removeData(id)
            }}>🗑</p>


            <p onClick={()=>{
                editData(id)
            }}>✏</p>

        </div>

       </div>

    )
}
export default Card