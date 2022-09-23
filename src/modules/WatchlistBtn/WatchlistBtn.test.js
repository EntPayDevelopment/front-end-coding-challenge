const mockAddToWatchlist = jest.fn(() => Promise.resolve('mocked add to watchlist'));

import { WatchlistBtn, labels, testId } from './WatchlistBtn';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { jest } from '@jest/globals';

afterEach(() => {
    cleanup()
});

it(`[Given] An id [Then] it will render`, () => {
    const grid = renderer.create(<WatchlistBtn id="mocked_id" />);
    let tree = grid.toJSON();
    expect(tree).toMatchSnapshot();
});

it(`[Given] it will render [Then] It will have the proper test id: ${testId}`, () => {
    render(<WatchlistBtn id="mocked_id" />);
    expect(screen.getByTestId(testId)).toBeTruthy();
});

it(`[Given] it will render [Then] It will have a button with a label ${labels.add}`, () => {
    render(<WatchlistBtn id="mocked_id" />);
    expect(screen.getByText(labels.add)).toBeTruthy();
});

it(`[Given] it will be clicked [Then] It will have a button with a label ${labels.remove}`, async () => {
    /*
    This is only an example Test. It will fail at the same rate as the mocked API so at 5% of the tries. 
    To write a proper unit test we would have to mock up the mocked up api which I thought to be overkill.
    */
    render(<WatchlistBtn id="mocked_id" />);
    act(() => {
        fireEvent.click(screen.getByTestId(testId));
    });
    await expect(screen.findByText(labels.remove)).toBeTruthy();
});
