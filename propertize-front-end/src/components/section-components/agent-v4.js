import React from 'react';

import useFetch from '../../hooks/useFetch'
import API_HOST from '../../configs';

const AgentV4 = () => {
  let publicUrl = process.env.PUBLIC_URL+'/';
  const { data, loading, error } = useFetch(`${API_HOST}/agents/`);
  console.log(data);

  return <div className="agent-area bg-black pd-top-118 pd-bottom-90">
              <div className="container">
                <div className="section-title style-white text-center">
                  <h6>Meet Our Agent</h6>
                  <h2>Our Best Agent</h2>
                </div>
                <div className="row">
                
                  {loading ? ( <h5> Loading data ...</h5>) :
                  data.slice(0, 8).map((agent) => {
                    return (
                      <div className="col-lg-3 col-sm-6" key={agent._id}>
                    <div className="single-agent-wrap style-2 text-center">
                      <div className="thumb">
                      {agent.photo && 
                        <img src={agent.photo} alt="img" />
                      }
                      {!agent.photo && 
                        <img src={publicUrl+"assets/img/agent/7.png"} alt="img" />
                      }
                      </div>
                      <div className="details">
                        <h4>{agent.fullName}</h4>
                        <h6>{agent.company}</h6>
                        <ul className="social-area style-2">
                          <li><a href={agent.facebook}><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                          <li><a href={agent.linkedn}><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                          <li><a href={agent.instagram}><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                          <li><a href={agent.twitter}><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                    )})
                  }
                </div>
              </div>
            </div>

        
}

export default AgentV4