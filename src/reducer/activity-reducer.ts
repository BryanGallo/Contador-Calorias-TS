import type { Activity } from "../types";

export type ActivityActions =
    | {
          type: "save-activity";
          payload: { newActivity: Activity };
      }
    | { type: "set-activeId"; payload: { id: Activity["id"] } };

export type ActivityState = {
    activities: Activity[];
    activeId: Activity["id"];
};
export const initialState: ActivityState = {
    activities: [],
    activeId: "",
};
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if (action.type === "save-activity") {
        //este codigo maneja la logica para manejar el state
        console.log(action.payload.newActivity);

        let updateActivities: Activity[] = [];
        if (state.activeId) {
            updateActivities = state.activities.map((activity) =>
                activity.id === state.activeId
                    ? action.payload.newActivity
                    : activity
            );
        } else {
            updateActivities = [
                ...state.activities,
                action.payload.newActivity,
            ];
        }

        return {
            ...state,
            activities: updateActivities,
            activeId: "",
        };
    }
    if (action.type === "set-activeId") {
        console.log(action.payload);
        return {
            ...state,
            activeId: action.payload.id,
        };
    }

    return state;
};
