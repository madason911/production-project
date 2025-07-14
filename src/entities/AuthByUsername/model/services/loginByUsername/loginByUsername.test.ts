import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

describe('loginByUsername asyncThunk', () => {
    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        localStorage.clear();
    });

    it('успешный логин', async () => {
        const user = { id: '1', username: 'test' };

        const thunk = TestAsyncThunk(loginByUsername);
        thunk.api.post.mockResolvedValueOnce({ data: user });
        const result = await thunk.callThunk({ username: 'test', password: '123' });

        expect(thunk.api.post).toHaveBeenCalledWith(
            '/login',
            { username: 'test', password: '123' },
        );
        expect(localStorage.getItem(USER_LOCALSTORAGE_KEY)).toEqual(JSON.stringify(user));
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(user));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(user);
    });

    it('логин с ошибкой', async () => {
        const thunk = TestAsyncThunk(loginByUsername);
        thunk.api.post.mockRejectedValueOnce(new Error('error'));
        const result = await thunk.callThunk({ username: 'test', password: 'wrong' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBeDefined();
    });
});
