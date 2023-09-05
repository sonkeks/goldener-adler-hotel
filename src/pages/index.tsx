import AboutUsContainer from "../components/AboutUsContainer";
import RoomsContainer from "../components/RoomsContainer";
import Header from "../components/Header";

export default function HomePage() {
    return (
        <div>
            <Header />
            <div className="container">
            <AboutUsContainer />
            <RoomsContainer />
            </div>
        </div>
    );
}
