# jsramverk-project-server
För att uppnå kravet på en realtids microserver använde jag mig av socket io och en winer processor.

Anledningen till valet av socket io är att den ger möjligheter till realtidsprogrammering och den möjliggör transfereringar med minimal overhead vilket är centralt när element i applikationen ska vara live. Jag satte upp servern i en självständig modul som lyssnade på en egen port för att få en tydlig struktur och underlätta underhållet. De aktuella värdena skickades till klienten som renderade dessa visuellt i form av diagram och siffror genom push(push()) och pop(pop()) av objektens olika värden i arrayer. För att slumpa fram de olika värdena på ett kontinuerligt varierat sätt användes en winerprocessor  som med hjälp av math.random() slumpar ett värde kring noll. Detta värdet adderas med variansens värde som sedermera multipliceras med det senaste ingångsvärdet så att ett nytt startvärde skapas.

Det blir en tydlig visuell effekt när man renderar en vy med realtidsprogrammering, kan dock emellertid tycka att den blir något hacking vilket stör helhetsintrycket något. Att få realtidsaspekten funktionsdugligt har varit min största utmaning i detta projekt, hade problem med att få det att rendera i realtid på klientsidan och med den tekniken som jag använde så blev resultatet hyggligt funktionellt. Vis av den erfarenhet jag har nu skulle jag dock ha använt en annan teknik och inte blandat in streamingpaket från npm som jag nu gjorde vilket störde applikationens rendering och istället använt mig av de funktionaliteterna som React i sig erbjuder. Med detta sagt fungerar dock renderingen av diagrammen på ett tillfredsställande sätt i applikationen.
