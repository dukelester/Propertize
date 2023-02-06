import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch'
import API_HOST from '../../configs';

const ProductV4 = () => {
    let publicUrl = process.env.PUBLIC_URL+'/';
	const { loading, data, error } = useFetch(`${API_HOST}`);

    return (
	<div className="product-area pd-top-118 pd-bottom-120 go-top">
		<div className="container">
		<div className="section-title text-center">
			<h6>We are offering the best real estate</h6>
			<h2>Best House For You</h2>
		</div>
		<div className="row">
		{/* here */}
		{ loading ? (<h2> Loading data ...</h2>) : (
			data.slice(0, 8).map((property) => {
				return (
				<div className="col-lg-4 col-md-6" key={property._id}>
				<div className="single-product-wrap">
				<div className="thumb">
				<img src={property.images[0]} alt="img" />
				<div className="btn-area">
				{property.propertyFor ? <Link className="btn btn-base btn-sm" to="/property">{property.propertyFor}</Link> :
				<Link className="btn btn-base btn-sm" to="/property">RENT</Link>
				}
			
				</div>
				</div>
				<div className="product-wrap-details">
				<div className="media">
					<div className="media-body">
					<h5><Link to={`/property-details/${property._id}`}>KES {property.price}</Link></h5>
					<p>{property.title}</p>
					</div>
					<a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
				</div>
				</div>
			</div>
			</div>
			)})
		)}

			{/* here */}
			<div className="col-12">
			<div className="btn-wrap text-center mt-4">
				<Link className="btn btn-base" to="/property">LOAD MORE</Link>
			</div>
			</div>
		</div>
		</div>
	</div>
)}

export default ProductV4