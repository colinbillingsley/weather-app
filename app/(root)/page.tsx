import Hero from "../components/Hero";
import Main from "../components/Main";

export default function Home() {
	return (
		// Hero
		<div className="p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<Hero />
			<Main />
		</div>
	);
}
