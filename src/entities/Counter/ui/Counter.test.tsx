import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';

describe('Counter', () => {
    test('render Counter', () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
                user: {},
            },
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('Value = 10');
    });

    test('increment', () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
                user: {},
            },
        });
        fireEvent.click(screen.getByTestId('increment-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('Value = 11');
    });

    test('decrement', () => {
        ComponentRender(<Counter />, {
            initialState: {
                counter: { value: 10 },
                user: {},
            },
        });
        fireEvent.click(screen.getByTestId('decrement-btn'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('Value = 9');
    });
});
