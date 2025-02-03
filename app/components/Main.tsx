"use client";
import React, { useEffect, useState } from "react";
import CurrentWeather from "./CurrentWeather";

const Main = () => {
	const [selectedCity, setSelectedCity] = useState("Nashville");
	const [address, setAddress] = useState("");
	const [conditions, setConditions] = useState("");
	const [temp, setTemp] = useState(0);
	const [description, setDescription] = useState("");

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

				setDescription(res.description);
			})
			.catch((err) => {
				console.error(err);
			});
	}

	useEffect(() => {
		getCityWeather(selectedCity);
	}, [selectedCity]);

	return (
		<div className="bg-white border border-gray-500 rounded-lg">
			<CurrentWeather
				address={address}
				conditions={conditions}
				description={description}
				temp={temp}
			/>
		</div>
	);
};

export default Main;
