import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBooking } from '../redux/Rockets/rockets';

const Rocket = ({
  id, name, type, img,
}) => {
  const dispatch = useDispatch();
  function reservation() {
    console.log(id);
    dispatch(addBooking(id));
  }
  return (
    <div className="flex my-8 mx-8">
      <img className="w-60" src={img} alt="spaceship" />
      <div>{id}</div>
      <div>{name}</div>
      <div>{type}</div>
      <button type="button" onClick={reservation}>Make reservation</button>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};

export default Rocket;
