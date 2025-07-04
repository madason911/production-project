import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

export const StoreDecorator = (state: StateSchema) => (StoryComp: StoryFn) => (
    <StoreProvider initialState={state}>
        <StoryComp />
    </StoreProvider>
);
