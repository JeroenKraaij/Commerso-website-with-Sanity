import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold text-gray-900">COMMERSO</div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#diensten" className="text-gray-900 hover:text-primary transition-colors">
                Diensten
              </Link>
              <Link href="#over" className="text-gray-900 hover:text-primary transition-colors">
                Over ons
              </Link>
              <Link href="#contact" className="text-gray-900 hover:text-primary transition-colors">
                Contact
              </Link>
              <button className="bg-primary hover:bg-[#E67E00] text-white px-6 py-2.5 rounded-full font-medium transition-colors">
                Neem contact op
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white py-20 md:py-32">
        {/* Geometric Shapes - Inspired by logo */}
        <div className="absolute top-20 right-10 w-16 h-16 rounded-full bg-secondary opacity-20 blur-xl" />
        <div className="absolute top-40 right-40 w-12 h-12 rotate-45 bg-primary opacity-10 blur-lg" />
        <div className="absolute bottom-20 left-20 w-20 h-20 rounded-full bg-primary opacity-10 blur-xl" />

        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block">
                <div className="flex items-center gap-2 text-primary font-medium mb-4">
                  <div className="w-8 h-1 bg-primary"></div>
                  <span>YOUR COMMERCIAL AI COMPANY</span>
                </div>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                AI-oplossingen
                <br />
                <span className="relative">
                  voor het{" "}
                  <span className="text-primary">MKB</span>
                </span>
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                Commerso helpt middelgrote en kleine bedrijven om de kracht van kunstmatige intelligentie
                te benutten. Praktische AI-toepassingen die écht impact maken.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-primary hover:bg-[#E67E00] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-lg">
                  Ontdek onze diensten
                </button>
                <button className="border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white px-8 py-4 rounded-full font-medium text-lg transition-all">
                  Plan een gesprek
                </button>
              </div>
            </div>

            {/* Logo Display */}
            <div className="relative hidden md:block">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Geometric shapes inspired by logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="space-y-6">
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-16 rounded-full bg-secondary"></div>
                      <div className="w-16 h-2 bg-[#F5D47E]"></div>
                      <div className="w-16 h-16 rotate-45 bg-primary"></div>
                    </div>
                    <div className="flex items-center justify-center gap-8">
                      <div className="w-16 h-2 bg-gray-300"></div>
                      <div className="w-16 h-16 rounded-full border-8 border-secondary"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="diensten" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 text-primary font-medium mb-4">
              <div className="w-8 h-1 bg-primary"></div>
              <span>ONZE DIENSTEN</span>
              <div className="w-8 h-1 bg-primary"></div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Wat wij voor u kunnen betekenen
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Praktische AI-oplossingen die direct impact maken op uw bedrijfsvoering
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all border-2 border-transparent hover:border-primary">
              <div className="w-12 h-12 bg-primary rounded-lg mb-6 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full border-2 border-white"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                AI Consultancy
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                We helpen u de juiste AI-strategie te ontwikkelen voor uw organisatie.
                Van eerste verkenning tot volledige implementatie.
              </p>
              <Link href="#" className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Lees meer
                <span className="ml-2 group-hover:ml-0 transition-all">→</span>
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all border-2 border-transparent hover:border-primary">
              <div className="w-12 h-12 bg-secondary rounded-lg mb-6 flex items-center justify-center">
                <div className="w-6 h-6 rotate-45 bg-white"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Custom AI Solutions
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Maatwerk AI-applicaties die perfect aansluiten bij uw specifieke
                bedrijfsprocessen en uitdagingen.
              </p>
              <Link href="#" className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Lees meer
                <span className="ml-2 group-hover:ml-0 transition-all">→</span>
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group bg-white p-8 rounded-2xl hover:shadow-xl transition-all border-2 border-transparent hover:border-primary">
              <div className="w-12 h-12 bg-primary rounded-lg mb-6 flex items-center justify-center rotate-45">
                <div className="w-6 h-6 bg-white -rotate-45"></div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Training & Support
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Uw team volledig voorbereiden op de AI-revolutie. Praktische training
                en doorlopende ondersteuning.
              </p>
              <Link href="#" className="inline-flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                Lees meer
                <span className="ml-2 group-hover:ml-0 transition-all">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Commerso Section */}
      <section id="over" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-primary font-medium mb-4">
                <div className="w-8 h-1 bg-primary"></div>
                <span>WAAROM COMMERSO</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                AI toegankelijk maken voor ieder bedrijf
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Bij Commerso geloven we dat AI niet alleen voorbehouden is aan grote corporates.
                Het MKB verdient toegang tot dezelfde krachtige tools en technologieën.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Praktisch & Betaalbaar</h4>
                    <p className="text-gray-600">Oplossingen die direct waarde toevoegen zonder astronomische kosten</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Persoonlijke Aanpak</h4>
                    <p className="text-gray-600">Geen one-size-fits-all, maar maatwerk voor uw specifieke situatie</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Snelle Implementatie</h4>
                    <p className="text-gray-600">Van idee naar werkende oplossing in weken, niet maanden</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
                <div className="bg-white p-6 rounded-xl border-l-4 border-primary">
                  <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
                  <div className="text-gray-600">MKB-bedrijven geholpen</div>
                </div>
                <div className="bg-white p-6 rounded-xl border-l-4 border-secondary">
                  <div className="text-4xl font-bold text-gray-900 mb-2">95%</div>
                  <div className="text-gray-600">Klanttevredenheid</div>
                </div>
                <div className="bg-white p-6 rounded-xl border-l-4 border-primary">
                  <div className="text-4xl font-bold text-gray-900 mb-2">2-6</div>
                  <div className="text-gray-600">Weken tot implementatie</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary opacity-10 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Klaar om te starten met AI?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Plan een vrijblijvend gesprek en ontdek hoe AI uw bedrijf naar een hoger niveau kan tillen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary hover:bg-[#E67E00] text-white px-8 py-4 rounded-full font-medium text-lg transition-all hover:shadow-xl">
              Plan een gesprek
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-medium text-lg transition-all">
              Bekijk cases
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold mb-4">COMMERSO</div>
              <p className="text-gray-400 text-sm">
                Your Commercial AI Company
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Diensten</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-primary transition-colors">AI Consultancy</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Custom Solutions</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Training</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Bedrijf</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="#" className="hover:text-primary transition-colors">Over ons</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Cases</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Blog</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>info@commerso.nl</li>
                <li>+31 (0)20 123 4567</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2026 Commerso. Alle rechten voorbehouden.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
