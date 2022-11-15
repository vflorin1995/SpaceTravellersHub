import { PropTypes } from 'prop-types';

const Rocket = ({
  id, name, type, img,
}) => (
  <>
    <div>{id}</div>
    <div>{name}</div>
    <div>{type}</div>
    <img src={img} alt="spaceship" />
  </>
);

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Rocket;
