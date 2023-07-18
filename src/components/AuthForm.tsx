import Link from "next/link"

export const AuthForm = ()  => {
    return(
        <div className="min-h-screen flex gap-5 justify-center items-center">
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <Link href="/register">Register</Link>
          </button>
          <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            <Link href="/login">Login</Link>
          </button>
        </div>
    )
}