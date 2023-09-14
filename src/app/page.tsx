import AboutUsContainer from "./components/index/AboutUsContainer";
import RoomsContainer from "./components/index/RoomsContainer";
import Header from "./components/Header";
import SurroundingsContainer from "./components/index/SurroundingsContainer";

export default function HomePage() {
    return (
        <div>
            <Header titleLight="Pension" title="Goldener Adler" info="Willkommen bei uns im gemütlichen Torgelow. Entdecken Sie die Stadt an der Uecker und ihre umgebende Natur. Genießen Sie die Nähe zur Ostsee und zum Oderhaff" image="https://www.harzpin.de/wp-content/uploads/2021/06/20150912_165222-2-2048x1350.jpg" imageAlt="Pension Goldener Adler" color="var(--gold)"/>
            <div className="container">
                <AboutUsContainer />
                <RoomsContainer />
            </div>
            <SurroundingsContainer />
        </div>
    );
}
