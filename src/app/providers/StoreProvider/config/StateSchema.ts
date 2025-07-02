import { LoginSchema } from 'entities/AuthByUsername';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

export interface StateSchema {
  counter: CounterSchema,
  user: UserSchema,
  loginForm?: LoginSchema
}
