import { useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";


export default function Counter() {
	const [counters, setCounters] = useState({
		workingMinutes: 25,
		breakMinutes: 5,
		longBreakMinutes: 15,
		breakAfter: 1,
		longBreakAfter: 4,
	});

	function handleWorkingMinutesPlus() {
		setCounters({
			...counters,
			workingMinutes: counters.workingMinutes + 1
		});
	}

	function handleWorkingMinutesMinus() {
		setCounters({
			...counters,
			workingMinutes: counters.workingMinutes - 1
		});
	}

	function handleBreakMinutesPlus() {
		setCounters({
			...counters,
			breakMinutes: counters.breakMinutes + 1
		});
	}

	function handleBreakMinutesMinus() {
		setCounters({
			...counters,
			breakMinutes: counters.breakMinutes - 1
		});
	}

	function handleLongBreakMinutesPlus() {
		setCounters({
			...counters,
			longBreakMinutes: counters.longBreakMinutes + 1
		});
	}

	function handleLongBreakMinutesMinus() {
		setCounters({
			...counters,
			longBreakMinutes: counters.longBreakMinutes - 1
		});
	}

	function handleBreakAfterPlus() {
		setCounters({
			...counters,
			breakAfter: counters.breakAfter + 1
		});
	}

	function handleBreakAfterMinus() {
		setCounters({
			...counters,
			breakAfter: counters.breakAfter - 1
		});
	}

	function handleLongBreakAfterPlus() {
		setCounters({
			...counters,
			longBreakAfter: counters.longBreakAfter + 1
		});
	}

	function handleLongBreakAfterMinus() {
		setCounters({
			...counters,
			longBreakAfter: counters.longBreakAfter - 1
		});
	}

  return (
		<div>
  		<div class="flex justify-center">
				<div class="py-3 pr-3 text(white)">
					working Minutes
				</div>
				<Button
					class="rounded-l-lg bg-orange px-4 py-2 text(gray-300)"
					onClick={() => handleWorkingMinutesMinus}>-
				</Button>
				<div class="px-4 py-2 text(2xl white) border-y-1">
    	    <p>{counters.workingMinutes}</p>
				</div>
				<Button
					class="rounded-r-lg bg-orange px-4 py-2 text(gray-300)"
					onClick={() => handleWorkingMinutesPlus}>+</Button>
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
					onClick={() => handleBreakMinutesMinus}>-
				</Button>
				<div class="px-4 py-2 text(2xl white) border-y-1">
    	    <p>{counters.breakMinutes}</p>
				</div>
				<Button
					class="rounded-r-lg bg-orange px-4 py-2 text(gray-300)"
					onClick={() => handleBreakMinutesPlus}>+</Button>
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
					onClick={() => handleLongBreakMinutesMinus}>-
				</Button>
				<div class="px-4 py-2 text(2xl white) border-y-1">
    	    <p>{counters.longBreakMinutes}</p>
				</div>
				<Button
					class="rounded-r-lg bg-orange px-4 py-2 text(gray-300)"
					onClick={() => handleLongBreakMinutesPlus}>+</Button>
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
					onClick={() => handleBreakAfterMinus}>-
				</Button>
				<div class="px-4 py-2 text(2xl white) border-y-1">
    	    <p>{counters.breakAfter}</p>
				</div>
				<Button
					class="rounded-r-lg bg-orange px-4 py-2 text(gray-300)"
					onClick={() => handleBreakAfterPlus}>+</Button>
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
					onClick={() => handleLongBreakAfterMinus}>-
				</Button>
				<div class="px-4 py-2 text(2xl white) border-y-1">
    	    <p>{counters.longBreakAfter}</p>
				</div>
				<Button
					class="rounded-r-lg bg-orange px-4 py-2 text(gray-300)"
					onClick={() => handleLongBreakAfterPlus}>+</Button>
				<div class="py-3 pl-3 text(white)">
					times
				</div>
			</div>
		</div>
  );
}
