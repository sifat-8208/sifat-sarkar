import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-center flex-col h-screen w-full text-white p-20 bg-white dark:bg-darkTheme pt-40">
            <h4 className="text-red-700 text-2xl">Oops! Page Not Found 😔 | 404</h4>
            <p className="mt-5 border-t-4 text-white/80 text-center border-gray-600">It seems you've wandered off the beaten path. The page you're looking for doesn't exist (or it might have been moved). But don't worry, we've got you covered!</p>

            <Link className="border px-5 rounded-full mt-6 border-gray-500 bg-darkTheme hover:bg-white/80 hover:text-black duration-500" href="/">Home</Link>
        </div>
    );
}