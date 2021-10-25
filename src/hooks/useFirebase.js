import { useState } from 'react';
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';
import { useEffect } from 'react';
import initializeAuthentication from '../Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const auth = getAuth();
	const googleProvider = new GoogleAuthProvider();
	const [isLoading, setIsLoading] = useState(true);

	const signInUsingGoogle = () => {
		return signInWithPopup(auth, googleProvider);
	};

	const logOut = () => {
		setIsLoading(true);
		signOut(auth)
			.then(() => {
				setUser({});
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// observe whether user auth state changed or not
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				setUser({});
			}
			setIsLoading(false);
		});

		return () => unsubscribe;
	}, []);

	return {
		user,
		isLoading,
		setIsLoading,
		signInUsingGoogle,
		logOut,
	};
};

export default useFirebase;
