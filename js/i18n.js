/* ============================================================
   MUNDO AMAZÔNIA — i18n.js
   Traduções em 3 idiomas: PT, EN, ES
   Para adicionar ou editar textos, localize a chave abaixo.
   ============================================================ */

const translations = {

  /* ─────────────────── PORTUGUÊS ─────────────────── */
  pt: {
    /* Geral */
    "lang.label":               "PT",
    "site.title":               "Mundo Amazônia - Guia Turístico da Amazônia Legal",
    "site.desc":                "Descubra os 7 estados da Amazônia Legal: Amazonas, Pará, Acre, Amapá, Rondônia, Roraima e Tocantins.",

    /* Top bar */
    "topbar.tagline":           "O maior bioma do planeta te espera",
    "topbar.contact":           "Contato",

    /* Navegação */
    "nav.states":               "Os Estados",
    "nav.todo":                 "O que fazer",
    "nav.eat":                  "Onde Comer",
    "nav.stay":                 "Onde Ficar",
    "nav.about":                "Sobre a Amazônia",
    "nav.festivals":            "Festivais",
    "nav.gallery":              "Galeria",
    "nav.search.placeholder":   "Buscar destinos, municípios, atrações...",
    "nav.search.btn":           "Buscar",
    "nav.estados.title":        "Amazônia Legal — 7 Estados",

    /* Cada estado */
    "state.am.name":            "Amazonas",
    "state.am.capital":         "Manaus",
    "state.am.tagline":         "O coração da floresta",
    "state.pa.name":            "Pará",
    "state.pa.capital":         "Belém",
    "state.pa.tagline":         "Sabores e maravilhas",
    "state.ac.name":            "Acre",
    "state.ac.capital":         "Rio Branco",
    "state.ac.tagline":         "Natureza intocada",
    "state.ap.name":            "Amapá",
    "state.ap.capital":         "Macapá",
    "state.ap.tagline":         "Na linha do Equador",
    "state.ro.name":            "Rondônia",
    "state.ro.capital":         "Porto Velho",
    "state.ro.tagline":         "Terra de pioneiros",
    "state.rr.name":            "Roraima",
    "state.rr.capital":         "Boa Vista",
    "state.rr.tagline":         "Tepuis e savanas",
    "state.to.name":            "Tocantins",
    "state.to.capital":         "Palmas",
    "state.to.tagline":         "O cerrado encontra a floresta",

    /* Hero */
    "hero.tag":                 "Amazônia Legal — 7 estados",
    "hero.title":               "A Amazônia<br>o <span>ano inteiro</span>",
    "hero.sub":                 "De Manaus a Palmas, do Rio Negro ao Araguaia — uma viagem por paisagens, culturas e sabores que só existem aqui.",
    "hero.cta1":                "Explorar destinos",
    "hero.cta2":                "Conheça os estados",
    "hero.scroll":              "Role para descobrir",

    /* Busca rápida */
    "qs.state.label":           "Estado",
    "qs.state.all":             "Todos os estados",
    "qs.type.label":            "O que busca?",
    "qs.type.all":              "Tudo",
    "qs.type.nat":              "Natureza",
    "qs.type.cult":             "Cultura",
    "qs.type.food":             "Gastronomia",
    "qs.type.stay":             "Hospedagem",
    "qs.type.fest":             "Festivais",
    "qs.dest.label":            "Destino ou município",
    "qs.dest.ph":               "Ex: Parintins, Marajó, Jalapão...",
    "qs.btn":                   "Buscar",

    /* Seção Estados */
    "states.eyebrow":           "Amazônia Legal",
    "states.title":             "Sete estados, infinitas histórias",
    "states.sub":               "Cada estado é um mundo à parte. Escolha o seu próximo destino e mergulhe nas culturas, paisagens e sabores únicos da maior floresta tropical do planeta.",

    /* Seção Atividades */
    "act.eyebrow":              "O que fazer",
    "act.title":                "Aventuras para todos os estilos",
    "act.sub":                  "Da selva ao rio, da cultura indígena às festas folclóricas — a Amazônia oferece experiências que ficam para sempre na memória.",
    "act.tab.all":              "Tudo",
    "act.tab.nature":           "Natureza",
    "act.tab.culture":          "Cultura",
    "act.tab.adventure":        "Aventura",
    "act.tab.gastronomy":       "Gastronomia",
    "act.tab.indigenous":       "Povos Originários",
    "act.viewall":              "Ver todas as atividades",

    /* Festivais */
    "fest.eyebrow":             "Festivais & Economia Local",
    "fest.title":               "A cultura pulsa na floresta",
    "fest.sub":                 "A Amazônia tem festas que são patrimônio do Brasil e produções rurais únicas — desde a temporada do cupuaçu até o maior espetáculo folclórico do mundo.",
    "fest.viewall":             "Ver calendário completo",

    /* Festivais individuais */
    "fest.parintins.name":      "Festival de Parintins",
    "fest.parintins.state":     "Amazonas",
    "fest.parintins.desc":      "O maior festival folclórico do Brasil reúne centenas de milhares de pessoas na disputa entre Boi Garantido e Boi Caprichoso. Uma experiência inesquecível.",
    "fest.parintins.period":    "Junho · Todo ano",
    "fest.cirio.name":          "Círio de Nazaré",
    "fest.cirio.state":         "Pará",
    "fest.cirio.desc":          "A maior procissão religiosa do mundo, em Belém. Dois milhões de fiéis nas ruas, emoção, fé e a tradição centenária do povo paraense.",
    "fest.cirio.period":        "Outubro · Todo ano",
    "fest.cupuacu.name":        "Safra do Cupuaçu",
    "fest.cupuacu.state":       "Amazonas · Pará · Acre",
    "fest.cupuacu.desc":        "Janeiro a abril é a temporada do cupuaçu. Municípios inteiros giram em torno desta fruta amazônica — polpa, chocolate, doces, cosméticos.",
    "fest.cupuacu.period":      "Jan–Abr · Anual",
    "fest.laranja.name":        "Festa da Laranja",
    "fest.laranja.state":       "Capitão Poço · Pará",
    "fest.laranja.desc":        "Capitão Poço é o maior produtor de laranjas do Brasil. A festa anual celebra a colheita com feira, música, gastronomia e desfiles.",
    "fest.laranja.period":      "Julho · Anual",
    "fest.borracha.name":       "Ciclo da Borracha",
    "fest.borracha.state":      "Acre · Amazonas",
    "fest.borracha.desc":       "A história do látex moldou a Amazônia. Seringais históricos, arquitetura belle époque em Manaus e Belém, e comunidades que vivem da castanha.",
    "fest.borracha.period":     "Patrimônio histórico",
    "fest.jalapao.name":        "Temporada do Jalapão",
    "fest.jalapao.state":       "Tocantins",
    "fest.jalapao.desc":        "Dunas de areia dourada, fervedouros de água cristalina, serras e rios — o Jalapão é um dos destinos mais deslumbrantes do Brasil.",
    "fest.jalapao.period":      "Maio–Set · Melhor época",

    /* Hospedagem */
    "stay.eyebrow":             "Onde Ficar",
    "stay.title":               "Do albergue ao lodge na selva",
    "stay.sub":                 "Encontre hospedagens cuidadosamente selecionadas para cada orçamento e estilo de viagem — nas capitais e nas profundezas da floresta.",
    "stay.filter.all":          "Todos",
    "stay.filter.hotel":        "Hotéis",
    "stay.filter.hostel":       "Albergues",
    "stay.filter.pousada":      "Pousadas",
    "stay.filter.lodge":        "Lodges",
    "stay.filter.resort":       "Resorts",
    "stay.viewall":             "Ver todas as hospedagens",
    "stay.per.night":           "por noite",
    "stay.from":                "A partir de",
    "stay.see.more":            "Ver mais",

    /* Gastronomia */
    "food.eyebrow":             "Onde Comer",
    "food.title":               "A culinária amazônica é patrimônio",
    "food.sub":                 "Do tacacá ao pato no tucupi, do filhote grelhado ao açaí com peixe — explore os sabores únicos que só a Amazônia oferece.",
    "food.highlight.title":     "Cozinha Amazônica",
    "food.highlight.desc":      "Ingredientes que nenhum outro lugar do mundo tem. Uma gastronomia construída por séculos de convivência entre povos indígenas, ribeirinhos e migrantes.",
    "food.highlight.btn":       "Descobrir restaurantes",
    "food.viewall":             "Ver todos os restaurantes",

    /* CTA Banner */
    "cta.title":                "A Amazônia está esperando<br>por <span>você</span>",
    "cta.sub":                  "Centenas de atrações naturais, culturais e gastronômicas mapeadas nos 7 estados da Amazônia Legal. O maior bioma do planeta na palma da sua mão.",
    "cta.stat1.num":            "7",
    "cta.stat1.label":          "Estados",
    "cta.stat2.num":            "62+",
    "cta.stat2.label":          "Municípios",
    "cta.stat3.num":            "5,5 mi",
    "cta.stat3.label":          "km² de floresta",
    "cta.stat4.num":            "10%",
    "cta.stat4.label":          "da biodiversidade mundial",
    "cta.btn":                  "Planejar minha viagem",

    /* Newsletter */
    "nl.title":                 "Receba novidades da Amazônia",
    "nl.sub":                   "Dicas de viagem, temporadas de festivais, aberturas de hospedagens e muito mais, diretamente no seu e-mail.",
    "nl.placeholder":           "Seu e-mail",
    "nl.btn":                   "Assinar",

    /* Footer */
    "footer.brand.desc":        "O maior guia turístico da Amazônia Legal. Sete estados, infinitas histórias para contar.",
    "footer.col1.title":        "Estados",
    "footer.col2.title":        "Explore",
    "footer.col2.todo":         "O que fazer",
    "footer.col2.eat":          "Onde comer",
    "footer.col2.stay":         "Onde ficar",
    "footer.col2.festivals":    "Festivais",
    "footer.col2.economy":      "Economia local",
    "footer.col3.title":        "Informações",
    "footer.col3.about":        "Sobre a Amazônia",
    "footer.col3.contact":      "Contato",
    "footer.col3.press":        "Imprensa",
    "footer.col3.accessibility":"Acessibilidade",
    "footer.col3.privacy":      "Privacidade",
    "footer.copy":              "© 2025 Mundo Amazônia. Todos os direitos reservados.",
    "footer.dev":               "Feito com ♥ para a Amazônia",
  },

  /* ─────────────────── INGLÊS ─────────────────── */
  en: {
    "lang.label":               "EN",
    "site.title":               "Mundo Amazônia - Tourism Guide to the Legal Amazon",
    "site.desc":                "Discover the 7 states of the Legal Amazon: Amazonas, Pará, Acre, Amapá, Rondônia, Roraima and Tocantins.",

    "topbar.tagline":           "The world's greatest biome awaits you",
    "topbar.contact":           "Contact",

    "nav.states":               "The States",
    "nav.todo":                 "What to Do",
    "nav.eat":                  "Where to Eat",
    "nav.stay":                 "Where to Stay",
    "nav.about":                "About the Amazon",
    "nav.festivals":            "Festivals",
    "nav.gallery":              "Gallery",
    "nav.search.placeholder":   "Search destinations, cities, attractions...",
    "nav.search.btn":           "Search",
    "nav.estados.title":        "Legal Amazon — 7 States",

    "state.am.name":            "Amazonas",
    "state.am.capital":         "Manaus",
    "state.am.tagline":         "The heart of the forest",
    "state.pa.name":            "Pará",
    "state.pa.capital":         "Belém",
    "state.pa.tagline":         "Flavors and wonders",
    "state.ac.name":            "Acre",
    "state.ac.capital":         "Rio Branco",
    "state.ac.tagline":         "Untouched nature",
    "state.ap.name":            "Amapá",
    "state.ap.capital":         "Macapá",
    "state.ap.tagline":         "On the Equator line",
    "state.ro.name":            "Rondônia",
    "state.ro.capital":         "Porto Velho",
    "state.ro.tagline":         "Land of pioneers",
    "state.rr.name":            "Roraima",
    "state.rr.capital":         "Boa Vista",
    "state.rr.tagline":         "Tepuis and savannas",
    "state.to.name":            "Tocantins",
    "state.to.capital":         "Palmas",
    "state.to.tagline":         "Where cerrado meets forest",

    "hero.tag":                 "Legal Amazon — 7 states",
    "hero.title":               "The Amazon<br><span>all year long</span>",
    "hero.sub":                 "From Manaus to Palmas, from the Rio Negro to the Araguaia — a journey through landscapes, cultures and flavors found nowhere else on Earth.",
    "hero.cta1":                "Explore destinations",
    "hero.cta2":                "Meet the states",
    "hero.scroll":              "Scroll to discover",

    "qs.state.label":           "State",
    "qs.state.all":             "All states",
    "qs.type.label":            "What are you looking for?",
    "qs.type.all":              "Everything",
    "qs.type.nat":              "Nature",
    "qs.type.cult":             "Culture",
    "qs.type.food":             "Gastronomy",
    "qs.type.stay":             "Accommodation",
    "qs.type.fest":             "Festivals",
    "qs.dest.label":            "Destination or city",
    "qs.dest.ph":               "e.g. Parintins, Marajó, Jalapão...",
    "qs.btn":                   "Search",

    "states.eyebrow":           "Legal Amazon",
    "states.title":             "Seven states, endless stories",
    "states.sub":               "Each state is a world of its own. Choose your next destination and dive into the unique cultures, landscapes and flavors of the world's largest tropical forest.",

    "act.eyebrow":              "What to Do",
    "act.title":                "Adventures for every style",
    "act.sub":                  "From the jungle to the river, from indigenous culture to folk festivals — the Amazon offers experiences that stay with you forever.",
    "act.tab.all":              "All",
    "act.tab.nature":           "Nature",
    "act.tab.culture":          "Culture",
    "act.tab.adventure":        "Adventure",
    "act.tab.gastronomy":       "Gastronomy",
    "act.tab.indigenous":       "Indigenous Peoples",
    "act.viewall":              "View all activities",

    "fest.eyebrow":             "Festivals & Local Economy",
    "fest.title":               "Culture pulses through the forest",
    "fest.sub":                 "The Amazon has festivals that are national heritage and unique rural productions — from the cupuaçu season to the world's greatest folkloric spectacle.",
    "fest.viewall":             "View full calendar",

    "fest.parintins.name":      "Parintins Festival",
    "fest.parintins.state":     "Amazonas",
    "fest.parintins.desc":      "Brazil's greatest folk festival draws hundreds of thousands to the rivalry between Boi Garantido and Boi Caprichoso. An unforgettable experience.",
    "fest.parintins.period":    "June · Every year",
    "fest.cirio.name":          "Círio de Nazaré",
    "fest.cirio.state":         "Pará",
    "fest.cirio.desc":          "The world's largest religious procession in Belém. Two million faithful in the streets — emotion, faith and the century-old tradition of the people of Pará.",
    "fest.cirio.period":        "October · Every year",
    "fest.cupuacu.name":        "Cupuaçu Harvest Season",
    "fest.cupuacu.state":       "Amazonas · Pará · Acre",
    "fest.cupuacu.desc":        "January to April is cupuaçu season. Entire towns revolve around this Amazonian fruit — pulp, chocolate, sweets and cosmetics.",
    "fest.cupuacu.period":      "Jan–Apr · Annual",
    "fest.laranja.name":        "Orange Festival",
    "fest.laranja.state":       "Capitão Poço · Pará",
    "fest.laranja.desc":        "Capitão Poço is Brazil's largest orange producer. The annual festival celebrates the harvest with a market, music, food and parades.",
    "fest.laranja.period":      "July · Annual",
    "fest.borracha.name":       "Rubber Boom Legacy",
    "fest.borracha.state":      "Acre · Amazonas",
    "fest.borracha.desc":       "The latex cycle shaped the Amazon. Historic rubber plantations, belle époque architecture in Manaus and Belém, and communities still living from the forest.",
    "fest.borracha.period":     "Historic heritage",
    "fest.jalapao.name":        "Jalapão Season",
    "fest.jalapao.state":       "Tocantins",
    "fest.jalapao.desc":        "Golden sand dunes, crystal-clear spring pools, mountains and rivers — Jalapão is one of Brazil's most breathtaking destinations.",
    "fest.jalapao.period":      "May–Sep · Best season",

    "stay.eyebrow":             "Where to Stay",
    "stay.title":               "From hostel to jungle lodge",
    "stay.sub":                 "Find carefully selected accommodations for every budget and travel style — in state capitals and deep in the forest.",
    "stay.filter.all":          "All",
    "stay.filter.hotel":        "Hotels",
    "stay.filter.hostel":       "Hostels",
    "stay.filter.pousada":      "Guesthouses",
    "stay.filter.lodge":        "Lodges",
    "stay.filter.resort":       "Resorts",
    "stay.viewall":             "View all accommodations",
    "stay.per.night":           "per night",
    "stay.from":                "From",
    "stay.see.more":            "Learn more",

    "food.eyebrow":             "Where to Eat",
    "food.title":               "Amazonian cuisine is a heritage",
    "food.sub":                 "From tacacá to duck in tucupi, from grilled catfish to açaí with fish — explore unique flavors only the Amazon can offer.",
    "food.highlight.title":     "Amazonian Cuisine",
    "food.highlight.desc":      "Ingredients no other place on Earth has. A cuisine built over centuries of coexistence between indigenous peoples, riverside communities and migrants.",
    "food.highlight.btn":       "Discover restaurants",
    "food.viewall":             "View all restaurants",

    "cta.title":                "The Amazon is waiting<br>for <span>you</span>",
    "cta.sub":                  "Hundreds of natural, cultural and gastronomic attractions mapped across the 7 states of the Legal Amazon. The world's greatest biome in the palm of your hand.",
    "cta.stat1.num":            "7",
    "cta.stat1.label":          "States",
    "cta.stat2.num":            "62+",
    "cta.stat2.label":          "Cities",
    "cta.stat3.num":            "5.5M",
    "cta.stat3.label":          "km² of forest",
    "cta.stat4.num":            "10%",
    "cta.stat4.label":          "of global biodiversity",
    "cta.btn":                  "Plan my trip",

    "nl.title":                 "Get Amazon news & tips",
    "nl.sub":                   "Travel tips, festival seasons, new lodge openings and more — straight to your inbox.",
    "nl.placeholder":           "Your email",
    "nl.btn":                   "Subscribe",

    "footer.brand.desc":        "The greatest tourism guide to the Legal Amazon. Seven states, endless stories to tell.",
    "footer.col1.title":        "States",
    "footer.col2.title":        "Explore",
    "footer.col2.todo":         "What to do",
    "footer.col2.eat":          "Where to eat",
    "footer.col2.stay":         "Where to stay",
    "footer.col2.festivals":    "Festivals",
    "footer.col2.economy":      "Local economy",
    "footer.col3.title":        "Information",
    "footer.col3.about":        "About the Amazon",
    "footer.col3.contact":      "Contact",
    "footer.col3.press":        "Press",
    "footer.col3.accessibility":"Accessibility",
    "footer.col3.privacy":      "Privacy",
    "footer.copy":              "© 2025 Mundo Amazônia. All rights reserved.",
    "footer.dev":               "Made with ♥ for the Amazon",
  },

  /* ─────────────────── ESPANHOL ─────────────────── */
  es: {
    "lang.label":               "ES",
    "site.title":               "Mundo Amazônia - Guía Turística de la Amazonia Legal",
    "site.desc":                "Descubre los 7 estados de la Amazonia Legal: Amazonas, Pará, Acre, Amapá, Rondônia, Roraima y Tocantins.",

    "topbar.tagline":           "El bioma más grande del planeta te espera",
    "topbar.contact":           "Contacto",

    "nav.states":               "Los Estados",
    "nav.todo":                 "Qué hacer",
    "nav.eat":                  "Dónde Comer",
    "nav.stay":                 "Dónde Alojarse",
    "nav.festivals":            "Festivales",
    "nav.gallery":              "Galería",
    "nav.about":                "Sobre la Amazonia",
    "nav.search.placeholder":   "Buscar destinos, municipios, atracciones...",
    "nav.search.btn":           "Buscar",
    "nav.estados.title":        "Amazonia Legal — 7 Estados",

    "state.am.name":            "Amazonas",
    "state.am.capital":         "Manaus",
    "state.am.tagline":         "El corazón del bosque",
    "state.pa.name":            "Pará",
    "state.pa.capital":         "Belém",
    "state.pa.tagline":         "Sabores y maravillas",
    "state.ac.name":            "Acre",
    "state.ac.capital":         "Rio Branco",
    "state.ac.tagline":         "Naturaleza intacta",
    "state.ap.name":            "Amapá",
    "state.ap.capital":         "Macapá",
    "state.ap.tagline":         "En la línea del Ecuador",
    "state.ro.name":            "Rondônia",
    "state.ro.capital":         "Porto Velho",
    "state.ro.tagline":         "Tierra de pioneros",
    "state.rr.name":            "Roraima",
    "state.rr.capital":         "Boa Vista",
    "state.rr.tagline":         "Tepuyes y sabanas",
    "state.to.name":            "Tocantins",
    "state.to.capital":         "Palmas",
    "state.to.tagline":         "Donde el cerrado se une al bosque",

    "hero.tag":                 "Amazonia Legal — 7 estados",
    "hero.title":               "La Amazonía<br>todo el <span>año</span>",
    "hero.sub":                 "De Manaus a Palmas, del Río Negro al Araguaia — un viaje por paisajes, culturas y sabores que solo existen aquí.",
    "hero.cta1":                "Explorar destinos",
    "hero.cta2":                "Conocer los estados",
    "hero.scroll":              "Desliza para descubrir",

    "qs.state.label":           "Estado",
    "qs.state.all":             "Todos los estados",
    "qs.type.label":            "¿Qué buscas?",
    "qs.type.all":              "Todo",
    "qs.type.nat":              "Naturaleza",
    "qs.type.cult":             "Cultura",
    "qs.type.food":             "Gastronomía",
    "qs.type.stay":             "Alojamiento",
    "qs.type.fest":             "Festivales",
    "qs.dest.label":            "Destino o municipio",
    "qs.dest.ph":               "Ej: Parintins, Marajó, Jalapão...",
    "qs.btn":                   "Buscar",

    "states.eyebrow":           "Amazonia Legal",
    "states.title":             "Siete estados, historias infinitas",
    "states.sub":               "Cada estado es un mundo aparte. Elige tu próximo destino y sumérgete en las culturas, paisajes y sabores únicos del bosque tropical más grande del planeta.",

    "act.eyebrow":              "Qué hacer",
    "act.title":                "Aventuras para todos los estilos",
    "act.sub":                  "De la selva al río, de la cultura indígena a las fiestas folclóricas — la Amazonia ofrece experiencias que perduran para siempre.",
    "act.tab.all":              "Todo",
    "act.tab.nature":           "Naturaleza",
    "act.tab.culture":          "Cultura",
    "act.tab.adventure":        "Aventura",
    "act.tab.gastronomy":       "Gastronomía",
    "act.tab.indigenous":       "Pueblos Originarios",
    "act.viewall":              "Ver todas las actividades",

    "fest.eyebrow":             "Festivales y Economía Local",
    "fest.title":               "La cultura late en el bosque",
    "fest.sub":                 "La Amazonia tiene fiestas que son patrimonio nacional y producciones rurales únicas — desde la temporada del cupuaçu hasta el mayor espectáculo folclórico del mundo.",
    "fest.viewall":             "Ver calendario completo",

    "fest.parintins.name":      "Festival de Parintins",
    "fest.parintins.state":     "Amazonas",
    "fest.parintins.desc":      "El mayor festival folclórico de Brasil reúne cientos de miles de personas en la disputa entre Boi Garantido y Boi Caprichoso. Una experiencia inolvidable.",
    "fest.parintins.period":    "Junio · Todos los años",
    "fest.cirio.name":          "Círio de Nazaré",
    "fest.cirio.state":         "Pará",
    "fest.cirio.desc":          "La procesión religiosa más grande del mundo, en Belém. Dos millones de fieles en las calles, emoción, fe y una tradición centenaria.",
    "fest.cirio.period":        "Octubre · Todos los años",
    "fest.cupuacu.name":        "Temporada del Cupuaçu",
    "fest.cupuacu.state":       "Amazonas · Pará · Acre",
    "fest.cupuacu.desc":        "De enero a abril es la temporada del cupuaçu. Municipios enteros giran en torno a esta fruta amazónica — pulpa, chocolate, dulces, cosméticos.",
    "fest.cupuacu.period":      "Ene–Abr · Anual",
    "fest.laranja.name":        "Fiesta de la Naranja",
    "fest.laranja.state":       "Capitão Poço · Pará",
    "fest.laranja.desc":        "Capitão Poço es el mayor productor de naranjas de Brasil. La fiesta anual celebra la cosecha con feria, música, gastronomía y desfiles.",
    "fest.laranja.period":      "Julio · Anual",
    "fest.borracha.name":       "Ciclo del Caucho",
    "fest.borracha.state":      "Acre · Amazonas",
    "fest.borracha.desc":       "La historia del látex moldeó la Amazonia. Seringales históricos, arquitectura belle époque en Manaus y Belém, y comunidades que viven del bosque.",
    "fest.borracha.period":     "Patrimonio histórico",
    "fest.jalapao.name":        "Temporada del Jalapão",
    "fest.jalapao.state":       "Tocantins",
    "fest.jalapao.desc":        "Dunas de arena dorada, manantiales de agua cristalina, sierras y ríos — el Jalapão es uno de los destinos más deslumbrantes de Brasil.",
    "fest.jalapao.period":      "May–Sep · Mejor época",

    "stay.eyebrow":             "Dónde Alojarse",
    "stay.title":               "Del albergue al lodge en la selva",
    "stay.sub":                 "Encuentra alojamientos cuidadosamente seleccionados para cada presupuesto y estilo de viaje — en las capitales y en lo profundo del bosque.",
    "stay.filter.all":          "Todos",
    "stay.filter.hotel":        "Hoteles",
    "stay.filter.hostel":       "Albergues",
    "stay.filter.pousada":      "Posadas",
    "stay.filter.lodge":        "Lodges",
    "stay.filter.resort":       "Resorts",
    "stay.viewall":             "Ver todos los alojamientos",
    "stay.per.night":           "por noche",
    "stay.from":                "Desde",
    "stay.see.more":            "Ver más",

    "food.eyebrow":             "Dónde Comer",
    "food.title":               "La cocina amazónica es patrimonio",
    "food.sub":                 "Del tacacá al pato en tucupi, del bagre a la brasa al açaí con pescado — explora sabores únicos que solo la Amazonia ofrece.",
    "food.highlight.title":     "Cocina Amazónica",
    "food.highlight.desc":      "Ingredientes que ningún otro lugar del mundo tiene. Una gastronomía construida a lo largo de siglos por pueblos indígenas, ribereños y migrantes.",
    "food.highlight.btn":       "Descubrir restaurantes",
    "food.viewall":             "Ver todos los restaurantes",

    "cta.title":                "La Amazonia está esperando<br>por <span>ti</span>",
    "cta.sub":                  "Cientos de atracciones naturales, culturales y gastronómicas mapeadas en los 7 estados de la Amazonia Legal. El mayor bioma del planeta en la palma de tu mano.",
    "cta.stat1.num":            "7",
    "cta.stat1.label":          "Estados",
    "cta.stat2.num":            "62+",
    "cta.stat2.label":          "Municipios",
    "cta.stat3.num":            "5,5 M",
    "cta.stat3.label":          "km² de bosque",
    "cta.stat4.num":            "10%",
    "cta.stat4.label":          "biodiversidad mundial",
    "cta.btn":                  "Planear mi viaje",

    "nl.title":                 "Recibe novedades de la Amazonia",
    "nl.sub":                   "Consejos de viaje, temporadas de festivales, nuevas aperturas de alojamientos y mucho más, directo a tu correo.",
    "nl.placeholder":           "Tu correo electrónico",
    "nl.btn":                   "Suscribirse",

    "footer.brand.desc":        "La mayor guía turística de la Amazonia Legal. Siete estados, historias infinitas por contar.",
    "footer.col1.title":        "Estados",
    "footer.col2.title":        "Explorar",
    "footer.col2.todo":         "Qué hacer",
    "footer.col2.eat":          "Dónde comer",
    "footer.col2.stay":         "Dónde alojarse",
    "footer.col2.festivals":    "Festivales",
    "footer.col2.economy":      "Economía local",
    "footer.col3.title":        "Información",
    "footer.col3.about":        "Sobre la Amazonia",
    "footer.col3.contact":      "Contacto",
    "footer.col3.press":        "Prensa",
    "footer.col3.accessibility":"Accesibilidad",
    "footer.col3.privacy":      "Privacidad",
    "footer.copy":              "© 2025 Mundo Amazônia. Todos los derechos reservados.",
    "footer.dev":               "Hecho con ♥ para la Amazonia",
  }
};

/* ── Motor de i18n ── */
let currentLang = localStorage.getItem('ma_lang') || 'pt';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key])
       || (translations['pt'] && translations['pt'][key])
       || key;
}

function applyTranslations(lang) {
  currentLang = lang;
  localStorage.setItem('ma_lang', lang);
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang === 'en' ? 'en' : 'es';
  document.title = t('site.title');

  /* Atualiza todos os elementos com data-i18n */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else if (el.tagName === 'OPTION') {
      el.textContent = val;
    } else {
      el.innerHTML = val;
    }
  });

  /* Atualiza data-i18n-placeholder */
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-ph'));
  });

  /* Marca botão ativo */
  document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

/* Inicializa ao carregar */
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);
  document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyTranslations(btn.dataset.lang));
  });
});
