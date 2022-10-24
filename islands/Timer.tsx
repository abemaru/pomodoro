import { workingMinutes } from "./Counter.tsx";

const Min = 10;
const Sec = 10;

export default function Timer() {
	return (
		<div class="text(center 9xl white)">
			{Min}:{Sec}
		</div>
	)
}
