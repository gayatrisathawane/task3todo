import { useEffect, useState } from "react"
import Card from './../../Component/Card/Card'

import showToast from 'crunchy-toast';

const Task = () => {

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('')
    const [address, setAddress] = useState('')
    const [search, setSearch] = useState('')
    const [id, setId] = useState(0)
    const [edit, setEdit] = useState(false);

    const [dataList, setDataList] = useState([
        {
            id: 1,
            name: "gayatri",
            surname: "sathawane",
            address: "pune"

        },
        {
            id: 2,
            name: "Nilam",
            surname: "sathawane",
            address: "Warathi"

        }
    ])

    // input fields value



    // const addNitification = () => {
    //     if (!name) {
    //         showToast('fiiled req', 'alert', 6000);
    //         return false
    //     }
    //     if (!surname) {
    //         showToast('fiiled req', 'alert', 6000);
    //         return false
    //     }
    //     if (!address) {
    //         showToast('fiiled req', 'alert', 6000);
    //         return false
    //     }
    // }



  
    //add Data
    const randomId = Math.floor(Math.random() * 1000)
    const addData = () => {

        if (!name) {
            showToast(' name fiiled req', 'alert', 6000);
            return false
        }
        if (!surname) {
            showToast(' surname fiiled req', 'alert', 6000);
            return false
        }
        if (!address) {
            showToast(' address fiiled req', 'alert', 6000);
            return false
        }

        const obj = {
            id: randomId,
            name: name,
            surname: surname,
            address: address
        }

        const newarray = [...dataList, obj]
        setDataList(newarray)
        saveToLocalStorage(newarray)

        setName('')
        setSurname('')
        setAddress('')

        showToast('Task added successfully', 'success', 6000);
    }

    const saveToLocalStorage = (task) => {
        localStorage.setItem('todolist', JSON.stringify(task))
    }

    //remove data 

    const removeData = (id) => {

        let index;

        dataList.forEach((task, i) => {
            if (task.id == id) {
                index = i
            }
        })

        const temarray = dataList
        temarray.splice(index, 1)
        setDataList([...temarray])
        saveToLocalStorage(temarray)
        showToast('Remove data permantally', 'alert', 6000);

    }

    //edit data 

    const editData = (id) => {
        console.log(id)

        setEdit(true)
        setId(id)

        let currentData;

        dataList.forEach((task, i) => {
            if (task.id === id) {
                currentData = task;
            }
        })

        setName(currentData.name)
        setSurname(currentData.surname)
        setAddress(currentData.address)

    }


    //update data 

    const updateData = () => {
        let indexUpdate;

        dataList.forEach((task, i) => {
            if(task.id===id){

            indexUpdate = i
            }

        })

        const temparray = dataList;
        temparray[indexUpdate] = {
            name: name,
            surname: surname,
            address: address
        }
        setDataList([...temparray])
        saveToLocalStorage(temparray)
        setAddress('')
        setName('')
        setSurname('')
        setEdit(false)

    }



    useEffect(() => {

        const list = JSON.parse(localStorage.getItem('todolist'))
        if(list && list.length > 0 ){
          setDataList(list)
        }
      

    }, [])


    const cancelData = () =>{
        setEdit(false)
        setName('')
        setAddress('')
        setSurname('')
    }

    //filter function 
    
    const filterData = dataList.filter((data, i) => {

        const name = data.name.toLowerCase()
        const location = data.address.toLowerCase();

        const searchQuery = search.toLowerCase();

        return (name.includes(searchQuery) || (location.includes(searchQuery)))
   })
  





        

 






    return (
        <div>

            <h1 className="text-center bg-warning ">To do List</h1>

            <div className="d-flex justify-content-around mt-4">
                <div>
                    <h1>{edit ? "UPDATE STUDENT DATA" : "ADD STUDENT DATA"}</h1>

                    <div class="input-group mb-3 mt-5">
                        <span className="input-group-text" id="inputGroup-sizing-default">Name</span>

                        <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={name} onChange={(e) => {
                            setName(e.target.value)

                        }} />
                    </div>

                    <div class="input-group mb-3">
                        <span className="input-group-text mt-3" id="inputGroup-sizing-default">Surname</span>

                        <input type="text" className="form-control mt-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={surname} onChange={(e) => {
                            setSurname(e.target.value)
                        }} />
                    </div>
                    <div class="input-group mb-3">
                        <span className="input-group-text mt-3" id="inputGroup-sizing-default">Address</span>

                        <input type="text" className="form-control mt-3" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value={address} onChange={(e) => {
                            setAddress(e.target.value)
                        }} />
                    </div>

                    <div className=" d-flex justify-content-around">
                        {edit ? <><button type="button" onClick={updateData}>Update Data</button>  <button type="button" onClick={cancelData }>cancel</button> </>:
                            <button type="button" onClick={addData}>Add Data</button>}



                    </div>







                </div>
                <div>
                    <h1>SHOW DATA </h1>
                    <input type="text " value={search} onChange={(e) => {
                        setSearch(e.target.value)
                    }} />



                    {
                        filterData.map((data, i) => {
                            const { name, surname, address, id } = data
                            return (
                                <Card name={name}
                                    surname={surname}
                                    address={address}
                                    removeData={removeData}
                                    key={i}
                                    editData={editData}
                                    id={id} />
                            )
                        })
                    }

                    {
                        dataList.length === 0 ? 'no data' : null
                    }

                </div>


            </div>





        </div>

    )
}
export default Task