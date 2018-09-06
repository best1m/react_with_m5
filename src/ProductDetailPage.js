import React, {Component} from 'react';




const ProductDetailPage = ({match}) => {

    

    return(
        <div>
            <div>{match.params.id}</div>
        </div>
    )
}


export default ProductDetailPage;