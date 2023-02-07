import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';
import API_HOST from '../../configs';

const LatestNewsV3 = () => {
  let publicUrl = process.env.PUBLIC_URL+'/'
  let imagealt = 'image'
  const { data, loading, error } = useFetch(`${API_HOST}/blogs/`)
  return (
	<div className="blog-area bg-gray pd-top-118 pd-bottom-90 go-top">
		<div className="container">
		<div className="section-title text-center">
			<h6>Blog &amp; News</h6>
			<h2>News Feads</h2>
		</div>
		<div className="row justify-content-center">
			{ loading ? (<h4> Loading data ...</h4>) :
			data.slice(0, 3).map((blog) => {
				return (
				<div className="col-lg-4 col-md-6">
				<div className="single-product-wrap style-bottom-radius">
				<div className="thumb">
				<img src={blog.image} alt="img" />
				</div> 
				<div className="product-details-inner">
				<ul className="meta-inner">
					<li><i className="fa fa-user" />By {blog.author}</li>
					<li><i className="fa fa-calendar-alt" />{Date(blog.createdAt)}</li>
				</ul>
				<h4><Link to={`/blog-details/${blog._id}`}>{blog.title}</Link></h4>
				<p>{blog.description.slice(0, 80)}</p>
				<Link className="btn btn-base read-more" to={`/blog-details/${blog._id}`}><i className="la la-arrow-right" /></Link>
				</div>
			</div>
			</div>
				)})
			}
		</div>
		</div>
	</div>


    )
  
}

export default LatestNewsV3;
