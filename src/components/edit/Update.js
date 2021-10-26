import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Update = () => {
    const { noteId } = useParams();
    const [keep, setKeep] = useState({});


    useEffect(()=>{
        const url = `http://localhost:5000/notes/${noteId}`;
        fetch(url)
        .then(res =>res.json())
        .then(data => setKeep(data));
    }, []);

    // update User
    const handleTitleChange = e =>{
        const updatedTitle = e.target.value;
        const updatedNote = {
            title: updatedTitle, topic: keep.topic, description: keep.description
        };
        setKeep(updatedNote)
    }
    const handleTopChange = e =>{
        const updatedTop = e.target.value;
        // const updatedNote = {...keep};
        // updatedNote.title = updatedTop
        const updatedNote = {
            title: keep.title, topic: updatedTop, description: keep.description
        };
        setKeep(updatedNote)
    }
    const handleDesChange = e =>{
        const updatedDes = e.target.value;
        const updatedNote = {
            title: keep.title, topic: keep.topic, description: updatedDes
        };
        setKeep(updatedNote)
    }

    const handleUpdateNote = e =>{
        const url = `http://localhost:5000/notes/${noteId}`;
        fetch(url, {
            method:'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(keep)
        })
        .then(res => res.json())
        .then(data =>{
            if(data.modifiedCount > 0){
                alert('Updated successfully')
                setKeep({});
            }
        })


        // fetch(url, {
        //     method:'PUT',
        //     headers:{
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(keep)
        // })
        // .then(res => res.json())
        // .then(data =>{
        //     if
        // })
        e.preventDefault()
    }
    return (
        <div>
            <h1>Update Note for : {keep.title} :: {keep.topic}  :: {keep.description}</h1>
            <form onSubmit={handleUpdateNote}>
            <input type="text" onChange={handleTitleChange} value={keep.title || ''} placeholder="Title" />
            <input type="text" onChange={handleTopChange} value={keep.topic || ''} placeholder="Topic" />
            <textarea type="text" onChange={handleDesChange} value={keep.description || ''} placeholder="Description" />
            <input type="submit" value="Submit" />
        </form>
        </div>
    );
};

export default Update;