const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			frases: "",
			audios: [],
			audiosTest: [
				{
					src: "https://res.cloudinary.com/dgn3hxolh/video/upload/v1672924137/ES_Dancing_Pink_Orbs_-_369_cjldxl.mp3",
					title: "Meditación 1",
					id: 1,
				},
				{
					src: "https://res.cloudinary.com/dgn3hxolh/video/upload/v1672924146/ES_369_Seconds_Of_Bliss_-_369_eowx8i.mp3",
					title: "Meditación 2",
					id: 2,
				},
				{
					src: "https://res.cloudinary.com/dgn3hxolh/video/upload/v1672924146/ES_YETZIRA_-_369_yamepj.mp3",
					title: "Meditación 3",
					id: 3,
				},
				{
					src: "https://res.cloudinary.com/dgn3hxolh/video/upload/v1672924158/ES_Meditation_Aquatic_-_369_c7kytc.mp3",
					title: "Meditación 4",
					id: 4,
				},
			],
			message: null,
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white",
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white",
				},
			],
		},
		actions: {
			getAudios: () => {
				fetch(
					"https://318116478912829:Qe6tfvIi84x0H6BIR-2gwiO52x4@api.cloudinary.com/v1_1/dgn3hxolh/resources/video"
				)
					.then((resp) => resp.json())
					.then((data) => {
						setStore({ audios: data.results });
					});
			},

			getInspiration: () => {
				fetch("https://api.quotable.io/random")
					.then((response) => response.json())
					.then((data) => {
						setStore({ frases: data.content });
					});
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: async () => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
					const data = await resp.json();
					setStore({ message: data.message });
					// don't forget to return something, that is how the async resolves
					return data;
				} catch (error) {
					console.log("Error loading message from backend", error);
				}
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//reset the global store
				setStore({ demo: demo });
			},
			login: async (email, password) => {
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/login",
						{
							headers: {
								"Content-Type": "application/json"
							},
							method: "POST",
							body: JSON.stringify({
								"email": email,
								"password": password
							})
						}
					)
					const data = await resp.json()
					setStore({
						token: data.token,
						user: data.user
					})
					localStorage.setItem("token", data.token)
					// don't forget to return something, that is how the async resolves
					if (data.token) {
						return true;
					}
					return false;
				} catch (error) {
					console.log("Error loading message from backend", error)
					return false
				}
			},

			refreshToken: () => {
				setStore({
					token: localStorage.getItem("token") ? localStorage.getItem("token") : null
				})
				// condicion ? valor si se cumple : valor si no se cumple

			},

			private: async () => {
				const store = getStore()
				try {
					// fetching data from the backend
					const resp = await fetch(process.env.BACKEND_URL + "/api/private",
						{
							headers: {
								"Content-Type": "application/json",
								"Authorization": `Bearer ${store.token}`
							},
							method: "POST",
						}
					)
					const data = await resp.json()
					setStore({
						message: data.message
					})
					// don't forget to return something, that is how the async resolves
					if (data.status == 200) {
						return true;
					}
					return false;
				} catch (error) {
					console.log("Error loading message from backend", error)
				}
			},
			logout: () => {
				setStore({
					token: ""
				});
				localStorage.removeItem("token")
			}
		}
	};
};

export default getState;
