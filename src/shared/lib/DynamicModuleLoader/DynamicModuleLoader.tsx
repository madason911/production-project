import { Reducer } from '@reduxjs/toolkit';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider/config/StateSchema';
import { memo, ReactNode, useEffect } from 'react';

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducerEntryType = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  children: ReactNode
  reducers: ReducerList;
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader = memo(({
    children, reducers, removeAfterUnmount = true,
}: DynamicModuleLoaderProps) => {
    const store = useStore() as ReduxStoreWithManager;
    const dispatch = useDispatch();

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `INIT ${name}` });
        });

        return () => {
            Object.entries(reducers).forEach(([name, reducer]) => {
                if (removeAfterUnmount) {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `DELETE ${name}` });
                }
            });
        };
        // eslint-disable-next-line
        }, []);

    return (
    // eslint-disable-next-line
        <>{ children }</>
    );
});
