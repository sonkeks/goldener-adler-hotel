import Link from 'next/link';
import HeaderCarousel from "../components/HeaderCarousel";
import AboutUsContainer from "../components/AboutUsContainer";
import RoomsContainer from "../components/RoomsContainer";

export default function HomePage() {
    return (
        <div>
            <HeaderCarousel />
            <AboutUsContainer />
            <RoomsContainer />
            <Link href="/rooms">See our Rooms</Link>
        </div>
    );
}
