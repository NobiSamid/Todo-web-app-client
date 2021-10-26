import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Note = (props) => {
    const { title, topic, description, _id } = props.note || {};
    return (
        <div className="note-card">
            <h4>{title}</h4>
            <small>{topic}</small>
            <p>{description}</p>
            <Link to={`/notes/${_id}`}>
                <button>Expand</button>
            </Link>
        </div>
    );
};

export default Note;