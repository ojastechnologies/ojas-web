import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="text-center space-y-6 px-4">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
                    404
                </h1>
                <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
                <p className="text-gray-600 max-w-md mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-flex px-8 py-4 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-sky-600 transition-all shadow-lg hover:shadow-blue-500/30"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
