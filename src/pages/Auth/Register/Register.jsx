import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {

    const { createUser } = useAuth();

    const {register, formState: {errors}, handleSubmit} = useForm()

    const handleRegister = data => {
        console.log('after register', data);
        createUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
        })
        .catch(error => {
            console.log(error);
        })
    }

    return (
        <div>
            <div className='py-6'>
                <h3 className="text-4xl font-bold">Create an Account</h3>
                <p className='font-semibold py-2'>Register with ZapShift</p>
            </div>
           <form onSubmit={handleSubmit(handleRegister)}>
                <fieldset className="fieldset">
                    {/* name */}
                <label className="label font-bold">Name</label>
                <input type="text" {...register("name", {required: true})} className="input w-full" placeholder="Name" />
                {errors.name?.type === 'required' && <p className='text-red-500'>Name is required!</p>}
                {/* email */}
                <label className="label font-bold">Email</label>
                <input type="email" {...register("email", {required: true})} className="input w-full" placeholder="Email" />
                {errors.email?.type === 'required' && <p className='text-red-500'>Email is required!</p>}
                {/* password */}
                <label className="label font-bold">Password</label>
                <input type="password" {...register('password', {required: true, minLength: 6})} className="input w-full" placeholder="Password" />
                {errors.password?.type === 'required' && <p className='text-red-500'>Password is required!</p>}
                {errors.password?.type === 'minLength' && <p className='text-red-500'>Password should be at least 6 character!</p>}

                <button className="btn bg-primary  mt-4">Register</button>
            </fieldset>
           </form>
           <p className='py-3'>Already Have an account? <Link to="/login" className='text-primary underline font-semibold'>Login</Link> </p>
          <div className='text-center'>or</div>
         <div>
            {/* Google */}
            <SocialLogin></SocialLogin>
         </div>
        </div>
    );
};

export default Register;