import type { Activity } from "../types";

export type ActivityActions = {
    type: "save-activity";
    payload: { newActivity: Activity };
};

type ActivityState = {
    activities: Activity[];
};
export const initialState: ActivityState = {
    activities: [],
};
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if (action.type === "save-activity") {
        //este codigo maneja la logica para manejar el state
        console.log(action.payload.newActivity);
    }
    return state
};
