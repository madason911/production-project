import { StoryFn } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComp: StoryFn) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`} style={{ minHeight: '100vh', minWidth: '100vw' }}>
            <StoryComp />
        </div>
    </ThemeProvider>
);
