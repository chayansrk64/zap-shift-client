import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import LoadingSpinner from '../../../components/LoadingSpinner/LoadingSpinner';

const Payment = () => {

    const {parcelId} = useParams();
    const axiosSecure = useAxiosSecure();
    
    const {isPending, isError,  data: parcel = {}, error} = useQuery({
        queryKey: ['parcel', parcelId],
        queryFn: async() => {
            const res = await axiosSecure.get(`/parcels/${parcelId}`)
            // console.log(res.data);
            return res.data;
        }
    })



     const handlePayment = async () => {
        const paymentInfo = {
            cost: parcel.cost,
            parcelId: parcel._id,
            parcelName: parcel.parcelName,
            senderEmail: parcel.senderEmail
        }

        const res = await axiosSecure.post('/create-checkout-session', paymentInfo)
        console.log(res.data);
        // redirect to checkout page;
        window.location.href = res.data.url;

    }





    if(isPending){
        return <LoadingSpinner></LoadingSpinner>
    }
    if(isError){
        return <span>{error.message}</span>
    }



    return (
        <div>
             <h3 className='text-3xl font-semibold'>Payment Here</h3>
            <div>
                <p>Pay {parcel.cost} for {parcel.parcelName}</p>
                <button onClick={handlePayment} className='btn btn-primary text-black'>Payment</button>
            </div>
        </div>
    );
};

export default Payment;