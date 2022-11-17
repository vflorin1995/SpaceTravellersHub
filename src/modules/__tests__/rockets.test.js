import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Rockets from '../rockets';
import store from '../../redux/configureStore';

describe('Jest Snapshot testing suite', () => {
  it('Matches DOM Snapshot', () => {
    const quotes = renderer.create(
      <Provider store={store}>
        <Router>
          <Rockets />
        </Router>
      </Provider>,
    ).toJSON();
    expect(quotes).toMatchSnapshot();
  });
});
