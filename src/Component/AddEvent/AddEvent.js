import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddEvent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageUrl, setImageUrl] = useState(null);
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            imageUrl:imageUrl
        }
        console.log(eventData);
        fetch("https://stormy-fjord-03288.herokuapp.com/addEvent", {
            method : "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(eventData)
        })
    };
    const handleImageUpload = event => {
        const imageData = new FormData();
        imageData.set('key', 'b5ae2733ea4541b42ea39743a3671ab3');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(response =>  {
            setImageUrl(response.data.data.display_url);
          })
    }
    return (
        <div className="container">
            <h1>Add your awesome Event here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue="New exciting Event" {...register("name")} /><br></br><br></br>
                <input type ="file" name="image" onChange={handleImageUpload} /><br></br><br></br>
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddEvent;