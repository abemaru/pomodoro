import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  return (
    <div class="flex justify-center">
			<div>
				Mob Timer
			</div>
			<div style="rounded-l-lg bg-orange">
				<Button
					class="rounded-l-lg"
					onClick={() => setCount(count - 1)}>-</Button>
			</div>
			<div class="px-4 py-2 text(2xl white) border(white 2)">
        <p>{count}</p>
			</div>
			<div>
        <Button
					class="rounded-r-lg"
				onClick={() => setCount(count + 1)}>+</Button>
			</div>
			<div>
				minutes
			</div>
    </div>
  );
}
