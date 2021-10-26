import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";


const Create = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data =>{
        console.log(data);
         
        axios.post('http://localhost:5000/notes', data)
        .then(res => {
            if(res.data.insertedId){
                alert("Added note successfully")
                reset();
            }
        })

    }
    return (
        <div>
            <h3>Create your note here</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Title" {...register("title")} />
                <input placeholder="Topic" {...register("topic")} />
                <textarea placeholder="Description" {...register("description")} />
                <input type="submit" />
            </form>
        </div>
    );
};

export default Create;