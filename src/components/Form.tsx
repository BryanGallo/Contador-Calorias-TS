import { useState, useEffect, ChangeEvent, Dispatch } from "react";
import { v4 as uuidv4 } from "uuid";
import type { Activity } from "../types/index";
import type { ActivityState } from "../reducer/activity-reducer";
import { categories } from "../data/categories";
import { ActivityActions } from "../reducer/activity-reducer";

type FormProps = {
    dispatch: Dispatch<ActivityActions>;
    state: ActivityState;
};
const initialState: Activity = {
    id: uuidv4(),
    category: 1,
    name: "",
    calories: 0,
};
function Form({ dispatch, state }: FormProps) {
    const [activity, setActivity] = useState(initialState);

    useEffect(() => {
        if (state.activeId) {
            const selectActivity = state.activities.filter(
                (stateActivity) => stateActivity.id === state.activeId
            );

            console.log(selectActivity);
            setActivity(selectActivity[0]);
        }
    }, [state.activeId]);
    //inferir el tipo de dato al evento
    const handleChange = (
        e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
    ) => {
        const isNumberField = ["category", "calories"].includes(e.target.id);

        setActivity({
            ...activity,
            [e.target.id]: isNumberField
                ? +e.target.value
                : e.target.value.toLocaleUpperCase(),
        });
    };

    const isValidActivity = () => {
        const { name, calories } = activity;
        return name.trim() !== "" && calories > 0;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("submit");
        dispatch({
            type: "save-activity",
            payload: { newActivity: activity },
        });
        setActivity({ ...initialState, id: uuidv4() });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5 bg-white shadow p-10 rounded-lg"
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">
                    Categoría:{" "}
                </label>
                <select
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    id="category"
                    value={activity.category}
                    onChange={handleChange}
                >
                    <option value="0">Selecciona la Categoria</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">
                    Actividad Realizada:{" "}
                </label>
                <input
                    type="text"
                    id="name"
                    placeholder="Ej. Fútbol"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">
                    Calorias:{" "}
                </label>
                <input
                    type="number"
                    id="calories"
                    placeholder="Ej. 300 calorias"
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>
            <input
                type="submit"
                value={
                    activity.category === 0
                        ? "Guardar"
                        : activity.category === 1
                        ? "Guardar Comida"
                        : "Guardar Ejercicio"
                }
                className="bg-gray-700 text-white hover:bg-gray-900 w-full p-2 font-bold cursor-pointer disabled:opacity-30"
                disabled={!isValidActivity()}
            />
        </form>
    );
}

export default Form;
