import { useState, useEffect, useCallback } from "react";

type ExecutionStatus = "idle" | "pending" | "success" | "error";

const useAsync = <T, E = string>(
	asyncFunction: () => Promise<T>,
	immediate = true
) => {
	const [status, setStatus] = useState<ExecutionStatus>("idle");
	const [value, setValue] = useState<T | null>(null);
	const [error, setError] = useState<E | null>(null);

	const execute = useCallback(async () => {
		setStatus("pending");
		setValue(null);
		setError(null);

		try {
			const response: any = await asyncFunction();
			setValue(response);
			setStatus("success");
		} catch (err) {
			setError(err);
			setStatus("error");
		}
	}, [asyncFunction]);

	useEffect(() => {
		if (immediate) {
			execute();
		}
	}, [execute, immediate]);

	return { execute, status, value, error };
};

export default useAsync;
