export default function LoadingSpinner() {
    return (
        <div className="relative w-12 h-12 rounded-full animate-spin">
            <div className="absolute top-0 left-0 w-full h-full border-t-4 border-blue-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-r-4 border-green-500 rounded-full"></div>
            <div className="absolute top-0 left-0 w-full h-full border-b-4 border-yellow-500 rounded-full"></div>
        </div>
    );
}