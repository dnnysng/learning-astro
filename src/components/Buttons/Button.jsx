import React from 'react';

export default function Button({ children }) {
  return <button onClick={() => alert('You clicked')}>{children}</button>;
}
