import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import store from '../../redux/configureStore';
import Missions from '../missions';

describe('Testing by jest snapshots', () => {
  it('matches missions Snapshot', () => {
    const missionsDisplay = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Missions />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(missionsDisplay).toMatchSnapshot();
  });
});
