import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

type counterSetting = {
	workingMinutes:number
	breakMinutes:number
	longBreakMinutes:number
	breakAfter:number
	longBreakAfter:number
}



interface CounterProps {
  start: number;
}

function initCounterSettings(): counterSetting {
	
	return {
		'workingMinutes': 25,
		'breakMinutes': 5,
		'longBreakMinutes': 15,
		'breakAfter': 1,
		'longBreakAfter': 4,
	}
}


export default function Counter() {
	const setting = initCounterSettings();
  const [workingMinutes, setWorkingMinutes] = useState(setting.workingMinutes);
	
  return (
    <div class="flex justify-center">
			<div class="py-3 pr-3 text(white)">
				Mob Timer
			</div>
			<Button
				class="rounded-l-lg bg-orange px-4 py-2 text(gray-300)"
				onClick={() => setWorkingMinutes(workingMinutes - 1)}>-
			</Button>
			<div class="px-4 py-2 text(2xl white) border-y-1">
        <p>{workingMinutes}</p>
			</div>
			<Button
				class="rounded-r-lg bg-orange px-4 py-2 text(gray-300)"
				onClick={() => setWorkingMinutes(workingMinutes + 1)}>+</Button>
			<div class="py-3 pl-3 text(white)">
				minutes
			</div>
    </div>
  );
}
