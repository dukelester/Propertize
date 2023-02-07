import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch'
import API_HOST from '../../configs';

const PropertyGrid = () => {

let publicUrl = process.env.PUBLIC_URL+'/';
const { data, loading, error } = useFetch(`${API_HOST}/`)
console.log(data)

return <div className="blog-page-area pt-5 go-top">
	<div className="container">
	<div className="row justify-content-center">
		<div className="col-12">
		<div className="product-search-inner bg-main">
			<div className="row custom-gutters-20">
			<div className="col-md-3 align-self-center">
				<h5>{data && data.length} Properties</h5>
			</div>
			<div className="col-md-6 mt-2 mt-md-0">
				<div className="widget-search">
				<div className="single-search-inner">
					<input type="text" placeholder="Search your keyword" />
					<button><i className="la la-search" /></button>
				</div>
				</div>
			</div>
			<div className="col-md-3 mt-2 mt-md-0 align-self-center">
				<div className="single-select-inner">
				<select>
					<option value={1}>Sort By</option>
					<option value={2}>Sort By</option>
					<option value={3}>Sort By</option>
				</select>
				</div>
			</div>
			</div>
		</div>        
		</div>  
		{ loading ? (<h5>Loading data ...</h5>) : (
			data && data.map((property) => {
				return (
					<div className="col-lg-4 col-md-6" key={property._id}>
					<div className="single-product-wrap style-2">
					<div className="thumb">
					{property.images[0] &&
					<img src={property.images[0] }alt="img" />
					}
					{!property.images[0] &&  <img src={publicUrl+"assets/img/project/15.png"} alt="img" /> }
					<div className="product-wrap-details">
						<div className="media">
						<div className="author">
							<img src={publicUrl+"assets/img/author/1.png"} alt="img" />           
						</div>
						<div className="media-body">
							<h6><Link to="/property-details">Owner Name</Link></h6>
							<p><img src={publicUrl+"assets/img/icon/location-alt.png"} alt="img" />{property.city} real estate </p>
						</div>
						<a className="fav-btn float-right" href="#"><i className="far fa-heart" /></a>
						</div>
					</div> 
					</div> 
					<div className="product-details-inner">
					<h4><Link to={`/property-details/${property._id}`}>{property.title}</Link></h4>
					<ul className="meta-inner">
						<li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />{property.city}</li>
						{property.propertyFor &&
						<li><Link to="/property-details">{property.propertyFor}</Link></li>
						}
						{!property.propertyFor &&
						<li><Link to="/property-details">RENT</Link></li>
						}
					</ul>
					<p>{property.description.slice(0, 39)} </p>
					<span className="price">Kes {property.price}</span>
					</div>
					<div className="product-meta-bottom style-2">
					<span>{property.bedrooms} <span>Bedroom</span></span>
					<span className="border-none">{property.bathrooms} <span>Bathroom</span></span>
	
					</div>         
				</div>
				</div>
			)})

		)}
		<div className="pagination-area text-center mt-4">
		<ul className="pagination">
			<li className="page-item"><a className="page-link" href="#"><i className="la la-angle-double-left" /></a></li>
			<li className="page-item active"><a className="page-link" href="#">1</a></li>
			<li className="page-item"><a className="page-link" href="#">2</a></li>
			<li className="page-item"><a className="page-link" href="#">3</a></li>
			<li className="page-item"><a className="page-link" href="#">...</a></li>
			<li className="page-item"><a className="page-link" href="#"><i className="la la-angle-double-right" /></a></li>
		</ul>
		</div>
	</div>
	</div>
</div>

}

export default PropertyGrid