import { combineReducers } from 'redux'
import ScrumBoardReducer from './ScrumBoardReducer'
import NotificationReducer from './NotificationReducer'
import EcommerceReducer from './EcommerceReducer'
import NavigationReducer from './NavigationReducer'
import FormActionReducer from './FormActionReducer'
import UserActionReducer from './UserActionReducer'
import ConfigReducer from './ConfigReducer'

const RootReducer = combineReducers({
    notifications: NotificationReducer,
    navigations: NavigationReducer,
    scrumboard: ScrumBoardReducer,
    configReducer:ConfigReducer,
    ecommerce: EcommerceReducer,
    formActionReducer: FormActionReducer,
    userReducer: UserActionReducer
})

export default RootReducer
