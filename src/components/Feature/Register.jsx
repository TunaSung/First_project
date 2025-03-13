function Register () {
    return(
        <form action="" id="signIn-form" className="bg-white rounded-lg px-3 py-5 max-xl:px-2 max-xl:py-3 max-lg:px-7 max-lg:py-10 max-md:px-3 max-md:py-5 max-sm:py-2 max-sm:text-sm flex flex-col">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="border rounded-md p-2 mb-3 max-xl:w-45 max-lg:w-full max-md:w-45 max-sm:w-30 max-sm:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" required/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="border rounded-md p-2 mb-3 max-xl:w-45 max-lg:w-full max-md:w-45 max-sm:w-30 max-sm:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your password" required/>
            <label htmlFor="confirm-password">Confirm password:</label>
            <input type="password" id="confirm-password" className="border rounded-md p-2 mb-3 max-xl:w-45 max-lg:w-full max-md:w-45 max-sm:w-30 max-sm:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your password" required/>
            <a href="#!">
                <button type="submit" id="signIn-btn" className="rounded-lg bg-black/60 w-full text-[#ccc] hover:text-white hover:bg-black/40 cursor-pointer mb-3">Register</button>
            </a>
        </form>
    )
}
export default Register