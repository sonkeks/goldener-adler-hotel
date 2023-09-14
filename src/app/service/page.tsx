import Header from "../components/Header";

export default function ServicePage() {
    return (
        <div>
            <Header titleLight="Genießen" title="Sie den Service  "
                    info="Vom Frühstück bis zum Parkplatz. Lernen Sie mehr über die vielfältigen Angebote, die wir Ihnen als Pension bieten"
                    image="http://www.gasthof-goldener-adler.de/images/headers/bar_06.JPG"
                    imageAlt="Pension Innenbereich" color="#C2B79B"/>
            <section className="section">
                <h1>Frühstück und Abendessen</h1>
                <p>Damit Ihr Aufenthalt in unserer Pension so angenehm und einzigartig wie möglich wird, engagieren sich unsere Mitarbeiter rund um die Uhr für Ihr persönliches Wohlbefinden.</p>
                <p>Das Frühstück ist Teil Ihrer Reservierung. Wir bieten ein frisches Buffet und verschiedenste Getränke. Hierbei gibt es keine festen Frühstückszeiten. Wir bitten Sie daher, uns ihre gewünschte Zeit mitzuteilen. Dies ist bereits während der Zimmerbuchung über unsere Website möglich. Gerne kommen wir Ihren Wünschen nach. Bei Allergien, oder dem Wunsch nach vegetarischem oder veganem Frühstück nehmen wir Rücksicht auf Sie. Sie können diese Wünsche ebenfalls während des Buchungsprozesses angeben.</p>
                <p>Zusätzlich zum Frühstück bieten wir für unsere Hausgäste von ca. 18.00 Uhr bis ca. 20.00 Uhr ein kleines Angebot von Speisen und Getränken an.</p>
            </section>
            <section className="section">
                <h1>Parkplätze und Unterbringungen</h1>
                <p>Eine sichere Unterstellmöglichkeit für Fahrräder, Motorräder und Paddelboote ist vorhanden. Wenn sie mit dem Auto anreisen, können Sie kostenfrei und ohne Reservierung auf den hoteleigenen Parkplätzen parken.
                </p>
            </section>
        </div>
    )
}