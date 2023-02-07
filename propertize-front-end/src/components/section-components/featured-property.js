import React from 'react';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'
import API_HOST from '../../configs'

const FeaturedProperty = () => {
  let publicUrl = process.env.PUBLIC_URL+'/'
  const { data, loading, error } = useFetch(`${API_HOST}/featured`);

  return  (
	<div className="featured-area pd-top-118 pd-bottom-90">
	<div className="container">
	<div className="section-title text-center">
		<h6>Our Exclusives</h6>
		<h2>Featured Properties</h2>
	</div>
	<div className="row">
	
		{ loading ? (<h6> Loading data ... </h6>) :
		data.map((property) => {
			return (
				<div className="col-md-6" key={property._id}>
		<div className="single-product-wrap">
			<div className="thumb">
			{!property.images[0] &&
			<img src={publicUrl+"assets/img/project/13.png"} alt="img" />
			}
			{property.images[0] &&
			<img src={property.images[0]} alt="img" />
			}
			<div className="btn-area">
				<Link className="btn btn-base btn-sm" to="/property">{property.propertyFor}</Link>
			</div>
			</div> 
			<div className="product-wrap-details">
			<div className="product-details-inner p-0">
			<Link to={`/property-details/${property._id}`}>
			<h4>Kes {property.price}</h4>
			</Link>
				
				<div className="row">
				<div className="col-10">
					<ul className="meta-inner mb-0">
					<li><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" />{property.city} real estate</li>
					<li>
					</li></ul>
				</div>
				<div className="col-2 align-self-center">
					<a href="#" className="wishlist">
					<i className="far fa-heart" />
					</a>
				</div>
				</div>
			</div>
			<div className="product-meta-bottom style-2 pl-0 pr-0">
				<span>{property.bedrooms} <span>Bedroom</span></span>
				<span className="border-none">{property.bathrooms} <span>Bathroom</span></span>

			</div>
			</div>
		</div>
		</div>
			)
		})
		
		}
		
	</div>
	</div>
</div>
)
}

export default FeaturedProperty