import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
   const { characters } = props;

   return (
      <div className={style.contenedor}>
         {
         characters.map((person) => {
            return (
            <div>
               <Card 
                  onClose={() => window.alert('Emulamos que se cierra la card')}
                  name={person.name} 
                  species={person.species} 
                  gender={person.gender}
                  image={person.image}
               />
            </div>
         )})
         }
      </div>
   )
}
