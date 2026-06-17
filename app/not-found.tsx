import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50/50 to-white">
            <div className="text-center space-y-6 px-4">
                <h1 className="text-6xl font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent">404</h1>
                <h2 className="text-2xl font-semibold text-gray-900">Page Not Found</h2>
                <p className="text-gray-500 max-w-md mx-auto">
                    The page you&apos;re looking for doesn&apos;t exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-semibold rounded-xl hover:from-indigo-700 hover:to-blue-600 transition-all duration-200"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
