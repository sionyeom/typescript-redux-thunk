import * as actions from "./actions";
import { ActionType } from "typesafe-actions";
import { Tutorial } from "@/modules/tutorial/tutorial";

export type TutorialAction = ActionType<typeof actions>;

export type TutorialState = {
  tutorialAll: {
    loading: boolean;
    error: Error | null;
    data: Tutorial | null;
  };
};
