/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { mockMiscAddTranslation } from 'mocks/misc/add-translation.mock';

import { DemoComponent } from '../component';

describe('DemoComponent', () => {
  beforeAll(() => {
    mockMiscAddTranslation('test', 'lorem');
  });
  it('renders without throwing any errors', () => {
    const { container } = render(<DemoComponent />);

    expect(container).toMatchSnapshot();
  });
});
