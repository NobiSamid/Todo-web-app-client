import React, { useEffect, useState } from 'react';
import Note from './Note';
import './Home.css';

const Home = () => {
    const [notes, setNotes] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/notes')
        .then(res=>res.json())
        .then(data=>setNotes(data))
    },[])
    // console.log(notes)
    return (
        <div className="home-page">
            <h1>NOTES</h1>
            <div className="all-notes">
               {
                    notes.map(note =><Note key={note._id} note={note}></Note>)
                }
            </div>
            
        </div>
    );
};

export default Home;