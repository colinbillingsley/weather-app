"use client";
import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useContext,
	useState,
} from "react";

interface LocationContextType {
	location: string;
	setLocation: Dispatch<SetStateAction<string>>;
	getLocation: () => string;
}

export const LocationContext = createContext<LocationContextType | null>(null);

export const LocationContextProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [location, setLocation] = useState("");

	function getLocation(): string {
		return location;
	}

	return (
		<LocationContext.Provider value={{ location, getLocation, setLocation }}>
			{children}
		</LocationContext.Provider>
	);
};

// Custom hook to use the AuthContext
export const useLocationContext = () => {
	const context = useContext(LocationContext);
	if (!context) {
		throw new Error(
			"useLocationContext must be used within an LocationProvider"
		);
	}
	return context;
};
