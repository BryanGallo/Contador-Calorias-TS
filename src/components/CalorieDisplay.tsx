type CaloriesDisplayProps = {
    calories: number;
    nameCalori: string;
    category?: number;
};

const CalorieDisplay = ({
    calories,
    nameCalori,
    category,
}: CaloriesDisplayProps) => {
    return (
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            <span
                className={`text-6xl font-black ${
                    category === 1
                        ? "text-orange-500"
                        : category === 2
                        ? "text-lime-500"
                        : "text-white"
                }`}
            >
                {calories}
            </span>
            {nameCalori}
        </p>
    );
};

export default CalorieDisplay;
