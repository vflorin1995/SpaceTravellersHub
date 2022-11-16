import { useSelector } from 'react-redux';

const MyProfile = () => {
  const spaceArr = useSelector((state) => state.Rockets);
  return (
    <div className="grid grid-cols-2 m-8 gap-4">
      <div>My Missions</div>
      <div>
        <table className="w-full">
          <thead className="text-2xl mb-2">
            <tr>
              <td>My rockets</td>
            </tr>
          </thead>
          <thead className="w-full">
            {spaceArr.map((item) => (item.reserved ? <tr className="border-2 w-full text-xl"><td className="p-2">{item.name}</td></tr> : ''))}
          </thead>
        </table>
      </div>
    </div>
  );
};

export default MyProfile;
