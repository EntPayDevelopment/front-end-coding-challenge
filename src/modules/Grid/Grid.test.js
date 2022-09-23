import renderer from 'react-test-renderer';
import { Grid } from './Grid';
import { mock } from '../../api/mock';

it("[Given] No Items [Then] it will render correctly.", () => {
    const grid = renderer.create(<Grid />);
    let tree = grid.toJSON();
    expect(tree).toMatchSnapshot();
});

it("[Given] Valid Items [Then] it will render correctly.", () => {
    const grid = renderer.create(<Grid items={mock} />);
    let tree = grid.toJSON();
    expect(tree).toMatchSnapshot();
});

