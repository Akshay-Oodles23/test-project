export const getTImeAndData = (date: Date): string => {
	const options: Intl.DateTimeFormatOptions = {
		month: "long",
		day: "numeric",
	};
	const formattedDate: string = date.toLocaleDateString("en-US", options);
	const hours: number = date.getHours();
	const minutes: number = date.getMinutes();
	const ampm: string = hours >= 12 ? "PM" : "AM";
	const formattedTime: string = `${hours % 12 || 12}:${
		minutes < 10 ? "0" : ""
	}${minutes} ${ampm}`;
	return `${formattedDate} at ${formattedTime}`;
};
