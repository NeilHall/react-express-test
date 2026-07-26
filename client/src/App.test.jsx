import React, { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const root = createRoot(div);
  act(() => root.render(<App />));
  expect(div.querySelector('.App')).not.toBeNull();
  act(() => root.unmount());
});
