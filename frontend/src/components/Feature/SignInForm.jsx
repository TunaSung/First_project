import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../service/authService";

function SignInForm() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(email, password);
            localStorage.setItem("token", data.token); // 存 token
            navigate("/"); // 跳回首頁
        } catch (err) {
            setError(err);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white rounded-lg px-3 py-5 max-xl:px-2 max-xl:py-3 max-lg:px-7 max-lg:py-10 max-md:px-3 max-md:py-5 max-sm:py-2 max-sm:text-sm flex flex-col">
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border rounded-md p-2 mb-3 max-xl:w-45 max-lg:w-full max-md:w-45 max-sm:w-30 max-sm:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" 
                placeholder="Enter your email"
                required
            />
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border rounded-md p-2 mb-3 max-xl:w-45 max-lg:w-full max-md:w-45 max-sm:w-30 max-sm:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" 
                placeholder="Enter your password"
                required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button type="submit" className="rounded-lg bg-black/60 w-full text-[#ccc] hover:text-white hover:bg-black/40 cursor-pointer mb-3">
                Sign In
            </button>
            <a href="#!" className="hover:underline text-black hover:text-red-800">Forget password?</a>
        </form>
    );
}

export default SignInForm