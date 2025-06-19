// import { useDispatch, useSelector } from 'react-redux';
// import { Button } from 'shared/ui/Button/Button';
// import { counterActions } from '../model/slice/userSlice';
// import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

// export const Counter = () => {
//     const dispatch = useDispatch();
//     const counterValue = useSelector(getCounterValue); // This would typically come from a selector, e.g., useSelector(state => state.counter.value)
//     const increment = () => {
//         dispatch(counterActions.increment());
//     };
//     const decrement = () => {
//         dispatch(counterActions.decrement());
//     };
//     return (
//         <div>
//             <h1 data-testid="value-title">{`Value = ${counterValue}`}</h1>
//             <Button data-testid="increment-btn" onClick={increment}>Increment</Button>
//             <Button data-testid="decrement-btn" onClick={decrement}>Decrement</Button>
//         </div>
//     );
// };
