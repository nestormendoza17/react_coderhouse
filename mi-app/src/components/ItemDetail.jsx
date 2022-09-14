import React from "react";

const ItemDetail = ({data}) => {
    return (
        <div clasName="contaniner">
            <div className="detail">
                <img clasName='detail_image' src={data.image} alt="" />
                <div clasName="content">
                    <h1>{data.titulo}</h1>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
