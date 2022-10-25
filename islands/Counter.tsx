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
  		<div class="flex justify-center mb-1">
				<div class="text(white) w-40">
					working Minutes
				</div>
				<Button
					class="rounded-l-lg bg-orange px-4 py-2 text(gray-300) w-10"
		 			onClick={handleWorkingMinutesMinus}>-
				</Button>
				<div class="text(2xl white) border-y-1 w-12">
    	    <p>{counters.workingMinutes}</p>
				</div>
				<Button
					class="rounded-r-lg bg-orange px-4 py-2 text(gray-300) w-10"
					onClick={handleWorkingMinutesPlus}>+</Button>
				<div class="text(white) w-40">
					minutes
				</div>
  		</div>
			<div class="flex justify-center mb-1">
				<div class="text(white) w-40">
					break minutes
				</div>
				<Button
					class="rounded-l-lg bg-orange px-4 py-2 text(gray-300) w-10"
					onClick={handleBreakMinutesMinus}>-
				</Button>
				<div class="text(2xl white) border-y-1 w-12">
    	    <p>{counters.breakMinutes}</p>
				</div>
				<Button
					class="rounded-r-lg bg-orange px-4 py-2 text(gray-300) w-10"
					onClick={handleBreakMinutesPlus}>+</Button>
				<div class="text(white) w-40">
					minutes
				</div>
			</div>
			<div class="flex justify-center mb-1">
				<div class="text(white) w-40">
					long break minutes
				</div>
				<Button
					class="rounded-l-lg bg-orange px-4 py-2 text(gray-300) w-10"
					onClick={handleLongBreakMinutesMinus}>-
				</Button>
				<div class="text(2xl white) border-y-1 w-12">
    	    <p>{counters.longBreakMinutes}</p>
				</div>
				<Button
					class="rounded-r-lg bg-orange px-4 py-2 text(gray-300) w-10"
					onClick={handleLongBreakMinutesPlus}>+</Button>
				<div class="text(white) w-40">
					minutes
				</div>
			</div>
			<div class="flex justify-center mb-1">
				<div class="text(white) w-40">
					break after 
				</div>
				<Button
					class="rounded-l-lg bg-orange px-4 py-2 text(gray-300) w-10"
					onClick={handleBreakAfterMinus}>-
				</Button>
				<div class="text(2xl white) border-y-1 w-12">
    	    <p>{counters.breakAfter}</p>
				</div>
				<Button
					class="rounded-r-lg bg-orange px-4 py-2 text(gray-300) w-10"
					onClick={handleBreakAfterPlus}>+</Button>
				<div class="text(white) w-40">
					times
				</div>
			</div>
			<div class="flex justify-center mb-1">
				<div class="text(white) w-40">
					long break after 
				</div>
				<Button
					class="rounded-l-lg bg-orange text(gray-300) w-10"
					onClick={handleLongBreakAfterMinus}>-
				</Button>
				<div class="text(2xl white) border-y-1 w-12">
    	    <p>{counters.longBreakAfter}</p>
				</div>
				<Button
					class="rounded-r-lg bg-orange text(gray-300) w-10"
					onClick={handleLongBreakAfterPlus}>+</Button>
				<div class="text(white) w-40">
					times
				</div>
			</div>
		</div>
  );
}
