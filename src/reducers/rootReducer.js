import { combineReducers } from "redux";
import authReducer from "../slices/authSlice";
import previewModalReducer from "../slices/previewModalSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  previewModal: previewModalReducer,
})

export default rootReducer
