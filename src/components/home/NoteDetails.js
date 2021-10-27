import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const NoteDetails = () => {

    const { notesKey } = useParams();

    const [details, setDetails] = useState({});
    useEffect(()=>{
        fetch(`https://morning-dusk-99977.herokuapp.com/notes/${notesKey}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])

    // const handleDelete = id =>{
    //     const url = `http://localhost:5000/notes/${id}`;
    //     fetch(url, {
    //         method: 'DELETE'
    //     })
    //     .then(res=>res.json())
    //     .then(data =>{
    //         console.log(data);
    //         if(data.deletedCount){
    //             alert('Deleted successfully')
    //             // const remaining = details.filter( note => note._id !== id);
    //             // setDetails(remaining)
    //         }
    //     })
    // }

    return (
        <div>
            <h3>Note details</h3>
            <h2>Title:{details.title}</h2>
            <small>Topic:{details.topic}</small>
            <p>{details.description}</p>
            {/* <button>Edit</button>
            <Link to="/notes">
                <button onClick={() => handleDelete(details._id)}>Delete</button>
            </Link> */}
        </div>
    );
};

export default NoteDetails;