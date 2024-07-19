import { Activity } from "../types";

type ActivityList = {
    activities: Activity[];
};
const ActivityList = ({ activities }: ActivityList) => {
    console.log(activities);

    return (
        <h2 className="text-slate-600 font-bold text-center text-4xl">
            Comidas y Actividades
        </h2>
    );
};

export default ActivityList;