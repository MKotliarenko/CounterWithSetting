import { combineReducers, createStore} from "redux";
import {CounterNumberReducer} from "../state/counterNumber-reducer";
import {SettingReducer} from "../state/setting-reducer";


const rootReducer = combineReducers({
    CounterNumber: CounterNumberReducer,
    Setting: SettingReducer
})

export const store = createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
