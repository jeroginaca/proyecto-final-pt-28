const getState = ({ getStore, getActions, setStore }) => {

  return {
    store: {
      frases: "",
      audios: [],
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
      getAudios: (id) => {
        fetch(process.env.BACKEND_URL + `/api/audios-by-type/${id}`)
          .then((resp) => resp.json())
          .then((data) => {
            setStore({ audios: data });
          });
      },

      getInspiration: () => {
        fetch("https://api.quotable.io/random")
          .then((response) => response.json())
          .then((data) => {
            setStore({ frases: data });
          });
      },
      // Use getActions to call a function within a fuction
      exampleFunction: () => {
        getActions().changeColor(0, "green");
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
          const resp = await fetch(process.env.BACKEND_URL + "/api/login", {
            headers: {
              "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
            }),
          });
          const data = await resp.json();
          setStore({
            token: data.token,
            user: data.user,
          });
          localStorage.setItem("token", data.token);
          // don't forget to return something, that is how the async resolves
          if (data.token) {
            return true;
          }
          return false;
        } catch (error) {
          console.log("Error loading message from backend", error);
          return false;
        }
      },

      refreshToken: () => {
        setStore({
          token: localStorage.getItem("token")
            ? localStorage.getItem("token")
            : null,
        });
      },

      private: async () => {
        const store = getStore();
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/private", {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${store.token}`,
            },
            method: "POST",
          });
          const data = await resp.json();
          setStore({
            message: data.message,
          });
          // don't forget to return something, that is how the async resolves
          if (data.status == 200) {
            return true;
          }
          return false;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      logout: () => {
        setStore({
          token: "",
        });
        localStorage.removeItem("token");
      },
    },
  };
};

export default getState;
