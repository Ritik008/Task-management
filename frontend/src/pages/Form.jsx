import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../constant';
import { useSearchParams } from 'react-router-dom';

const Form = () => {
    
    const initialState = {
        title: '',
        description: ''
    }

    const [formData, setFormData] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmit, setIsSubmit] = useState(false)
    const changeHandler = (e) => {
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    const submitHandler = (e) => {
        e.preventDefault()
        setErrors(handleError(formData))
        setIsSubmit(true)
    }

    const handleError = (value) => {
        const error = {}
        if(value.title === '') {
            error.title = 'Title is required'
        }
        if(value.description === '') {
            error.description = 'Description is required'
        }
        return error
    }

    const resetForm = () => {
        setFormData(initialState)
    }
    const submitData = async () => {
        try {
            const response = await axios.post(`${BASE_URL}/api/tasks`, formData)
            if(response.status === 201) {
                alert("Task added successfully")
                resetForm()
            }
        }catch(error){
            console.error(error)
        }
    }
    
    useEffect(() => {
        if(Object.keys(errors).length === 0 && isSubmit) {
            submitData()
        }
    }, [errors])

    return (
        <div className="max-w-lg mx-auto mt-8">
            <form  onSubmit={submitHandler} className="bg-white border rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                        Title
                    </label>
                    <input
                        className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-900 leading-tight"
                        id="title"
                        type="text"
                        placeholder="Enter title"
                        onChange={changeHandler}
                        name="title"
                        value={formData.title}
                    />
                    <p className='text-red-600'>{errors.title}</p>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                        Description
                    </label>
                    <textarea
                        className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-900leading-tight"
                        id="description"
                        placeholder="Enter description"
                        rows="4"
                        onChange={changeHandler}
                        name="description"
                        value={formData.description}
                    ></textarea>
                     <p className='text-red-600'>{errors.description}</p>
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className=" text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Form;
