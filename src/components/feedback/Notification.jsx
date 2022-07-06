import PropTypes from 'prop-types';

export function Notification({ message }) {
  return <p>{message}</p>;
}

Notification.rotoType = {
  message: PropTypes.string.isRequired,
};
