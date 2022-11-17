import { useSelector } from 'react-redux';
import { everyMissions } from '../redux/Missions/missions';

const MyProfile = () => {
  const spaceArr = useSelector((state) => state.Rockets);
  const { missions } = useSelector(everyMissions);

  const joinedMissions = missions.filter((mission) => mission.joined);

  return (
    <div className="grid grid-cols-2 m-8 gap-4">
      <div className="flex flex-col gap-4">
        <table className="w-full">
          <thead>
            <tr>
              <td className="text-2xl font-bold capitalize pb-4">my missions</td>
            </tr>
          </thead>
          <tbody>
            <tr className="flex flex-col">
              {joinedMissions.length > 0 ? joinedMissions.map((info) => (
                <td className="pt-2 border pl-4 pb-4" key={info.mission_id}>
                  {info.mission_name}
                </td>
              )) : <td className="py-2 border px-1">You do not have any rocket reservations yet</td>}
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <table className="w-full">
          <thead className="text-2xl mb-2">
            <tr>
              <td className="text-2xl font-bold capitalize pb-4">My rockets</td>
            </tr>
          </thead>
          <thead className="w-full">
            {spaceArr.map((item) => (item.reserved ? (
              <tr>
                <td className="pt-2 border pl-4 pb-4">{item.name}</td>
              </tr>
            ) : (
              ''
            )))}
          </thead>
        </table>
      </div>
    </div>
  );
};

export default MyProfile;
