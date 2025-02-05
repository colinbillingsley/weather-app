import {
	Compass,
	MoveDown,
	MoveDownLeft,
	MoveDownRight,
	MoveLeft,
	MoveRight,
	MoveUp,
	MoveUpLeft,
	MoveUpRight,
	Wind,
} from "lucide-react";
import React, { ReactNode } from "react";

interface WindInfoProps {
	windDirection: number;
	windSpeed: number;
	windGust: number;
}

const WindInfo = ({ windDirection, windSpeed, windGust }: WindInfoProps) => {
	function getWindDirection(deg: number): string {
		const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
		const index = Math.round(deg / 45) % 8; // 360° divided into 8 sections of 45°
		return directions[index];
	}

	function getWindDirectionIcon(deg: number): ReactNode {
		const dir: string = getWindDirection(deg);

		switch (dir) {
			case "N":
				return <MoveUp size={20} strokeWidth={2} />;
			case "NE":
				return <MoveUpRight size={20} strokeWidth={2} />;
			case "E":
				return <MoveRight size={20} strokeWidth={2} />;
			case "SE":
				return <MoveDownRight size={20} strokeWidth={2} />;
			case "S":
				return <MoveDown size={20} strokeWidth={2} />;
			case "SW":
				return <MoveDownLeft size={20} strokeWidth={2} />;
			case "W":
				return <MoveLeft size={20} strokeWidth={2} />;
			case "NW":
				return <MoveUpLeft size={20} strokeWidth={2} />;
			default:
				return <Compass size={20} strokeWidth={2} />;
		}
	}

	return (
		<div className="p-6 text-black bg-white border border-gray-500 rounded-lg">
			<div className="flex items-center gap-2 mb-5">
				<Wind size={20} strokeWidth={1} />
				<h3>Wind</h3>
			</div>

			<div className="flex items-center justify-between gap-5">
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-3">
						<span className="text-2xl">{Math.round(windSpeed)}</span>
						<div className="flex flex-col">
							<p className="text-sm">MPH</p>
							<span className="font-medium">Wind</span>
						</div>
					</div>

					<div className="flex items-center gap-3">
						<span className="text-2xl">{Math.round(windGust)}</span>
						<div className="flex flex-col">
							<p className="text-sm">MPH</p>
							<span className="font-medium">Gusts</span>
						</div>
					</div>
				</div>

				<div className="flex flex-col justify-center items-center">
					<div className="flex items-center gap-2">
						<span className="text-2xl">{getWindDirection(windDirection)}</span>
						<span>{getWindDirectionIcon(windDirection)}</span>
					</div>

					<span className="font-medium">Wind Direction</span>
				</div>
			</div>
		</div>
	);
};

export default WindInfo;
