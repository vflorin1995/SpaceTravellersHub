import { PropTypes } from 'prop-types';

const Rocket = ({
  id, name, type, img,
}) => (
  <div className="flex my-8 mx-8">
    <img className="w-60" src={img} alt="spaceship" />
    <div>{id}</div>
    <div>{name}</div>
    <div>{type}</div>
  </div>
);

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Rocket;
