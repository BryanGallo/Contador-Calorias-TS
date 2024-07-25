import { useMemo } from "react";
import CalorieDisplay from "./CalorieDisplay";
import type { Activity } from "../types";

const CalorieTracker = ({ activities }: { activities: Activity[] }) => {
    console.log(activities);
    //contadores
    const caloriesConsumed = useMemo(
        () =>
            activities.reduce(
                (total, activity) =>
                    activity.category === 1 ? total + activity.calories : total,
                0
            ),
        [activities]
    );
    const caloriesBurned = useMemo(
        () =>
            activities.reduce(
                (total, activity) =>
                    activity.category === 2 ? total + activity.calories : total,
                0
            ),
        [activities]
    );

    const totalCalories = caloriesConsumed - caloriesBurned;
    return (
        <>
            <h2 className="text-4xl font-black text-white text-center">
                Resumen Calorias
            </h2>
            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                <CalorieDisplay
                    calories={caloriesConsumed}
                    nameCalori={"Calorias Consumidas"}
                    category={1}
                />
                <CalorieDisplay
                    calories={caloriesBurned}
                    nameCalori={"Calorias Quemadas"}
                    category={2}
                />
                <CalorieDisplay
                    calories={totalCalories}
                    nameCalori={"Total"}
                />
            </div>
        </>
    );
};

export default CalorieTracker;
