import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import MyProfile from '../myProfile';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot for the profile component', () => {
    const quotes = renderer.create(
      <Provider store={store}>
        <Router>
          <MyProfile />
        </Router>
      </Provider>,
    ).toJSON();
    expect(quotes).toMatchSnapshot();
  });
});
