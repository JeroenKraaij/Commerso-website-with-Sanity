export default function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Welkom bij Commerso
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Your Commercial AI Company
        </p>
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-8 max-w-3xl mx-auto">
          <p className="text-gray-700 mb-4">
            👋 Je Sanity CMS is succesvol opgezet!
          </p>
          <p className="text-sm text-gray-600">
            Ga naar <a href="/studio" className="text-primary hover:underline font-medium">/studio</a> om:
          </p>
          <ul className="text-sm text-gray-600 mt-4 space-y-2 text-left max-w-md mx-auto">
            <li>✅ Site Settings in te vullen (logo, navigatie, SEO)</li>
            <li>✅ Je eerste navigatie menu aan te maken</li>
            <li>✅ Pagina's toe te voegen</li>
            <li>✅ Content te beheren</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
