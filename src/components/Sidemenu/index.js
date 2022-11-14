import { CountryCard } from "../countryCard";
import countries from "../../countries.json";


export function SideMenu() {
    return( <div>
     {countries.map((currentElement) => {
        return <CountryCard countryName={currentElement.name.common} countryCode={currentElement.alpha3Code}/>
     })}  
    </div>
    );
}