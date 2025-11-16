import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const Register = () => {

    const {register, formState: {errors}, handleSubmit} = useForm()

    const handleRegister = data => {
        console.log('after register', data);
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
            <button className="btn bg-[#e9ecf1] text-black border-[#e5e5e5] w-full">
            <svg aria-label="Google logo" width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
            Login with Google
            </button>
         </div>
        </div>
    );
};

export default Register;