import Counter from "../islands/Counter.tsx";
import Timer from "../islands/Timer.tsx";
import PomodoroHeader from "../components/Header.tsx"

export default function Home() {
  return (
		<div class="h-screen w-screen bg-gray-700">
			<PomodoroHeader />
      <Counter />
			<Timer min={10} sec={10}/>
		</div>
  );
}
