import Link from 'next/link';
import AboutUsContainer from "../components/AboutUsContainer";
import RoomsContainer from "../components/RoomsContainer";
import Header from "../components/Header";

export default function HomePage() {
    return (
        <div>
            <Header />
            <AboutUsContainer />
            <RoomsContainer />
            <Link href="/rooms">See our Rooms</Link>
        </div>
    );
}
