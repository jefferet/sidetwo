export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F5F0E8]/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2 sm:gap-4">
            <img
              src="/Assets/logoInfirmiere.jpeg"
              alt="Logo Infirmière"
              className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover"
            />
            <div className="text-xl sm:text-2xl font-serif font-bold tracking-tight">
              Cabinet Cissé
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4 sm:gap-8 font-sans text-xs sm:text-sm font-light tracking-wide">
            <a href="#about" className="hover:text-[#6B8E23] transition-colors">À Propos</a>
            <a href="#soins" className="hover:text-[#6B8E23] transition-colors">Mes Soins</a>
            <a href="#equipe" className="hover:text-[#6B8E23] transition-colors">Équipe</a>
            <a href="#zone" className="hover:text-[#6B8E23] transition-colors">Zone d'Intervention</a>
            <a href="#contact" className="hover:text-[#6B8E23] transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20">
        <div className="absolute inset-0">
          <img
            src="/Assets/Hero.png"
            alt="Extérieur du cabinet"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F0E8]/90 via-[#F5F0E8]/80 to-[#6B8E23]/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold mb-4 sm:mb-6 leading-tight tracking-tight">
            Soins Infirmiers<br />
            <span className="text-[#6B8E23]">À Domicile & Au Cabinet</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-sans font-light leading-relaxed max-w-3xl mx-auto mb-3 sm:mb-4 text-[#3D3D3D]">
            Christèle Cissé — Infirmière Diplômée d'État
          </p>
          <p className="text-base sm:text-lg md:text-xl font-sans font-light leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8 text-[#3D3D3D]/80 italic">
            Votre santé au cœur de Véretz
          </p>
          <a href="tel:0686863263" className="inline-block bg-[#6B8E23] text-white px-6 sm:px-8 py-3 sm:py-4 font-sans font-light tracking-wide hover:bg-[#2E4A1D] transition-colors text-sm sm:text-base">
            Prendre RDV au 06 86 86 32 63
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-16 items-center">
            <div className="relative aspect-square bg-[#F5F0E8] rounded-lg overflow-hidden max-w-md mx-auto md:max-w-none">
              <img
                src="/Assets/ChristNew1.png"
                alt="Christèle Cissé"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#6B8E23]/10 via-transparent to-[#2E4A1D]/10"></div>
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-8">
                Notre Cabinet<br />
                <span className="text-[#6B8E23]">À Votre Service</span>
              </h2>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 sm:mb-6 text-[#8B7355]">Une prise en charge humaine et locale</h3>
              <p className="text-base sm:text-lg font-sans font-light leading-relaxed mb-6 sm:mb-8">
                Installée dans le village de Véretz depuis 2019, je m'engage à offrir des soins de proximité alliant compétence technique et écoute attentive. Mon objectif est de maintenir votre autonomie et votre confort à domicile, dans le respect de votre vie privée.
              </p>
              <p className="text-base sm:text-lg font-sans font-light leading-relaxed mb-6 sm:mb-8">
                Des soins de qualité au cœur de Véretz, avec un accompagnement personnalisé pour chaque patient.
              </p>
              <blockquote className="border-l-4 border-[#6B8E23] pl-4 sm:pl-6 italic text-[#3D3D3D]/80 mb-6 sm:mb-8">
                "Soigner, c'est prendre soin de la personne dans sa globalité."
              </blockquote>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#6B8E23]/20 rounded-full flex items-center justify-center text-[#6B8E23] flex-shrink-0 text-xl sm:text-2xl">
                    🏥
                  </div>
                  <div>
                    <h4 className="font-serif font-bold mb-2 text-base sm:text-lg">Soins Professionnels</h4>
                    <p className="font-sans font-light text-xs sm:text-sm">Protocoles respectés, matériel stérile, techniques à jour</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#8B7355]/20 rounded-full flex items-center justify-center text-[#8B7355] flex-shrink-0 text-xl sm:text-2xl">
                    🤝
                  </div>
                  <div>
                    <h4 className="font-serif font-bold mb-2 text-base sm:text-lg">Approche Humaine</h4>
                    <p className="font-sans font-light text-xs sm:text-sm">Écoute active, respect du patient, prise en charge globale</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#C17550]/20 rounded-full flex items-center justify-center text-[#C17550] flex-shrink-0 text-xl sm:text-2xl">
                    ⏰
                  </div>
                  <div>
                    <h4 className="font-serif font-bold mb-2 text-base sm:text-lg">Disponibilité & Réglement</h4>
                    <p className="font-sans font-light text-xs sm:text-sm">Horaires adaptés, rendez-vous rapides, tiers-payant et règlement possible en Carte Bleue</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="soins" className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-8 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4 sm:mb-6">Des Compétences au Service de Votre Santé</h2>
            <p className="text-base sm:text-lg font-sans font-light max-w-2xl mx-auto">
              Des soins infirmiers professionnels adaptés à vos besoins, au cabinet ou à domicile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            {/* Cabinet Services */}
            <div className="group">
              <div className="relative aspect-[4/5] bg-[#F5F0E8] mb-4 sm:mb-6 overflow-hidden">
                <img
                  src="/Assets/SoinsAuCabinet2.png"
                  alt="Intérieur du cabinet"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B7355]/20 to-[#6B8E23]/20"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3">Soins au Cabinet</h3>
              <p className="text-sm sm:text-base font-sans font-light leading-relaxed">
                Consultations et soins infirmiers dans notre espace moderne et confortable. Pansements, injections, suivi de pathologies chroniques.
              </p>
            </div>

            {/* Domicile Services */}
            <div className="group">
              <div className="relative aspect-[4/5] bg-[#F5F0E8] mb-4 sm:mb-6 overflow-hidden">
                <img
                  src="/Assets/SoinsADomicile2.png"
                  alt="Salle de soins"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-[#6B8E23]/20 to-[#C17550]/20"></div>
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3">Soins à Domicile</h3>
              <p className="text-sm sm:text-base font-sans font-light leading-relaxed">
                Intervention à votre domicile pour tous les soins, dans le respect de votre intimité.
              </p>
            </div>
          </div>

          {/* Technical Services */}
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-[#F5F0E8] p-6 sm:p-8 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 sm:mb-6">Soins Techniques</h3>
              <ul className="space-y-2 sm:space-y-3 font-sans font-light text-sm sm:text-base">
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[#6B8E23]">•</span>
                  Pansements simples et complexes, ablation fils et agrafes. 
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[#6B8E23]">•</span>
                  Injections (sous-cutanées, intra-musculaires) 
                </li> 
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[#6B8E23]">•</span>
                  Vaccinations (grippe, COVID, Zona, pneumocoque, etc.)
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[#6B8E23]">•</span>
                  Perfusion, Chimiothérapie, Picc-line, Mid-line
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[#6B8E23]">•</span>
                  Prélèvements sanguins
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[#6B8E23]">•</span>
                  Aide à la gestion des traitements
                </li>
              </ul>
            </div>

            <div className="bg-[#F5F0E8] p-6 sm:p-8 rounded-lg">
              <h3 className="text-xl sm:text-2xl font-serif font-bold mb-4 sm:mb-6">Suivi Spécifique</h3>
              <ul className="space-y-2 sm:space-y-3 font-sans font-light text-sm sm:text-base">
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[#6B8E23]">•</span>
                  Suivi du diabète (insulinothérapie)
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[#6B8E23]">•</span>
                  Soins de plaies chroniques
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[#6B8E23]">•</span>
                  Bilan de soins infirmiers. 
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[#6B8E23]">•</span>
                  Surveillance des personnes âgées
                </li>
                <li className="flex items-center gap-2 sm:gap-3">
                  <span className="text-[#6B8E23]">•</span>
                  Collaboration avec le HAD, equipe de soins palliatifs et prestataires de santé. 
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="equipe" className="py-16 sm:py-24 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 sm:mb-8">
            Notre Équipe
          </h2>
          <p className="text-base sm:text-lg font-sans font-light leading-relaxed mb-8 sm:mb-12">
            Notre équipe d'IDE s'appuie sur la complémentarité des compétences et des caractères.
            Nous sommes toutes les trois conventionnées avec l'assurance maladie et inscrites au tableau de l'ordre des infirmiers.
            Christèle, Marine et Garance, infirmières diplômées d'État, vous accueillent avec professionnalisme et bienveillance.
            Fortes de plusieurs années d'expérience, elles s'engagent à vous offrir des soins de qualité dans le respect des protocoles médicaux.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#6B8E23] mb-2">15+</div>
              <p className="font-sans font-light text-xs sm:text-sm">Années d'expérience</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#8B7355] mb-2">500+</div>
              <p className="font-sans font-light text-xs sm:text-sm">Patients accompagnés</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-serif font-bold text-[#C17550] mb-2">100%</div>
              <p className="font-sans font-light text-xs sm:text-sm">Satisfaction patients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Zone Section */}
      <section id="zone" className="py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 sm:mb-8">
            Où Me Trouver ?
          </h2>
          <div className="bg-[#F5F0E8] p-6 sm:p-8 rounded-lg mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4">Zone d'Intervention</h3>
            <p className="text-sm sm:text-base font-sans font-light leading-relaxed mb-4 sm:mb-6">
              J'interviens à domicile sur la commune de Véretz et exceptionnellement sur les communes limitrophes.
            </p>
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4">Adresse du Cabinet</h3>
            <p className="text-sm sm:text-base font-sans font-light leading-relaxed">
              12 avenue Martin Luther King<br />
              Véretz, 37270<br />
              Indre-et-Loire, France
            </p>
          </div>
          <div className="bg-[#F5F0E8] p-6 sm:p-8 rounded-lg">
            <h3 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4">Horaires d'Ouverture</h3>
            <ul className="space-y-2 font-sans font-light text-sm sm:text-base">
              <li className="flex items-center justify-center gap-3 sm:gap-4">
                <span className="font-bold">Permanence au cabinet :</span>
                <span>Lundi - Vendredi : 07h30 - 08h00</span>
              </li>
              <li className="flex items-center justify-center gap-3 sm:gap-4">
                <span className="font-bold">À votre domicile :</span>
                <span>Lundi - Dimanche : 08h00 - 21h00</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-8 sm:py-12 bg-[#C17550]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl font-serif font-bold mb-3 sm:mb-4">En Cas d'Urgence</h2>
          <p className="text-sm sm:text-base font-sans font-light leading-relaxed mb-4 sm:mb-6">
            Pour toute urgence vitale, contactez immédiatement le <strong>15</strong> (SAMU) ou le <strong>112</strong>.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 bg-white/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-6 sm:mb-8">
            Nous Contacter
          </h2>
          <p className="text-base sm:text-lg font-sans font-light leading-relaxed mb-8 sm:mb-12">
            Notre site arrive bientôt. N'hésitez pas à nous contacter par téléphone ou email pour prendre rendez-vous.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-3xl mx-auto">
            <div className="bg-[#F5F0E8] p-6 sm:p-8 rounded-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📍</div>
              <h4 className="font-serif font-bold mb-2 text-sm sm:text-base">Adresse</h4>
              <p className="font-sans font-light text-xs sm:text-sm">12 avenue Martin Luther King<br />Véretz, 37270<br />Indre-et-Loire, France</p>
            </div>
            <div className="bg-[#F5F0E8] p-6 sm:p-8 rounded-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📧</div>
              <h4 className="font-serif font-bold mb-2 text-sm sm:text-base">Email</h4>
              <p className="font-sans font-light text-xs sm:text-sm">ide.veretz@gmail.com</p>
            </div>
            <div className="bg-[#F5F0E8] p-6 sm:p-8 rounded-lg">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📱</div>
              <h4 className="font-serif font-bold mb-2 text-sm sm:text-base">Téléphone</h4>
              <p className="font-sans font-light text-xs sm:text-sm">06 86 86 32 63</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 bg-[#3D3D3D] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                <img
                  src="/Assets/logoInfirmiere.jpeg"
                  alt="Logo Infirmière"
                  className="w-8 h-8 sm:w-12 sm:h-12 rounded-full object-cover"
                />
                <div className="text-xl sm:text-2xl font-serif font-bold">Cabinet Cissé</div>
              </div>
              <p className="font-sans font-light text-xs sm:text-sm leading-relaxed">
                Notre site arrive bientôt.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
              <ul className="space-y-1 sm:space-y-2 font-sans font-light text-xs sm:text-sm">
                <li><a href="#soins" className="hover:text-[#6B8E23] transition-colors">Soins au cabinet</a></li>
                <li><a href="#soins" className="hover:text-[#6B8E23] transition-colors">Soins à domicile</a></li>
                <li><a href="#soins" className="hover:text-[#6B8E23] transition-colors">Soins techniques</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-3 sm:mb-4 text-sm sm:text-base">Information</h4>
              <ul className="space-y-1 sm:space-y-2 font-sans font-light text-xs sm:text-sm">
                <li><a href="#about" className="hover:text-[#6B8E23] transition-colors">À propos</a></li>
                <li><a href="#equipe" className="hover:text-[#6B8E23] transition-colors">Notre équipe</a></li>
                <li><a href="#zone" className="hover:text-[#6B8E23] transition-colors">Zone d'intervention</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
              <ul className="space-y-1 sm:space-y-2 font-sans font-light text-xs sm:text-sm">
                <li>ide.veretz@gmail.com</li>
                <li>06 86 86 32 63</li>
                <li>12 avenue Martin Luther King</li>
                <li>Véretz, 37270</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-6 sm:pt-8 text-center font-sans font-light text-xs sm:text-sm">
            <p>&copy; 2026 Cabinet Infirmier Cissé Christèle. Notre site arrive bientôt.</p>
            <p className="mt-2">
              Site conforme au Code de la Santé Publique et aux recommandations du Conseil National de l'Ordre des Infirmiers.
            </p>
            <a href="https://www.ordre-infirmiers.fr/oimg/pdf/charte_site_internet.pdf" className="text-[#6B8E23] hover:text-[#6B8E23]/80 mt-2 inline-block">
              Charte du Conseil de l'Ordre relative aux sites internet
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
