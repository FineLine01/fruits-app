import './App.css';
import Fruit from './components/fruits'
function App() {

  const fruits = [
    { name: "Apple", color: "Green", imageUrl: "https://www.pngmart.com/files/5/Green-Apple-PNG-Transparent.png" },
    { name: "Tomato", color: "Red", imageUrl: "https://purepng.com/public/uploads/large/purepng.com-fresh-red-tomatovegetables-tomato-red-941524712717j8tun.png" },
    { name: "Banana", color: "Yellow", imageUrl: "https://www.pngarts.com/files/3/Single-Orange-PNG-Image.png" },
    { name: "Orange", color: "Orange", imageUrl: "https://pngimg.com/uploads/banana/banana_PNG104250.png" }
  ];

  return (
    <div className="App">
      {
        fruits.map((currentFruit)=>{
          return (
            <Fruit 
              name={currentFruit.name} 
              color={currentFruit.color}
              imageUrl={currentFruit.imageUrl}
             />
          )
        })
      }
    </div>
  );
}

export default App;
