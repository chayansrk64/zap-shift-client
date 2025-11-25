import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Rider = () => {

    const axiosSecure = useAxiosSecure()
        const {user} = useAuth()
         // react hook form
        const {register, handleSubmit, control,  } = useForm()

         const serviceCenter = useLoaderData();
            const allRegion = serviceCenter.map(r => r.region)
            const regions = [...new Set(allRegion)]

             const districtsByRegion = region => {
            const regionDistricts = serviceCenter.filter(c => c.region === region)
            const districts = regionDistricts.map(d => d.district)
            return districts;
            }
     
             
        const riderRegion = useWatch({control, name: 'region'})

        const handleRiderApplication = data => {
            console.log(data);
            // create a rider in the database;
            axiosSecure.post('/riders', data)
            .then(res => {
                if(res.data.insertedId){
                    Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Rider request is posted! Please wait for update!",
                    showConfirmButton: false,
                    timer: 2000
                    });
                }
            })
        }

    return (
        <div>
            <h3 className='text-3xl font-semibold'>Be a Rider</h3>
              {/* form */}
            <form onSubmit={handleSubmit(handleRiderApplication)} className="my-6">
          
                {/* two column: sender and recevier details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* sender info */}
                     <fieldset className="fieldset">
                        {/* Rider name */}
                        <h4 className="text-xl font-semibold">Rider Details</h4>
                        <label className="label">Rider Name</label>
                        <input type="text" {...register('riderName')} defaultValue={user?.displayName} className="input w-full" placeholder="Rider Name" />
                        {/* Rider email */}
                        <label className="label">Rider Email</label>
                        <input type="email" {...register('email')} defaultValue={user?.email} className="input w-full" placeholder="Rider Email" />
                        {/* Rider region */}
                        <fieldset className="fieldset">
                        <legend className="fieldset-legend">Region</legend>
                        <select {...register('region')} defaultValue="Pick a region" className="select w-full">
                            <option disabled={true}>Pick a Region</option>
                            {
                                regions.map((region, index) =>  <option value={region} key={index}>{region}</option>)
                            }
                        </select>
                        </fieldset>
                         {/* Rider district */}
                        <fieldset className="fieldset">
                        <legend className="fieldset-legend">District</legend>
                        <select {...register('district')} defaultValue="Pick a District" className="select w-full">
                            <option disabled={true}>Pick a District</option>
                            {
                                districtsByRegion(riderRegion).map((region, index) =>  <option value={region} key={index}>{region}</option>)
                            }
                        </select>
                        </fieldset>
                        
                        {/* Your address */}
                        <label className="label">Your Address</label>
                        <input type="text" {...register('address')} className="input w-full" placeholder="Your Address" />
                        
                    </fieldset>
                    {/* Receiver info */}
                     <fieldset className="fieldset">
                        {/* Driving License */}
                        <h4 className="text-xl font-semibold">More Details</h4>
                        <label className="label">Driving License</label>
                        <input type="text" {...register('license')} className="input w-full" placeholder="Driving License" />
                        {/* receiver email */}
                        <label className="label">NID</label>
                        <input type="text" {...register('nid')} className="input w-full" placeholder="NID" />
                        {/* receiver email */}
                        <label className="label">Bike Info</label>
                        <input type="text" {...register('bike')} className="input w-full" placeholder="Bike Info" />
                    
                    </fieldset>
                </div>
                {/* proceed button */}
                <input type="submit" value="Apply as a Rider" className="btn btn-primary w-full text-black my-8" />
            </form>
        </div>
    );
};

export default Rider;