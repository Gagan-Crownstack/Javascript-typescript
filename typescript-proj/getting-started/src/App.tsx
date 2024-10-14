import "./App.css";
import Test from "./components/Test";

function App() {
  const handleClick = () => {
    const announcement = "HelLLlo World!";
    console.log(announcement.toLocaleLowerCase());

    function greet(person: string | undefined, date?: Date) {
      console.log(`Hello ${person}, today is ${date}!`);
    }

    greet("Brendan");
  };

  return (
    <>
      Hello
      <button onClick={handleClick}>click me!</button>
      <Test id="1" fname="Gagan" lname="Prakash" />
    </>
  );
}

export default App;
