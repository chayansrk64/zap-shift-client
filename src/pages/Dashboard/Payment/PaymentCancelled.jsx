import React from 'react';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
        <div>
            <h3 className="text-3xl font-semibold">Payment Cancelled. Try Again.</h3>
            <Link to="/dashboard/my-parcels">
             <button className="btn btn-primary text-black">Try Again</button>
            </Link>
        </div>
    );
};

export default PaymentCancelled;