import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  everyMissions,
  getMissions,
  missionStatus,
} from '../redux/Missions/missions';

const Missions = () => {
  const { missions, status } = useSelector(everyMissions);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(getMissions());
    }
  }, []);

  const handleClick = (id) => {
    dispatch(missionStatus(id));
  };

  return (
    <div className="w-full px-2 md:px-8">
      <table className="w-full border">
        <thead>
          <tr>
            <th className="font-bold capitalize text-left px-2 border py-1">
              Mission
            </th>
            <th className="font-bold capitalize text-left px-2 border py-1">
              Description
            </th>
            <th className="font-bold capitalize text-left px-2 border py-1">
              Status
            </th>
            <th className="font-bold capitalize text-left px-2 border py-1">
              {' '}
            </th>
          </tr>
        </thead>
        <tbody>
          {missions.map((info) => (
            <tr className="even:bg-slate-400" key={info.mission_id}>
              <td className="font-bold text-left px-2 border">
                {info.mission_name}
              </td>
              <td className="text-left px-2 border w-6/12">
                {info.description}
              </td>
              <td className=" border my-2 px-2">
                <span className="text-xs bg-slate-600 rounded-md font-semibold flex justify-center items-center mx-auto uppercase">
                  {info.joined ? 'Active Member' : 'Not a member'}
                </span>
              </td>
              <td className=" border my-2">
                <button
                  type="button"
                  className="border p-1 rounded w-28 flex justify-center items-center mx-auto"
                  onClick={() => handleClick(info.mission_id)}
                >
                  {info.joined ? 'Leave mission' : 'Join Mission'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Missions;
