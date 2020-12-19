import { combineReducers } from "redux"
import { ordersReducer } from "./order/reducers"
import { registrationReducer } from "./registration/reducers"
import { userReducer } from "./users/reducers"
import { rolesReducer } from "./roles/reducers"
import { canvasReducer } from "./canvas/reducers"
import { emailSettingsReducer } from "./emailSettings/reducers"
import { galleryReducer } from "./gallery/reducers"
import { instagramReducer } from "./instagram/reducers"
import { instaSettingsReducer } from "./instaSettings/reducers"
import { authReducer } from "./auth/reducers"

export const rootReducer = combineReducers({
  reg: registrationReducer,
  auth: authReducer,
  order: ordersReducer,
  user: userReducer,
  roles: rolesReducer,
  canvas: canvasReducer,
  gallery: galleryReducer,
  instagram: instagramReducer,
  emailSettings: emailSettingsReducer,
  instaSettings: instaSettingsReducer,
})

export type RootState = ReturnType<typeof rootReducer>