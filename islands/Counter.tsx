import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div class="flex justify-center">
			<div class="py-3 text(white)">
				Mob Timer
			</div>
			<Button
				class="rounded-l-lg bg-orange px-4 py-2 text(gray-300)"
				onClick={() => setCount(count - 1)}>-
			</Button>
			<div class="px-4 py-2 text(2xl white) border-y-1">
        <p>{count}</p>
			</div>
			<Button
				class="rounded-r-lg bg-orange px-4 py-2 text(gray-300)"
				onClick={() => setCount(count + 1)}>+</Button>
			<div class="py-3 text(white)">
				minutes
			</div>
    </div>
  );
}
