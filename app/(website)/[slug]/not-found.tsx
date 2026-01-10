
// app/[slug]/not-found.tsx
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center px-6">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
                <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                    Pagina niet gevonden
                </h2>
                <p className="text-gray-600 mb-8">
                    De pagina die je zoekt bestaat niet of is verplaatst.
                </p>
                <Link
                    href="/public"
                    className="inline-block px-6 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all"
                >
                    Terug naar home
                </Link>
            </div>
        </div>
    )
}