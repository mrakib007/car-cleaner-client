import React from 'react';
import ReviewData from '../ReviewData/ReviewData';

const reviewData=[
    {
        quote : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, neque.',
        Name : 'Rakib Hasan',
        from : 'California',
    },
    {
        quote : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, neque.',
        Name : 'Sakib Hasan',
        from : 'California',
    },
    {
        quote : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, neque.',
        Name : 'Akib Hasan',
        from : 'California',
    }
]
const Review = () => {
    return (
        <div className="my-5 py-5">
            <div className="container">
                <h3 className="text-center">Reviews Of Our Clients</h3>
            </div>
            {/* <div className="mt-5 row">
                {
                    reviewData.map(review => <ReviewData review = {review} key = {review.name}></ReviewData>)
                }
            </div> */}
        </div>
    );
};

export default Review;