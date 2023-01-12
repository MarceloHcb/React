// arquivo UserProfile.js
import React from 'react';
import Image from './Image';
import PropTypes from 'prop-types';

class UserProfile extends React.Component {
  render() {
    const { user } = this.props;
    return (
      <div>
        <p> { user.name } </p>
        <p> { user.email } </p>
        <Image source={ user.avatar } alternativeText="User avatar" />
      </div>
    );
  }
}

UserProfile.protoTypes = {
   user: PropTypes.shape({
    name: PropTypes.number
   }).isRequired
}
export default UserProfile;