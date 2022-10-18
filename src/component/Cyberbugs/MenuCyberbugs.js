import React from "react";
import { NavLink } from "react-router-dom";

export default function MenuCyberbugs() {

  return (
    <div className="menu" style={{position:'fixed',marginLeft:'5%',zIndex:'1'}}>
      <div className="account">
        <div className="avatar">
          <img src={require("../../assets/img/download.jpeg")} alt="123" />
        </div>
        <div className="account-info">
          <p>CyberLearn.vn</p>
          <p>Report bugs</p>
        </div>
      </div>
      <div className="control p-0">
        <div>
          <i className="fa fa-cog mr-1" />
          <NavLink className="text-dark" activeStyle={{color:'blue'}} to="/projectmanagement" activeClassName="active font-weight-bold text-primary">Project Management</NavLink>
        </div>

        <div>
          <i className="fa fa-cog mr-1" />
          <NavLink className="text-dark" activeStyle={{color:'blue'}} to="/createproject" activeClassName="active font-weight-bold text-primary">Create Project</NavLink>
        </div>
      </div>

      <div className="feature p-0">
        <div>
          <i className="fa fa-equals mr-1" />
          <span>Issues and filters</span>
        </div>
        <div>
          <i className="fa fa-paste mr-1" />
          <span>Pages</span>
        </div>
        <div>
          <i className="fa fa-location-arrow mr-1" />
          <span>Reports</span>
        </div>
        <div>
          <i className="fa fa-box mr-1" />
          <span>Components</span>
        </div>
      </div>
    </div>
  );
}
