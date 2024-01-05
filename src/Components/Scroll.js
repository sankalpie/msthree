import "../Styles/Scroll.css"
import Card from "./Card";

export default function App(props) {
  const { food } = props;

  return (
    <div className="grid-container">
      {
        food.map(([foodName, hueA, hueB]) => {
          return (

            <div style={{ marginBottom:'50px'}}>
              
                <Card foodName={foodName} hueA={hueA} hueB={hueB} key={foodName}/>
              
            </div>

          );
        }
        )
      }
    </div>
  )
}
