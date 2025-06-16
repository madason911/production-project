import { Provider } from 'react-redux';
import { ReactNode } from 'react';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: StateSchema
}

export const StoreProvider = ({ children, initialState }: StoreProviderProps) => {
    // Create the Redux store
    const store = createReduxStore(initialState);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
