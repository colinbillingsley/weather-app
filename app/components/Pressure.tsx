import { CircleGauge } from "lucide-react";
import React from "react";

interface PressureProps {
	pressure: number;
}

const Pressure = ({ pressure }: PressureProps) => {
	function categorizePressure(pressure: number): string {
		if (pressure > 1020) {
			return "High Pressure";
		} else if (pressure >= 1015 && pressure <= 1020) {
			return "Slightly High Pressure";
		} else if (pressure >= 1000 && pressure < 1015) {
			return "Normal Pressure";
		} else if (pressure >= 990 && pressure < 1000) {
			return "Slightly Low Pressure";
		} else if (pressure < 990) {
			return "Low Pressure";
		} else {
			return "Invalid Pressure Value.";
		}
	}

	function describePressure(pressure: number): string {
		if (pressure > 1020) {
			return "Clear skies, dry conditions, and stable weather.";
		} else if (pressure >= 1015 && pressure <= 1020) {
			return "Fair weather with some cloud cover.";
		} else if (pressure >= 1000 && pressure < 1015) {
			return "Average conditions with variable weather.";
		} else if (pressure >= 990 && pressure < 1000) {
			return "Indicates possible cloudiness or rain.";
		} else if (pressure < 990) {
			return "Stormy or unsettled weather, rain, and wind are likely.";
		} else {
			return "Invalid Pressure Value.";
		}
	}

	return (
		<div className="p-6 text-black bg-white border border-gray-500 rounded-lg">
			<div className="flex items-center gap-2 mb-5">
				<CircleGauge size={20} strokeWidth={1} />
				<h3>Pressure</h3>
			</div>

			<div className="flex flex-col gap-3">
				<div className="flex flex-col">
					<span className="text-2xl">{pressure} hPa</span>
					<span>{categorizePressure(pressure)}</span>
				</div>
				<p className="text-sm">{describePressure(pressure)}</p>
			</div>
		</div>
	);
};

export default Pressure;
