import React from 'react';
import ImportTailwind from './fixtures/ImportTailwind';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
    const tree = renderer.create(< ImportTailwind/>).toJSON();
    expect(tree).toMatchSnapshot();
});
