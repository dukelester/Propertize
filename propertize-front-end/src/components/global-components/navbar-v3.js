import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavbarV3 extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'

        return (
        	<div className="navbar-area navbar-area-3">
			  <nav className="navbar navbar-expand-lg">
			  <div className="container nav-container">
			      <div className="responsive-mobile-menu">
			        <button className="menu toggle-btn d-block d-lg-none" data-target="#dkt_main_menu" aria-expanded="false" aria-label="Toggle navigation">
			          <span className="icon-left" />
			          <span className="icon-right" />
			        </button>
			      </div>
			      <div className="logo">
			        <Link to="/"><img src={publicUrl+"assets/img/logo.png"} alt="img" /></Link>
			      </div>
			      <div className="nav-right-part nav-right-part-mobile">
			        <ul>
			          <li><a className="search" href="#"><i className="fa fa-search" /></a></li>
			          <li><Link className="btn btn-base" to="/add-property"><span className="btn-icon"><i className="fa fa-plus" /></span> <span className="btn-text">SUBMIT PROPERTY</span></Link></li>
			        </ul>
			      </div>
			      <div className="collapse navbar-collapse" id="dkt_main_menu">
			        <ul className="navbar-nav menu-open text-center">
			          <li className=" current-menu-item">
			            <Link to="/">Home</Link>
			           
			          </li>
			          <li className="current-menu-item">
					  <li><Link to="/property-grid">Property</Link></li>
			          </li>
					  
					  <li className="current-menu-item">
					  <li><Link to="/sign-in">Sign In</Link></li>
			          </li>
					  <li className="current-menu-item">
					  <li><Link to="/sign-up">Sign Up</Link></li>
			          </li>
			          
			          <li className=" current-menu-item">
					  <li><Link to="/blog">Blog</Link></li>
			           
			          </li>
			          <li><Link to="/contact">Contact</Link></li>
			        </ul>
			      </div>
			      <div className="nav-right-part nav-right-part-desktop">
			        <ul>
			          <li><a className="search" href="#"><i className="fa fa-search" /></a></li>
			          <li><Link className="btn btn-base" to="/add-property"><span className="btn-icon"><i className="fa fa-plus" /></span> <span className="btn-text">SUBMIT PROPERTY</span></Link></li>
			        </ul>
			      </div>
			    </div>
			  </nav>
			</div>
        )
    }
}


export default NavbarV3