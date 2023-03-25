import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useContext, useEffect } from "react";
import { createContext, useReducer } from "react";
import { auth } from "./Firebase_config";
import set_auth_error from "./set_auth_error";
import set_user_info from "./Userinfo";

const Authstate = {
  user: {},
  error: "",
  loading: false,
  updating: false,
  authenticated: false,
};

const reducer = (state = Authstate, action) => {
  const { type, payload } = action;
  switch (type) {
    case "set_user":
      return { ...state, user: { ...payload } };

    case "set_loading":
      return { ...state, loading: true };

    case "reset_loading":
      return { ...state, loading: false };

    case "set_error":
      return { ...state, error: payload };

    case "reset_error":
      return { ...state, error: "" };

    case "set_authenticated":
      return { ...state, authenticated: true };

    case "logout":
      return {
        ...state,
        user: {},
        error: "",
        loading: false,
        updating: false,
        authenticated: false,
      };

    default:
      return state;
  }
};

const Authcontext = createContext();

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, Authstate);

  useEffect(() => {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('onauth');
        set_user_info(dispatch, user);
      }
    });
  }, []);

  function register(form) {
    return createUserWithEmailAndPassword(auth, form?.email, form?.password)
      .then(() => {
        console.log('updatepro');
        updateProfile(auth.currentUser, {
          displayName: form?.name,
          photoURL:
            "https://images.huffingtonpost.com/2015-02-22-NiceGuysFinishFirstNiceisRightblog.jpg",
        }).then(() => {
          onAuthStateChanged(auth, (user) => {
            console.log('userrr');
            set_user_info(dispatch, user);

            localStorage.setItem("action", register);
          });
        });
      })
      .catch((error) => {
        set_auth_error(dispatch, error?.code?.split("-").join(" "));
        console.log(error);
      });
  }

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        onAuthStateChanged(auth, (user) => {
          set_user_info(dispatch, user);
        });
      })
      .catch((error) => {
        set_auth_error(dispatch, error?.code?.split("-").join(" "));
      });
  }

  function logout() {
    return signOut(auth).then(() => {
      setTimeout(() => {
        dispatch({ type: "logout" });
      }, 9000);
    });
  }

  return (
    <Authcontext.Provider
      value={{
        state,
        dispatch,
        register,
        login,
        logout,
      }}
    >
      {children}
    </Authcontext.Provider>
  );
};

const useAuthContext = () => useContext(Authcontext);

export { AuthProvider, useAuthContext };
