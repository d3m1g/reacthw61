import PropTypes from 'prop-types';

function WatchModel() {
 return PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  utcOffset: PropTypes.number.isRequired
 });
}

export default WatchModel;