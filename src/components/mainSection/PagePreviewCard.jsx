import React from "react";

function PagePreviewCard({ title, description, srcImg, alt }) {
  return (
    <div className="card bg-2 shadow text-white">
      <h5 className="card-title text-center py-2">{title}</h5>
      <figure className="overflow-hidden card-img-container border border-start-0 border-end-0">
        <img src={srcImg} className="card-img-top" alt={alt} />
      </figure>
      <div className="card-body pt-1">
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default PagePreviewCard;
