import { useReducer } from "react";
import { activityReducer, initialState } from "./reducer/activity-reducer";
import Form from "./components/Form";
import ActivityList from "./components/ActivityList";

function App() {
    const [state, dispatch] = useReducer(activityReducer, initialState);
    
    return (
        <>
            <header className="bg-lime-600 py-3">
                <div className="max-w-4xl mx-auto flex justify-between">
                    <h1 className="text-center text-lg font-bold text-white uppercase">
                        Contador de Calorias
                    </h1>
                </div>
            </header>
            <section className="bg-lime-500 py-5 px-5">
                <div className="max-w-4xl mx-auto">
                    <Form dispatch={dispatch} />
                </div>
            </section>
            <section className="bg-lime-500 py-2 px-5">
                <ActivityList activities={state.activities} />
            </section>
        </>
    );
}

export default App;
