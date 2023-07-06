import { combineReducers } from "redux";
import postsReducer from "./postsReducers";
import detailsReducer from "./detailsReducer";

const rootReducers = combineReducers({
  posts: postsReducer,
  detailsCard: detailsReducer,
});

export default rootReducers;
