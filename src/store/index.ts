import { combineReducers } from "redux"
import { loginReducer } from "./login/reducers"
import { ordersReducer } from "./order/reducers"
import { registrationReducer } from "./registration/reducers"
import { userReducer } from "./users/reducers"
import { rolesReducer } from "./roles/reducers"
import { canvasReducer } from "./canvas/reducers"
import { emailSettingsReducer } from "./emailSettings/reducers"
import { galleryReducer } from "./gallery/reducers"

export const rootReducer = combineReducers({
  reg: registrationReducer,
  login: loginReducer,
  order: ordersReducer,
  user: userReducer,
  roles: rolesReducer,
  canvas: canvasReducer,
  gallery: galleryReducer,
  emailSettings: emailSettingsReducer,
})

export type RootState = ReturnType<typeof rootReducer>