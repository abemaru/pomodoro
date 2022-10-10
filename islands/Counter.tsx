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
				<Button onClick={() => setCount(count - 1)}>-1</Button>
			</div>
			<div class="px-5 text(4xl white)">
        <p>{count}</p>
			</div>
			<div>
        <Button onClick={() => setCount(count + 1)}>+1</Button>
			</div>
    </div>
  );
}
