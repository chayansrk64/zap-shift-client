import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import SocialLogin from '../SocialLogin/SocialLogin';
import axios from 'axios';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const Register = () => {

    const {setLoading, createUser, updateUserProfile } = useAuth();
    const {register, formState: {errors}, handleSubmit} = useForm()
    const location = useLocation();
    const navigate = useNavigate()
    // console.log('location form register', location);
    const axiosSecure = useAxiosSecure()



    const handleRegister = data => {
        // console.log('after register', data.photo[0]);
        const profileImage = data.photo[0];

        createUser(data.email, data.password)
        .then(result => {
            console.log(result.user);
            // prepare form data for image 
            const formData = new FormData()
            formData.append('image', profileImage)

            const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

            axios.post(image_API_URL, formData)
            .then(res => {
                const photoURL = res.data.data.url;

                // create user in the database
                const userInfo = {
                    displayName: data.name,
                    email: data.email,
                    photoURL: photoURL
                }
                axiosSecure.post('/users', userInfo)
                .then(res => {
                    if(res.data.insertedId){
                        console.log('user created in the database');
                    }
                })

                // update user profile 
                const userProfile = {
                    displayName: data.name,
                    photoURL: photoURL
                }

                updateUserProfile(userProfile)
                .then(result => {
                    console.log(result);
                    navigate( location?.state || "/" )
                    setLoading(false)
                })
                .catch(error => console.log(error))

            })

            // setLoading(false)
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
                {/* photo */}
                <label className="label font-bold">Photo</label>
                <input type="file" {...register("photo", {required: true})} className="file-input w-full" placeholder="Photo" />
                {errors.photo?.type === 'required' && <p className='text-red-500'>Photo is required!</p>}
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
           <p className='py-3'>Already Have an account? <Link to="/login" state={location.state} className='text-primary underline font-semibold'>Login</Link> </p>
          <div className='text-center'>or</div>
         <div>
            {/* Google */}
            <SocialLogin></SocialLogin>
         </div>
        </div>
    );
};

export default Register;