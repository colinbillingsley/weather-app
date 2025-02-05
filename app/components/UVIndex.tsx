import { Sun } from "lucide-react";
import React, { ReactNode } from "react";

interface UVIndexProps {
	uvIndex: number;
}

const UVIndex = ({ uvIndex }: UVIndexProps) => {
	function categorizeUVIndex(uvIndex: number): string {
		if (uvIndex >= 0 && uvIndex <= 2) {
			return "Low";
		} else if (uvIndex >= 3 && uvIndex <= 5) {
			return "Moderate";
		} else if (uvIndex >= 6 && uvIndex <= 7) {
			return "High";
		} else if (uvIndex >= 8 && uvIndex <= 10) {
			return "Very High";
		} else if (uvIndex >= 11) {
			return "Extreme";
		} else {
			return "Invalid UV Index.";
		}
	}

	function describeUVIndex(uvIndex: number): string {
		if (uvIndex >= 0 && uvIndex <= 2) {
			return "Minimal risk. Wear sunglasses and sunscreen if needed.";
		} else if (uvIndex >= 3 && uvIndex <= 5) {
			return "Wear sunglasses, SPF 30+ sunscreen, and a hat. Seek shade during midday.";
		} else if (uvIndex >= 6 && uvIndex <= 7) {
			return "SPF 30+ sunscreen, protective clothing, and shade are recommended. Avoid the sun from 10 AM to 4 PM.";
		} else if (uvIndex >= 8 && uvIndex <= 10) {
			return "SPF 50+ sunscreen, sunglasses, and staying indoors during peak hours is advised.";
		} else if (uvIndex >= 11) {
			return "Extremely high risk. Maximum protection needed: SPF 50+, covering skin, sunglasses, and avoiding exposure.";
		} else {
			return "Invalid UV Index.";
		}
	}

	return (
		<div className="p-6 text-black bg-white border border-gray-500 rounded-lg">
			<div className="flex items-center gap-2 mb-5">
				<Sun size={20} strokeWidth={1} />
				<h3>UV Index</h3>
			</div>

			<div className="flex flex-col gap-3">
				<div className="flex flex-col">
					<span className="text-2xl">{uvIndex}</span>
					<p>{categorizeUVIndex(uvIndex)}</p>
				</div>
				<p className="text-sm">{describeUVIndex(uvIndex)}</p>
			</div>
		</div>
	);
};

export default UVIndex;
