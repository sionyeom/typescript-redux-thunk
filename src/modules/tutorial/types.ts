import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { Tutorial } from "@/api/tutorial";

export type GetTutorialAction = ActionType<typeof actions>;

export type TutorialState = {
  tutorialAll: {
    loading: boolean;
    error: Error | null;
    data: Tutorial | null;
  };
};
