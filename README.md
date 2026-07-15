# Website V.C. Sticky Fingers

## Inhoudsopgave

- Inleiding
- Gebruikte technieken en frameworks
- Stappenplan
- Beschikbare accounts
- Relevante npm commando's

## Inleiding

Volleybalclub Sticky Fingers heeft een nieuwe website ontwikkeld! Hiermee willen we nieuwe leden gemakkelijker
bereiken en enthousiasmeren om zich bij onze gezellige club aan te sluiten. Met behulp van het contactformulier kunnen
geïnteresseerden een vraag stellen of een verzoek doen om een keer op proef mee te spelen. Ook kan er een account
aangemaakt worden waarmee je toegang krijgt tot het ledengedeelte van de website. Binnen dit ledengedeelte
inventariseren we hoeveel spelers er op de komende
speelavonden (elke vrijdag) aanwezig zullen zijn. Tenslotte kunnen er peilingen worden ingevuld. Hiermee organiseren we o.a.
periodiek een gezellig etentje of een andere gezamenlijke activiteit. Lees verder hoe je gemakkelijk
zelf een kijkje kan nemen op onze nieuwe website.

![Screenshot homepagina](screenshot-home-page.png)

## Benodigdheden, gebruikte technieken en frameworks

Om deze applicatie te kunnen gebruiken, zijn de volgende programma's nodig:

- Node.js
- npm
- Webbrowser

Verder is gebruik gemaakt van de volgende technieken en frameworks:

- React: voor het opbouwen van de interface.
- React Router: voor navigatie tussen de verschillende pagina's.
- Vite: voor het starten en bouwen van de applicatie.
- axios: voor het faciliteren van requests.
- date-fns: voor het aanpassen en weergeven van datums.
- jwt-decode: voor het decoderen van tokens.
- vite-plugin-svgr: voor het importeren en gebruiken van SVG-bestanden als React-componenten.

## Stappenplan

Je kunt op de volgende manieren toegang krijgen tot de applicatie:

### Via het ZIP-bestand

1. Pak het ZIP-bestand uit. Een .env-bestand met Project-ID en base-URL is meegeleverd.
2. Open de projectmap.
3. Run in de terminal "npm install".
4. Start de applicatie met "npm run dev".
5. Open de gegenereerde localhost-link om de pagina in de webbrowser te bekijken.

### Via GitHub

1. Clone de repository.
2. Run in de terminal "npm install".
3. Kopieer ".env.dist" en hernoem de kopie naar ".env".
4. Vul de vereiste variabelen in (op aanvraag beschikbaar bij de auteur).
5. Start de applicatie met "npm run dev".
6. Open de gegenereerde localhost-link om de pagina in de webbrowser te bekijken.

## Beschikbare accounts

Testaccounts zijn:

1. E-mailadres: "user.regular@example.com", wachtwoord: "regular123".
2. E-mailadres: "user.another@example.com", wachtwoord: "another123".

   NB: dit zijn testaccounts zonder persoonlijke gegevens. Er wordt gebruik gemaakt van een API uitsluitend bedoeld
   voor educatieve doeleinden. De database wordt dagelijks automatisch geleegd.

## Relevante npm commando's

- "npm run dev". Applicatie starten in ontwikkelaars-modus, zie ook Stappenplan.
- "npm run build". Bouwt een productie-versie van de applicatie.
- "npm run lint". Controle op fouten in de code.
- "npm run preview". Start lokaal een voorbeeld van de productie.

## Veel plezier met het bekijken van onze nieuwe website!
