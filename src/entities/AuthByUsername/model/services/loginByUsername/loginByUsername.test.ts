import axios from 'axios';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage';
import { userActions } from 'entities/User';
import { TestAsyncThunk } from 'shared/lib/TestAsyncThunk/TestAsyncThunk';
import { loginByUsername } from './loginByUsername';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('loginByUsername asyncThunk', () => {
    const dispatch = jest.fn();
    const getState = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks();
        localStorage.clear();
    });

    it('успешный логин', async () => {
        const user = { id: '1', username: 'test' };
        mockedAxios.post.mockResolvedValueOnce({ data: user });

        const thunk = TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'test', password: '123' });

        expect(mockedAxios.post).toHaveBeenCalledWith(
            'http://localhost:8000/login',
            { username: 'test', password: '123' },
        );
        expect(localStorage.getItem(USER_LOCALSTORAGE_KEY)).toEqual(JSON.stringify(user));
        expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(user));
        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(user);
    });

    it('логин с ошибкой', async () => {
        mockedAxios.post.mockRejectedValueOnce(new Error('error'));

        const thunk = TestAsyncThunk(loginByUsername);
        const result = await thunk.callThunk({ username: 'test', password: 'wrong' });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBeDefined();
    });
});
