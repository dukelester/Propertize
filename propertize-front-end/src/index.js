import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import ProptertyDetails from './components/property-details';
import ProptertyGrid from './components/property-grid';
import Propterty from './components/property';
import About from './components/about';
import Team from './components/team';
import SignIn from './components/sign-in';
import SignUp from './components/sign-up';
import AddProperty from './components/add-property';
import Contact from './components/contact';
import Blog from './components/blog';
import BlogDetails from './components/blog-details';




class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
                        <Route exact path="/" component={HomeV1} />
                        <Route  path="/home-v2" component={HomeV2} />
                        <Route  path="/home-v3" component={HomeV3} />
                        <Route  path="/property-details" component={ProptertyDetails} />
                        <Route  path="/property-grid" component={ProptertyGrid} />
                        <Route  path="/property" component={Propterty} />
                        <Route  path="/about" component={About} />
                        <Route  path="/team" component={Team} />
                        <Route  path="/sign-in" component={SignIn} />
                        <Route  path="/sign-up" component={SignUp} />
                        <Route  path="/add-property" component={AddProperty} />
                        <Route  path="/contact" component={Contact} />
                        <Route  path="/blog" component={Blog} />
	                    <Route  path="/blog-details" component={BlogDetails} />
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('mingrand'));
