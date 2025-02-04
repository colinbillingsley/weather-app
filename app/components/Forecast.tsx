import { CloudRain, CloudSun, Cloudy, Sun } from "lucide-react";
import React from "react";
import dayjs from "dayjs";

interface ForecastProps {
	cloudcover: number;
	conditions: string;
	datetime: string;
	datetimeEpoch: number;
	dew: number;
	feelslike: number;
	humidity: number;
	icon: string;
	moonphase: number;
	precip: number;
	precipprob: number;
	preciptype: string | null;
	pressure: number;
	snow: number;
	snowdepth: number;
	solarenergy: number;
	solarradiation: number;
	source: string;
	stations: string[];
	sunrise: string;
	sunriseEpoch: number;
	sunset: string;
	sunsetEpoch: number;
	temp: number;
	tempmax: number;
	tempmin: number;
	uvindex: number;
	visibility: number;
	winddir: number;
	windgust: number;
	windspeed: number;
}

function getConditionIcon(condition: string) {
	switch (condition) {
		case "Clear":
			return <Sun size={30} strokeWidth={1} />;
		case "Partially cloudy":
			return <CloudSun size={30} strokeWidth={1} />;
		case "Rain, Partially cloudy":
			return <CloudRain size={30} strokeWidth={1} />;
		case "Overcast":
			return <Cloudy size={30} strokeWidth={1} />;
		case "Clear":
			return <Sun size={30} strokeWidth={1} />;
		default:
			return "- - -";
	}
}

function getDayOfWeek(day: string) {
	if (day === dayjs().format("YYYY-MM-DD")) {
		return "Today";
	} else {
		const dayNum = dayjs(day).day();
		switch (dayNum) {
			case 0:
				return "Sun";
			case 1:
				return "Mon";
			case 2:
				return "Tue";
			case 3:
				return "Wed";
			case 4:
				return "Thu";
			case 5:
				return "Fri";
			case 6:
				return "Sat";
		}
	}
}

const Forecast = ({ forecast }: { forecast: ForecastProps[] }) => {
	return (
		<div className="p-4 text-black bg-white border border-gray-500 rounded-lg w-full">
			<div className="flex flex-col items-center justify-center gap-2 w-full">
				<p className="mr-auto text-lg mb-2">Projected Forecast</p>
				{forecast?.length > 0 ? (
					<ul className="flex flex-col justify-around items-center gap-3 w-full">
						{forecast.map((day: ForecastProps, index: number) => (
							<li
								key={index}
								className="flex justify-between items-center gap-2 h-[4rem] px-4 border border-gray-500 rounded-md w-full"
							>
								<div className="flex justify-between items-center gap-3 w-[7rem] p-2">
									<p>{getDayOfWeek(day.datetime)}</p>
									<span>{getConditionIcon(day.conditions)}</span>
								</div>

								<div className="flex justify-between items-center gap-3 w-[7rem] p-2">
									<p>H:{Math.round(day.tempmax)}</p>
									<p>L:{Math.round(day.tempmin)}</p>
								</div>
							</li>
						))}
					</ul>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Forecast;
