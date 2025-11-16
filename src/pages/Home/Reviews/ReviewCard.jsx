import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div>
             <div className="w-full  bg-white rounded-xl shadow-sm p-6">
      
      {/* Quote Icon */}
      <div className="text-[#A5D5D1] text-5xl">
        &ldquo;
      </div>

      {/* Text Content */}
      <p className="text-secondary text-sm mt-3 leading-relaxed">
        A posture corrector works by providing support and gentle alignment 
        to your shoulders, back, and spine, encouraging you to maintain 
        proper posture throughout the day.
      </p>

      {/* Divider */}
      <div className="border-t border-dashed border-[#A5D5D1] mt-6 mb-4"></div>

      {/* Profile Section */}
      <div className="flex items-center gap-3">
        
        {/* Avatar Circle */}
        <div className="">
            <img className='w-10 h-10 rounded-full' src={review.user_photoURL} alt="" />
        </div>

        {/* Name & Role */}
        <div>
          <h4 className="text-[#004D53] font-semibold">
            {review.userName}
          </h4>
          <p className="text-gray-500 text-sm">
            {review.user_email}
          </p>
        </div>
      </div>

    </div>
        </div>
    );
};

export default ReviewCard;