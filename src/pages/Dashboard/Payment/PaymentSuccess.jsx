import { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams()
    const sessionId = searchParams.get('session_id')
    console.log(sessionId);
    const axiosSecure = useAxiosSecure()

    
    useEffect(() => {
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res => {
                console.log(res.data);
            })
        }
    }, [sessionId, axiosSecure])


    return (
        <div>
            <h3 className="text-3xl">Payment Succeesful</h3>
        </div>
    );
};

export default PaymentSuccess;