import { Sun } from "lucide-react";
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
		switch (condition) {
			case "Clear":
				return <Sun size={50} strokeWidth={1} />;
			default:
				return "Unknown";
		}
	}

	return (
		<div className="p-4 text-black">
			<div className="flex flex-col items-center justify-center gap-2">
				<h3 className="text-3xl">{address}</h3>

				<p className="text-7xl font-extralight">{temp}°F</p>

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
