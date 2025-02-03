"use client";
import { Search } from "lucide-react";
import React, { useState } from "react";
import Button from "./Button";
import H1 from "./H1";
import Input from "./Input";
import { useLocationContext } from "../context/LocationContext";

const Hero = () => {
	const [selectedCity, setSelectedCity] = useState("");
	const { setLocation } = useLocationContext();

	const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSelectedCity(e.target.value);
	};

	const handleCityClick = () => {
		setLocation(selectedCity);
	};

	return (
		<div className="flex flex-col items-center justify-center gap-4 p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<H1>Welcome to Weather.io</H1>
			<span className="text-zinc-500">
				Get real-time updates and accurate forecasts for your location.
			</span>
			<div className="flex items-center justify-start gap-2">
				<Input
					placeholder={"Enter a location"}
					value={selectedCity}
					onChange={handleCityChange}
				/>
				<Button variant="outline" className="h-12" onClick={handleCityClick}>
					<Search size={20} />
				</Button>
			</div>
		</div>
	);
};

export default Hero;
