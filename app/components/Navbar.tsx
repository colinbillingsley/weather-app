"use client";

import { useLocationContext } from "../context/LocationContext";

const Navbar = () => {
	const { location } = useLocationContext();

	return (
		<nav className="flex items-center justify-between w-full h-24 p-4 bg-white border-b border-b-gray-400">
			<p className="">Weather.io</p>
			<p>Current Location: {location || "No location entered"}</p>
		</nav>
	);
};

export default Navbar;
