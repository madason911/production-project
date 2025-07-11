import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'entities/AuthByUsername';
import { profileReducer } from 'entities/Profile';

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
};

export const StoreDecorator = (
    state: StateSchema,
    asyncReducers: DeepPartial<ReducersMapObject<StateSchema>>,
) => (StoryComp: StoryFn) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComp />
    </StoreProvider>
);
