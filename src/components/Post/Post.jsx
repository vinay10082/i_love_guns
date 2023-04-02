import React from "react";
import "./Post.css";

const Post = ({data}) => {
let display;

  if (data) {
	  
	  display = data.map((intro) => {
		  let { id, name, type, image, status} = intro;
	  
		  return (
			<div
			  key={id}
			  className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
			>
	<div className="post d-flex flex-column justify-content-center">
  <img className="img img-fluid" src={image} alt="" />
  {
(() => {
 if (status === "In service") {
  return(
      <div className="badge position-absolute badge bg-success">
        {status}
      </div>
  );
  }
  else {
    return(
      <div className="badge position-absolute badge bg-danger">
        {status}
      </div>
    );
  }
})()}
  <div className="content">
    <div className="fs-5 fw-bold mb-4">{name}</div>
    <div className="">
      <div className="fs-6 fw-normal">Type</div>
      <div className="fs-5">{type}</div>
    </div>
  </div>
</div>
			</div>
		);
	  });
  }
  else{
    display = "No Data Found :/";
  }

  return <>{display}</>;
}



export default Post