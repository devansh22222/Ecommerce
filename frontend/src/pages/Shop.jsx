import Hero from "../components/Hero/Hero";
import NewCollections from "../components/newCollections/NewCollections";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import Offer from "../components/offer/Offer";
import Popular from "../components/popular/Popular";


export default function Shop(){
    return (
        <div>
            <Hero/>
            <Popular/>
            <Offer/>
            <NewCollections/>
            <NewsLetter/>
        </div>
    )
}