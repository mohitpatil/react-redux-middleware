import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  

  render() {
    const user = this.props.users.find(user => user.id === this.props.userId);

    if (!user) {
      return <div>No User found!</div>;
    }
    //console.log("this", this.props);
    return (
      <div className="header">
        <h1>{user.name}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps
)(UserHeader);
