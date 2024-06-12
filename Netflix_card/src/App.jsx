import Caard from "./Caard";
import "./App.css";
function App() {
  const sData = [
    {
      name: "dark",
      image:
        "https://resizing.flixster.com/lpJkDxnEFNQT1OWJjnmYfvpAHJ0=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvUlRUVjI2NjgyOS53ZWJw",
      link: "https://www.netflix.com/in/title/80100172",
    },
    {
      name: "stranger thingsd",
      image:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12991665_b_v13_am.jpg",
      link: "https://www.netflix.com/in/title/80057281",
    },
    {
      name: "stranger thindgs",
      image:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12991665_b_v13_am.jpg",
      link: "https://www.netflix.com/in/title/80057281",
    },
    {
      name: "stranger thfings",
      image:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12991665_b_v13_am.jpg",
      link: "https://www.netflix.com/in/title/80057281",
    },

  
  ];

  return (
    
      <div className="main">
        
        <Caard sData={sData}></Caard>
      </div>
    
  );
}

export default App;
