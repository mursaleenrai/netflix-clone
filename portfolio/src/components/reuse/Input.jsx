import React, { useState } from 'react';
import Button from './Button';
import { useForm } from 'react-hook-form'

function Input() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);


    return (
        <div className='email-input-container'>
            <form className='form' onSubmit={handleSubmit(onSubmit)} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: '1rem',
                gap: '8px'
            }}>
                <input
                    {...register('email', { required: true })}
                    type="email"
                    id="email"
                    required
                    placeholder='Email address'
                />

                <Button />
            </form>
            {/* {errors.email?.type === 'required' ? <p style={{
                color: 'red',
                opacity: '0.9'
            }}>This field is required</p> : null} */}
        </div>
    );
}

export default Input;
