"use client";
import React, { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import WindInfo from "./WindInfo";
import UVIndex from "./UVIndex";
import Pressure from "./Pressure";

const Main = () => {
	const [selectedCity, setSelectedCity] = useState("Nashville");
	const [address, setAddress] = useState("");
	const [conditions, setConditions] = useState("");
	const [temp, setTemp] = useState(0);
	const [description, setDescription] = useState("");
	const [forecast, setForecast] = useState([]);
	const [windDirection, setWindDirection] = useState(0);
	const [windSpeed, setWindSpeed] = useState(0);
	const [windGust, setWindGust] = useState(0);
	const [uvIndex, setUVIndex] = useState(0);
	const [pressure, setPressure] = useState(0);

	async function getCityWeather(city: string) {
		await fetch(
			`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=us&key=TT65QYEWTHHZMPAT6UQC8YLH4&contentType=json`,
			{
				method: "GET",
				headers: {},
			}
		)
			.then(async (response) => {
				console.log(response);
				const res = await response.json();
				console.log(res);

				const currentConditions = res.currentConditions;

				setAddress(res.address);
				setConditions(currentConditions.conditions);
				setTemp(currentConditions.temp);
				setWindDirection(currentConditions.winddir);
				setWindSpeed(currentConditions.windspeed);
				setWindGust(currentConditions.windgust);
				setUVIndex(currentConditions.uvindex);
				setPressure(currentConditions.pressure);

				setDescription(res.description);
				setForecast(res.days);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	useEffect(() => {
		getCityWeather(selectedCity);
	}, [selectedCity]);

	return (
		<div className="flex flex-col gap-4">
			<CurrentWeather
				address={address}
				conditions={conditions}
				description={description}
				temp={temp}
			/>
			<Forecast forecast={forecast} />
			<div className="grid grid-cols-4 gap-4">
				<WindInfo
					windDirection={windDirection}
					windSpeed={windSpeed}
					windGust={windGust}
				/>
				<UVIndex uvIndex={uvIndex} />
				<Pressure pressure={pressure} />
			</div>
		</div>
	);
};

export default Main;
