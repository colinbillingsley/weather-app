"use client";
import { useState } from "react";
import Input from "./Input";
import { useLocationContext } from "../context/LocationContext";

type AutoCompleteProps = {
	label: string;
	cities: string[]; // Array of city names
	value: string;
	onChange: (value: string) => void;
};

const AutoComplete: React.FC<AutoCompleteProps> = ({
	label,
	cities,
	value,
	onChange,
}) => {
	const [inputValue, setInputValue] = useState(value);
	const [filteredCities, setFilteredCities] = useState<string[]>([]);
	const [isOpen, setIsOpen] = useState(false);

	const { setLocation } = useLocationContext();

	// Filter cities based on input
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const input = e.target.value;
		setInputValue(input);
		onChange(input); // update parent component value
		setIsOpen(true); // open suggestions dropdown
		if (input) {
			setFilteredCities(
				cities.filter((city) =>
					city.toLowerCase().includes(input.toLowerCase())
				)
			);
		} else {
			setFilteredCities([]);
		}
	};

	// Handle selection of a city
	const handleSelectCity = (city: string) => {
		setInputValue(city);
		setLocation(city);
		onChange(city); // update parent component value
		setIsOpen(false); // close suggestions dropdown
	};

	// Close the dropdown when clicking outside
	const handleOutsideClick = () => {
		setIsOpen(false);
	};

	return (
		<div className="relative flex flex-col">
			<Input
				type="text"
				value={inputValue}
				onChange={handleInputChange}
				onFocus={() => setIsOpen(true)} // Open suggestions on focus
				onBlur={handleOutsideClick} // Close suggestions when blur
				placeholder={label}
			/>
			{isOpen && filteredCities.length > 0 && (
				<div className="absolute left-0 right-0 top-14 mt-1 max-h-60 overflow-y-auto border bg-white rounded shadow-lg z-10">
					{filteredCities.map((city) => (
						<div
							key={city}
							className="p-2 cursor-pointer hover:bg-gray-200"
							onClick={() => handleSelectCity(city)}
						>
							{city}
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default AutoComplete;
