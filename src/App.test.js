import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

jest.mock('./component/CandleChart', () => () => null);
jest.mock('./component/OverlayCanvas', () => () => null);
jest.mock('./component/IndicatorChart', () => () => null);
jest.mock('./component/SineChart', () => () => null);

beforeEach(() => {
  process.env.REACT_APP_API_BASE_URL = 'http://localhost:9876/';
  global.fetch = jest.fn().mockResolvedValue({ ok: true, json: async () => [] });
});

afterEach(() => {
  delete process.env.REACT_APP_API_BASE_URL;
  delete global.fetch;
});

test('loads candles from the configured API and requests the selected tick size', async () => {
  render(<App />);
  await waitFor(() => expect(global.fetch).toHaveBeenCalled());
  let requested = new URL(global.fetch.mock.calls[0][0]);
  expect(requested.origin).toBe('http://localhost:9876');
  expect(requested.pathname).toBe('/api/candles');
  expect(requested.searchParams.get('tick_size')).toBe('500');
  fireEvent.change(screen.getByLabelText('Tick Size'), { target: { value: '1500' } });
  await waitFor(() => {
    const urls = global.fetch.mock.calls.map(([url]) => new URL(url));
    expect(urls.some(url => url.searchParams.get('tick_size') === '1500')).toBe(true);
  });
});
