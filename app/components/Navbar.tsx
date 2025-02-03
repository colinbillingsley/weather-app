"use client";

import { useLocationContext } from "../context/LocationContext";

const Navbar = () => {
	const { location } = useLocationContext();

	return (
		<nav className="flex items-center justify-between w-full h-24 px-2 py-4 bg-gray-100 border-b border-b-gray-200">
			<p className="">Weather.io</p>
			<p>Current Location: {location || "No location entered"}</p>
		</nav>
	);
};

export default Navbar;
