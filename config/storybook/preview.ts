import type { Preview } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import '../../src/app/styles/index.scss';
import { Theme } from '../../src/app/providers/ThemeProvider';

const preview: Preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

export const decorators = [
    ThemeDecorator(Theme.LIGHT),
    RouterDecorator,
];

export default preview;
