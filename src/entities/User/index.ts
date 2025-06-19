import { User, UserSchema } from './model/types/userSchema';
// import { User } from './ui/User';
import { userReducer, userActions } from './model/slice/userSlice';

export {
    // Counter,
    userReducer,
    userActions,
    User,
    UserSchema,
};
