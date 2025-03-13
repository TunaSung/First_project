function SignInForm () {
    return(
        <form action="" id="signIn-form" className="bg-white rounded-lg px-3 py-5 max-xl:px-2 max-xl:py-3 max-lg:px-7 max-lg:py-10 max-md:px-3 max-md:py-5 max-sm:py-2 max-sm:text-sm flex flex-col">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="border rounded-md p-2 mb-3 max-xl:w-45 max-lg:w-full max-md:w-45 max-sm:w-30 max-sm:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your email" required/>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="border rounded-md p-2 mb-3 max-xl:w-45 max-lg:w-full max-md:w-45 max-sm:w-30 max-sm:placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="Enter your password" required/>
            <div className="mb-3 flex items-center">
                <input type="checkbox" id="rememberMe" className="mr-2" />
                <label htmlFor="rememberMe" className="text-sm">Remember me</label>
            </div>
            <a href="#!">
                <button type="submit" id="signIn-btn" className="rounded-lg bg-black/60 w-full text-[#ccc] hover:text-white hover:bg-black/40 cursor-pointer mb-3">Sign in</button>
            </a>
            <a href="#!" className="hover:underline text-black hover:text-red-800">Forget password?</a>
        </form>
    )
}
export default SignInForm;