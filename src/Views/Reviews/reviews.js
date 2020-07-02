import React from 'react';

const ReviewsView=({reviews})=>{
    
    return <div>
    {reviews.length > 0 && (
      <>
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </>
    )}

    {reviews.length === 0 && (
      <>
        <p>We don't have any reviews for this movie</p>
      </>
    )}
  </div>
}
export default ReviewsView;