import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Edit = () => {
    const [notes, setNotes] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/notes')
        .then(res=>res.json())
        .then(data=>setNotes(data))
    },[])


    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure, you want to delete this note');
        if(proceed){
            const url = `http://localhost:5000/notes/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data =>{
                console.log(data);
                if(data.deletedCount){
                    alert('Deleted successfully')
                    const remaining = notes.filter( note => note._id !== id);
                    setNotes(remaining)
                }
            })
        }
    }

 

    return (
        <div>
            <h3>Edit your note here</h3>
            {
                notes.map( note => <div key={note._id}>
                    <h3>{note.title}</h3>
                    <Link to={`/notes/edit/${note._id}`}><button>Update</button></Link>
                    <button onClick={() => handleDelete(note._id)}>Delete</button>
                </div>)
            }
        </div>
    );
};

export default Edit;