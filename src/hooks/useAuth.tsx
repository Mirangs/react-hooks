import React, { useState, useEffect, useContext, createContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-use-before-define
type AuthContextType = ReturnType<typeof useProvideAuth> | null;
const authContext = createContext<AuthContextType>(null);
interface IUserState {
	email: string;
	password: string;
}

function useProvideAuth() {
	const [user, setUser] = useState<null | IUserState>(null);

	// TODO: implement signin
	const signin = (email: string, password: string) => {
		return setUser({ email, password });
	};

	// TODO: implement signup
	const signup = (email: string, password: string) => {
		return new Promise((resolve) => resolve({ email, password }));
	};

	// TODO: implement signout
	const signount = () => {
		return setUser(null);
	};

	// TODO: implement sendPasswordResetEmail
	const sendPasswordResetEmail = (email: string) => {
		return new Promise((resolve) => resolve(true));
	};

	// TODO: implement confirmPasswordReset
	const confirmPasswordReset = (code: string, password: string) => {
		return new Promise((resolve) => resolve(true));
	};

	useEffect(() => {
		const unsubscribe = () => {
			if (Math.random() > 0.5) {
				setUser({ email: "user", password: "123" });
			} else {
				setUser(null);
			}
		};

		return () => unsubscribe();
	}, []);

	return {
		user,
		signin,
		signup,
		signount,
		sendPasswordResetEmail,
		confirmPasswordReset,
	};
}
export const ProvideAuth: React.FC = ({ children }) => {
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{children}</authContext.Provider>;
};

export const useAuth = (): AuthContextType => useContext(authContext);
