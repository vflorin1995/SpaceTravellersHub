import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import { addBooking, removeBooking } from '../redux/Rockets/rockets';

const Rocket = ({
  id, name, type, img, res,
}) => {
  const dispatch = useDispatch();
  function reservation() {
    console.log(id);
    if (res === true) {
      dispatch(removeBooking(id));
    } else {
      dispatch(addBooking(id));
    }
  }
  return (
    <div className="flex my-8 mx-8">
      <img className="w-60" src={img} alt="spaceship" />

      <div className="flex-row mx-8">
        <div className="flex items-center mb-2">
          { res ? <div className="bg-cyan-700 text-white p-1 px-2 mr-2"> RESERVED </div> : ''}
          <div className="text-xl">{name}</div>
        </div>
        <div>{type}</div>
        <div>{res}</div>
        { res ? <button className="border-2 bg-white text-gray-500 px-4 py-2 mt-2" type="button" onClick={reservation}>Cancel reservation</button>
          : <button className="bg-blue-500 text-white px-4 py-2 mt-2" type="button" onClick={reservation}>Make reservation</button>}
      </div>
    </div>
  );
};

Rocket.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  res: PropTypes.bool.isRequired,
};

export default Rocket;
