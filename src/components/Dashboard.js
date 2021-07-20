import React, { Component } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { LOCAL_STRAGE_KEY } from "../utils/Settings";
import dog from "../asset/images/dog.jpg";
import { Container, Form, Input, Button, Grid } from "semantic-ui-react";
import profile from "../asset/images/profile.jpeg";
import projects from "../store/index";
import "../App.css";

// API
import * as MyAPI from "../utils/MyAPI";

class Dashboard extends Component {
  logoutRequest = () => {
    const { user } = this.props;
    const param = {
      login_token: user.login_token,
    };
    MyAPI.logout(param)
      .then((results) => {
        localStorage.removeItem(LOCAL_STRAGE_KEY);
        this.props.history.push("/");
      })
      .catch((err) => {
        console.log("err: ", err);
        localStorage.removeItem(LOCAL_STRAGE_KEY);
        this.props.history.push("/");
      });
  };

  handleEdit = () => {
    // this.props.history.push('/edit')
  };

  render() {
    const { user } = this.props;

    return (
      <div className="dashboard" style={{ textAlign: "center" }}>

        <div>
          {/* <div>{JSON.stringify(user)}</div> */}
          <div className="profile-container">
            <h3 class="ui block header">Native Coders
            <div style={{ marginTop: 5 }}>
          <div>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => this.logoutRequest()}
            >
              logout
            </span>
          </div>
        </div>
            </h3>
            <div class="card">
              <div class="image profile-image">
                <img src={profile} class="ui circular image" />
              </div>
              <div class="content">
                <div class="header">Matt Giampietro</div>
                <div class="meta header">
                  <a>Projects</a>
                </div>
                <div class="description">
                  Matthew is an interior designer living in New York.
                </div>
              </div>
              <div class="extra content">
                <span class="right floated">Joined in 2013</span>
                <span>
                  <i class="user icon"></i>5 Projects
                </span>
              </div>
            </div>
            <div class="ui divider"></div>
            <h2 class="ui header">Projects</h2>

            <div class="ui three column grid">
              {projects.map((project, index) => {
                return (
                  <div class="column">
                    <div class="ui fluid card" key={index}>
                      <div class="image">
                        <img src={project.picture} />
                      </div>
                      <div class="content">
                        <a class="header">{project.name}</a>
                      </div>
                    </div>
                    <div class="extra content">
                      <button class="ui button">Join Project</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// react-redux
function mapStateToProps({ user }) {
  return {
    user,
  };
}

// export default withRouter(MainPage);
export default withRouter(connect(mapStateToProps)(Dashboard));
