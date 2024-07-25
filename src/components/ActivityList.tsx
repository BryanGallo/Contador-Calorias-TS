import { useMemo, Dispatch } from "react";
import { Activity } from "../types";
import { categories } from "../data/categories";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { ActivityActions } from "../reducer/activity-reducer";

type ActivityList = {
    activities: Activity[];
    dispatch: Dispatch<ActivityActions>;
};
const ActivityList = ({ activities, dispatch }: ActivityList) => {
    console.log(activities);

    const categoryName = useMemo(
        () => (category: Activity["category"]) =>
            categories.map((cat) => (cat.id === category ? cat.name : "")),
        [activities]
    );

    const isEmptyActivities = useMemo(
        () => activities.length === 0,
        [activities]
    );
    console.log(isEmptyActivities);

    return (
        <>
            <h2 className=" font-bold text-center text-4xl">
                Comidas y Actividades
            </h2>
            {isEmptyActivities ? (
                <p className="text-center mt-5 text-3xl text-yellow-600">
                    No hay actividades
                </p>
            ) : (
                activities.map((activity) => (
                    <div
                        key={activity.id}
                        className="px-5 pb-5 pt-1 bg-white mt-5 rounded-lg flex justify-between items-center w-2/3 mx-auto shadow-xl"
                    >
                        <div className="space-y-2 flex flex-col ">
                            <p
                                className={` self-start text-sm font-bold px-2 py-2 text-white uppercase text-center rounded-r-lg ${
                                    activity.category === 1
                                        ? "bg-orange-500"
                                        : "bg-lime-500"
                                }`}
                            >
                                {categoryName(+activity.category)}
                            </p>
                            <p className="text-2xl font-black ml-5">
                                {activity.name}
                            </p>
                            <p
                                className={`text-4xl font-black ml-5 ${
                                    activity.category === 1
                                        ? "text-orange-500"
                                        : "text-lime-500"
                                }`}
                            >
                                {activity.calories} <span>Calorias</span>
                            </p>
                        </div>
                        <div className="flex gap-5 items-center ">
                            <button
                                onClick={() => {
                                    dispatch({
                                        type: "set-activeId",
                                        payload: { id: activity.id },
                                    });
                                }}
                            >
                                <PencilSquareIcon className="h-8 w-8 text-blue-800" />
                            </button>
                            <button
                                onClick={() => {
                                    const validation = confirm(
                                        "Seguro quieres eliminar esta actividad"
                                    );
                                    if (!validation) return;
                                    dispatch({
                                        type: "delete-activity",
                                        payload: { id: activity.id },
                                    });
                                }}
                            >
                                <TrashIcon className="h-8 w-8 text-red-500" />
                            </button>
                        </div>
                    </div>
                ))
            )}
        </>
    );
};

export default ActivityList;
