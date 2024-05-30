import { useState } from "react";
import type { Activity } from "../types/index";
import { categories } from "../data/categories";
function Form() {
    const [activity, setActivity] = useState<Activity>({
        category: 0,
        name: "",
        calories: 0,
    });

    //inferir el tipo de dato al evento
    const handleChange = (
        e:
            | React.ChangeEvent<HTMLSelectElement>
            | React.ChangeEvent<HTMLInputElement>
    ) => {
        const isNumberField = ["category", "calories"].includes(e.target.id);

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value,
        });
    };

    const isValidActivity = () => {
        const { name, calories } = activity;
        return name.trim() !== "" && calories > 0;
    };

    return (
        <form className="space-y-5 bg-white shadow p-10 rounded-lg">
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
                    <option value='0'>Selecciona la Categoria</option>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">
                    Actividad:{" "}
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
                value={activity.category === 0 ? "Guardar": activity.category === 1 ?"Guardar Comida" : "Guardar Ejercicio"}
                className="bg-gray-700 text-white hover:bg-gray-900 w-full p-2 font-bold cursor-pointer disabled:opacity-10"
                disabled={!isValidActivity()}
            />
        </form>
    );
}

export default Form;
