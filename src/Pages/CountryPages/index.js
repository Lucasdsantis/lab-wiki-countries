import countries from "../../countries.json";
import { useParams } from "react-router-dom";


export function CountryPage()  {

    const params = useParams()

    const country = countries.filter((currentElement) => currentElement.alpha3Code === params.countryCode)[0]

    return <h1>{country.name.common}</h1>

}