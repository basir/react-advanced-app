import React from 'react';
import { ThemeContextConsumer } from './ThemeContext';

export default function Navbar() {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div class="row">
          <div>React Context App</div>
          <button onClick={context.toggleTheme}>Toggle Theme</button>
        </div>
      )}
    </ThemeContextConsumer>
  );
}
