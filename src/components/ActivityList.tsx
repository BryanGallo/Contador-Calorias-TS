import { Activity } from "../types";

type ActivityList = {
    activities: Activity[];
};
const ActivityList = ({ activities }: ActivityList) => {
    console.log(activities);

    return (
        <>
            <h2 className="text-slate-600 font-bold text-center text-4xl">
                Comidas y Actividades
            </h2>
            {activities.map((activity) => (
                <div
                    key={activity.id}
                    className="px-5 py-10 bg-white mt-5 flex justify-between"
                >
                    <div className=" space-y-2 relative">
                        <p className="font-bold">{activity.category}</p>
                        <p className="text-2xl pt-5 font-black">
                            {activity.name}
                        </p>
                        <p className="text-4xl pt-5 font-black text-lime-500">
                            {activity.calories} <span>Calorias</span>
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ActivityList;
