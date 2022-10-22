import Counter from "../islands/Counter.tsx";
import Timer from "../islands/Timer.tsx";
import Header from "../components/Header.tsx"

export default function Home() {
  return (
		<div class="h-screen w-screen bg-gray-700">
      <Counter start={3} />
			<Timer />
		</div>
  );
}
