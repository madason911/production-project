import { StoryFn } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComp: StoryFn) => (
    <div className={`app ${theme}`} style={{ minHeight: '100vh', minWidth: '100vw' }}>
        <StoryComp />
    </div>
);
