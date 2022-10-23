import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";

type counterSetting = {
	workingMinutes:number
	breakMinutes:number
	longBreakMinutes:number
	breakAfter:number
	longBreakAfter:number
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
	const [breakMinutes, setBreakMinutes] = useState(setting.breakMinutes);
	const [longBreakMinutes, setLongBreakMinutes] = useState(setting.longBreakMinutes);
	const [breakAfter, setBreakAfter] = useState(setting.breakAfter);
	const [longBreakAfter, setLongBreakAfter] = useState(setting.longBreakAfter);
	
  return (
		<div>
  		<div class="flex justify-center">
				<div class="py-3 pr-3 text(white)">
					working Minutes
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
			<div class="flex justify-center">
				<div class="py-3 pr-3 text(white)">
					break minutes
				</div>
				<Button
					class="rounded-l-lg bg-orange px-4 py-2 text(gray-300)"
					onClick={() => setBreakMinutes(breakMinutes - 1)}>-
				</Button>
				<div class="px-4 py-2 text(2xl white) border-y-1">
    	    <p>{breakMinutes}</p>
				</div>
				<Button
					class="rounded-r-lg bg-orange px-4 py-2 text(gray-300)"
					onClick={() => setBreakMinutes(breakMinutes + 1)}>+</Button>
				<div class="py-3 pl-3 text(white)">
					minutes
				</div>
			</div>
			<div class="flex justify-center">
				<div class="py-3 pr-3 text(white)">
					long break minutes
				</div>
				<Button
					class="rounded-l-lg bg-orange px-4 py-2 text(gray-300)"
					onClick={() => setLongBreakMinutes(longBreakMinutes - 1)}>-
				</Button>
				<div class="px-4 py-2 text(2xl white) border-y-1">
    	    <p>{longBreakMinutes}</p>
				</div>
				<Button
					class="rounded-r-lg bg-orange px-4 py-2 text(gray-300)"
					onClick={() => setLongBreakMinutes(longBreakMinutes + 1)}>+</Button>
				<div class="py-3 pl-3 text(white)">
					minutes
				</div>
			</div>
			<div class="flex justify-center">
				<div class="py-3 pr-3 text(white)">
					break after 
				</div>
				<Button
					class="rounded-l-lg bg-orange px-4 py-2 text(gray-300)"
					onClick={() => setBreakAfter(breakAfter - 1)}>-
				</Button>
				<div class="px-4 py-2 text(2xl white) border-y-1">
    	    <p>{breakAfter}</p>
				</div>
				<Button
					class="rounded-r-lg bg-orange px-4 py-2 text(gray-300)"
					onClick={() => setBreakAfter(breakAfter + 1)}>+</Button>
				<div class="py-3 pl-3 text(white)">
					times
				</div>
			</div>
			<div class="flex justify-center">
				<div class="py-3 pr-3 text(white)">
					long break after 
				</div>
				<Button
					class="rounded-l-lg bg-orange px-4 py-2 text(gray-300)"
					onClick={() => setLongBreakAfter(longBreakAfter - 1)}>-
				</Button>
				<div class="px-4 py-2 text(2xl white) border-y-1">
    	    <p>{longBreakAfter}</p>
				</div>
				<Button
					class="rounded-r-lg bg-orange px-4 py-2 text(gray-300)"
					onClick={() => setLongBreakAfter(longBreakAfter + 1)}>+</Button>
				<div class="py-3 pl-3 text(white)">
					times
				</div>
			</div>
		</div>
  );
}
