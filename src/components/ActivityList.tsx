import { Activity } from "../types";
import { categories } from "../data/categories";
import { useMemo } from "react";

type ActivityList = {
    activities: Activity[];
};
const ActivityList = ({ activities }: ActivityList) => {
    console.log(activities);

    const categoryName = useMemo(
        () => (category: Activity["category"]) =>
            categories.map((cat) => (cat.id === category ? cat.name : "")),
        [activities]
    );

    return (
        <>
            <h2 className="text-white font-bold text-center text-4xl">
                Comidas y Actividades
            </h2>
            {activities.map((activity) => (
                <div
                    key={activity.id}
                    className="px-5 pb-5 pt-1 bg-white mt-5 rounded-lg "
                >
                    <div className="space-y-2 flex flex-col ">
                        <p
                            className={` self-end text-sm font-bold px-2 py-2 text-white uppercase text-center rounded-lg ${
                                activity.category === 1
                                    ? "bg-orange-500"
                                    : "bg-lime-500"
                            }`}
                        >
                            {categoryName(+activity.category)}
                        </p>
                        <p className="text-2xl font-black">
                            {activity.name}
                        </p>
                        <p className="text-4xl font-black text-lime-500">
                            {activity.calories} <span>Calorias</span>
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ActivityList;
