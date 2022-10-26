import { useState, useEffect } from "preact/hooks";
import * as log from "https://deno.land/std/log/mod.ts";


export default function Timer(min:number, sec:number) {
	const [time, setTime] = useState({
		minutes: min,
		seconds: sec
	});

	function handleMinutesCount() {
		setTime({
			...time,
			minutes: time.minutes - 1,
			seconds: 59
		});
	}

	function handleSecondsCount() {
		setTime({
			...time,
			seconds: time.seconds - 1
		});
	}

	function handleResetTime() {
		setTime({
			...time,
			minutes: min,
			seconds: sec
		});
	}

	const tick = () => {
		if (time.minutes === 0 && time.seconds === 0) {
			handleResetTime();
		} else if (time.seconds === 0) {
			handleMinutesCount();
		} else {
			handleSecondsCount();
		}
	};

	useEffect(() => {
		const timerId = setInterval(() => tick(), 1000);
		Logger.info('useEffect called!');
		return () => clearInterval(timerId);
	});

	return (
		<div class="text(center 9xl white)">
			<p>{time.minutes.toString()}:{time.seconds.toString()}</p>
		</div>
	);
}

