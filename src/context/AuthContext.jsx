import {createContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {jwtDecode} from "jwt-decode";

const baseUrl = import.meta.env.VITE_API_BASE_URL;

export const AuthContext = createContext({});

function AuthContextProvider({children}) {
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });

    const navigate = useNavigate();

    async function fetchUserData(token, signal) {
        const decoded = jwtDecode(token);
        const userId = decoded.userId;

        try {
            const response = await axios.get(`${baseUrl}/users/${userId}`, {
                signal: signal,
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toggleIsAuth({
                isAuth: true,
                user: {
                    email: response.data.email,
                    id: response.data.id,
                    roles: response.data.roles,
                },
                status: "done",
            });

        } catch (error) {
            if (axios.isCancel(error) || error.name === "CanceledError") {
                return;
            }
            localStorage.removeItem("token");
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: "done",
            });
        }
    }

    useEffect(() => {
        const controller = new AbortController();

        const token = localStorage.getItem("token");
        if (token) {
            void fetchUserData(token, controller.signal);
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: "done",
            })
        }

        return function cleanup() {
            controller.abort();
        };
    }, []);

    async function login(userDetails) {
        localStorage.setItem("token", userDetails.token);

        await fetchUserData(userDetails.token);
        navigate("/profiel");
    }

    function logout() {
        localStorage.removeItem("token");

        toggleIsAuth({
            isAuth: false,
            user: null,
            status: "done",
        });
        navigate("/");
    }

    const contextData = {
        user: isAuth.user,
        isAuth: isAuth.isAuth,
        status: isAuth.status,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;