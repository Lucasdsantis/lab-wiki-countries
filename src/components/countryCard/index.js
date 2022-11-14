import { Link } from "react-router-dom";

export function CountryCard(props){
    return(
        <div class="container">
       
        <div class="row">
          
          <div class="col-5" style={{maxHeight: "90vh", overflow: "scroll"}}>
            <div class="list-group">
              <Link class="list-group-item list-group-item-action" to={`/${props.countryCode}`}>
                {props.countryName} 
                </Link>
          
            </div>
            </div>
            </div>
            </div>
   
   
   
    ) 

}