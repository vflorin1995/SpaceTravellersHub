import { useSelector } from 'react-redux';
import Rocket from './rocket';

const Rockets = () => {
  const bookArr = useSelector((state) => state.Rockets);
  console.log(bookArr);

  return (
    <div>
      {bookArr.map((item) => (
        <Rocket
          key={item.id}
          id={item.id}
          img={item.img}
          name={item.name}
          type={item.type}
        />
      ))}
    </div>
  );
};

export default Rockets;
