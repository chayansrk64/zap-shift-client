import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams()
    const sessionId = searchParams.get('session_id');
    console.log(sessionId);
    const axiosSecure = useAxiosSecure()
    const [paymentInfo, setPaymentInfo] = useState({})

    
    useEffect(() => {
        if(sessionId){
            axiosSecure.patch(`/payment-success?session_id=${sessionId}`)
            .then(res => {
                console.log(res.data);
                setPaymentInfo({
                    trackingId: res.data.trackingId,
                    transactionId: res.data.transactionId
                })
            })
        }
    }, [sessionId, axiosSecure])


    return (
        <div>
            <h3 className="text-3xl font-semibold my-4">Payment Succeesful</h3>
            <p>Tracking Id: <span className="text-red-500 font-bold">{paymentInfo.trackingId}</span> </p>
            <p>Transaction Id: <span className="text-red-500 font-bold">{paymentInfo.transactionId}</span> </p>
        </div>
    );
};

export default PaymentSuccess;