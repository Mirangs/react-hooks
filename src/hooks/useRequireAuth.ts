import { useEffect } from "react";
import { useAuth } from "./useAuth";
import { useRouter } from "./useRouter";

export const useRequireAuth = (redirectUrl = "/") => {
	const auth = useAuth();
	const router = useRouter();

	useEffect(() => {
		if (auth && !auth.user) {
			router.push(redirectUrl);
		}
	}, [auth, router, redirectUrl]);

	return auth;
};
