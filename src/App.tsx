import { useEffect, useMemo, useReducer } from "react";
import { activityReducer, initialState } from "./reducer/activity-reducer";
import Form from "./components/Form";
import ActivityList from "./components/ActivityList";

function App() {
    const [state, dispatch] = useReducer(activityReducer, initialState);

    useEffect(() => {
        localStorage.setItem("activities", JSON.stringify(state.activities));
    }, [state.activities]);

    const canRestartApp = useMemo(
        () => state.activities.length > 0,
        [state.activities]
    );

    return (
        <>
            <header className="bg-lime-600 py-3">
                <div className="max-w-4xl mx-auto flex justify-between">
                    <h1 className="text-center text-lg font-bold text-white uppercase">
                        Contador de Calorias
                    </h1>
                    <button
                        className="bg-gray-800 hover:bg-gray-900 p-2 font-bold uppercase text-white cursor-pointer rounded-lg disabled:opacity-30"
                        onClick={() => {
                            dispatch({ type: "restart-app" });
                        }}
                        disabled={!canRestartApp}
                    >
                        Reiniciar App
                    </button>
                </div>
            </header>
            <section className="bg-lime-500 py-5 px-5">
                <div className="max-w-4xl mx-auto">
                    <Form dispatch={dispatch} state={state} />
                </div>
            </section>
            <section className="py-4 pb-10 px-5">
                <ActivityList
                    activities={state.activities}
                    dispatch={dispatch}
                />
            </section>
        </>
    );
}

export default App;
