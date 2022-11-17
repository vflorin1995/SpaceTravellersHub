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
    <div className="w-full px-2 md:px-8 pt-4">
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
            <tr className="odd:bg-gray-100" key={info.mission_id}>
              <td className="font-bold text-left px-2 border">
                {info.mission_name}
              </td>
              <td className="text-left px-2 border w-6/12">
                {info.description}
              </td>
              <td className=" border my-2 px-2 ">
                <span>
                  {info.joined ? <span className="bg-blue-500 text-white font-semibold text-xs uppercase mx-auto flex justify-center rounded-md">Active Member</span> : <span className="text-xs text-white bg-gray-500 rounded-md font-semibold flex justify-center items-center mx-auto uppercase">Not a member</span>}
                </span>
              </td>
              <td className=" border my-2 px-6">
                <button
                  type="button"
                  onClick={() => handleClick(info.mission_id)}
                >
                  {info.joined ? <span className="border-2 border-red-600 justify-center items-center p-1 rounded text-red-600">Leave mission</span> : <span className="border-2 border-gray-600 p-1 rounded w-28 flex justify-center items-center mx-auto">Join Mission</span>}
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
