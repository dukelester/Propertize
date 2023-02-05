import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './sidebar'
import useFetch from '../../hooks/useFetch'
import API_HOST from '../../configs';
const Blog = () => {
	let publicUrl = process.env.PUBLIC_URL+'/';
	const { data , loading, error } = useFetch(`${API_HOST}/blogs/`)
	console.log(data)
  return (
	<div className="blog-page-area pd-top-120 go-top">
		  <div className="container">
		    <div className="row">
			
		      <div className="col-lg-8">
			  
		        { loading ? (<h5> Data is loading ...</h5>) :
				(<>

				{ data && data.map((blog) => {
					return(
					<div className="single-blog-inner" key={blog._id}>
		          <div className="thumb">
				  {blog.image ?  <img src={blog.image} alt="img" /> :
					<img src={publicUrl+"assets/img/blog/3.png"} alt="img" /> }
		          </div> 
		          <div className="details">
		            <div className="cat"><Link to="/blog-details">{blog.category}</Link></div>
		            <h3><Link to={`/blog-details/${blog._id}`}>{blog.title}</Link></h3>
		            <ul className="meta-inner">
		              <li><img src={publicUrl+"assets/img/icon/1.png"} alt="img" /> By {blog.author}</li>
		              <li><img src={publicUrl+"assets/img/icon/2.png"} alt="img" /> {new Date(blog.createdAt).toUTCString()}</li>
		              <li><img src={publicUrl+"assets/img/icon/3.png"} alt="img" /> {new Date(blog.updatedAt).toUTCString()}</li>
		            </ul>
		            <p>{blog.description}</p>
		            <div className="row">
		              <div className="col-7">
		                <div className="author-inner">
		                  <img src={publicUrl+"assets/img/blog/author1.png"} alt="img" />
		                  <span>By {blog.author}</span>
		                </div>
		              </div>
		              <div className="col-5 align-self-center text-right">
		                <Link className="read-more" to={`/blog-details/${blog._id}`}>Read More <i className="la la-arrow-right" /></Link>
		              </div>
		            </div>
		          </div>
		        </div>
				)})
				}
				</>
				)}
		        
				
		        <div className="pagination-area text-center">
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
		        <Sidebar />
		    </div>
		  </div>
		</div>
  )
}

export default Blog
