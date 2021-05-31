import React from "react";

const ReviewData = (props) => {
    const {quote,name,from} = props.review;
  return (
    <div className="shadow-sm">
        
      {/* <div className="card shadow-sm">
        <div className="card-body">
          <p className="card-text text-center">{quote}</p>
        </div>
        <div className="card-footer d-flex  align-items-center">
          <img className="mx-3" src={img} alt="" width="60" />
          <div>
            <h6 className="text-primary">{name}</h6>
            <p className="m-0">{from}</p>
          </div>
        </div>
      </div> */}
      <div className="">
          <div className="col-md-3">
              <h4>{name}</h4>
              <p>{quote}</p>
              <p>{from}</p>
          </div>
      </div>

    </div>
  );
};

export default ReviewData;
