import "./styles/global.css";
import "./styles/dropdown.css"
import Header from "./components/Header";
import Section from "./components/Section";
import Dropdown from "./components/Dropdown";
import drone1 from "./images/drone1.jpg"
import drone2 from "./images/drone2.jpg"
import drone3 from "./images/drone3.jpg"
import drone4 from "./images/drone4.jpg"
import drone5 from "./images/drone5.jpg"
import drone6 from "./images/drone6.jpg"

function App() {

  let sectionAmount = 6
  let sectionArray = [];
  let titleArray = ["Go Now", "Tours", "Explore", "Community", "Contact Us", "About"];
  let imageArray = [drone1, drone2, drone3, drone4, drone5, drone6];

  for(let i = 0; i < sectionAmount; i++){
    sectionArray.push(<Section title={titleArray[i]} image={imageArray[i]} order={i % 2}/>)
  }

  return (
    <div className={"flex justify-center items-center h-screen"}>
      <div className={"relative flex flex-col items-stretch border-4 border-black bg-gray-800 h-3/4 w-1/6 sm:w-1/3 lg:w-1/6 rounded-3xl overflow-hidden"}>
        <div className={"absolute top-2 flex justify-center w-full"}>
          <div className={"hidden bg-black rounded-3xl h-[1.5rem] z-1 w-[4rem]"}></div>
        </div>
        <div className={"overflow-scroll no-scrollbar"}>
          <Header />
          <Dropdown />
          {sectionArray.map(section => (
              <div key={section.id}>
                {section}
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
