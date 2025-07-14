import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword', () => {
    test('should return 123', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '123',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });

    test('should return 456', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: '456',
            },
        };
        expect(getLoginPassword(state as StateSchema)).toEqual('456');
    });
});
