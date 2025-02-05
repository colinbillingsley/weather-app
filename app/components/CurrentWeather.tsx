import { CloudRain, CloudSun, Cloudy, Snowflake, Sun } from "lucide-react";
import React from "react";

interface CurrentWeatherProps {
	address: string;
	conditions: string;
	description: string;
	temp: number;
}

const CurrentWeather = ({
	address,
	conditions,
	description,
	temp,
}: CurrentWeatherProps) => {
	function getConditionIcon(condition: string) {
		if (condition.includes("Snow")) {
			return <Snowflake size={30} strokeWidth={1} />;
		} else if (condition.includes("Rain")) {
			return <CloudRain size={30} strokeWidth={1} />;
		} else if (condition.includes("Overcast")) {
			return <Cloudy size={30} strokeWidth={1} />;
		} else if (condition.includes("Partially cloudy")) {
			return <CloudSun size={30} strokeWidth={1} />;
		} else if (condition.includes("Clear")) {
			return <Sun size={30} strokeWidth={1} />;
		} else {
			return "- - -";
		}
	}

	return (
		<div className="p-6 text-black bg-white border border-gray-500 rounded-lg">
			<div className="flex flex-col items-center justify-center gap-2">
				<h3 className="text-3xl">{address}</h3>

				<p className="text-7xl font-extralight">{Math.round(temp)}°F</p>

				<div className="flex items-center gap-2">
					<span>{getConditionIcon(conditions)}</span>
					<p className="text-xl font-normal">{conditions}</p>
				</div>
				<p className="text-base font-extralight">{description}</p>
			</div>
		</div>
	);
};

export default CurrentWeather;
