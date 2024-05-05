import ProfileCard from './Components/ProfileCard';
import './App.css';
import MyCompetences from './Components/MyCompetences';
import DesiredCompetences from './Components/DesiredCompetences';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function App() {
  const desiredCompetencesData = [
    "Знание языка программирования PHP",
    "Знание языков программирования и верстки HTML, CSS, и JavaScript на профессиональном уровне.",
    "Знание основ работы с серверной частью приложения и взаимодействие с API.",
    "Знание протоколов безопасности, таких как SSL и TLS, и как они обеспечивают защиту данных.",
    "Умение работать с различными базами данных, такими как MySQL, PostgreSQL",
    "Умение создавать адаптивный и красивый дизайн",
    "Навык тестирования и отладки",
    "Умение длительное времяконцентрироваться на работе",
    "Навык внимательности при написании кода",
    "Умение работать в Photoshop"
  ];


  return (
    <>
      <ProfileCard />
      <h2 className='heading'>Мои компетенции:</h2>
      <MyCompetences title="HTML/CSS" text="Понимание основ работы с HTML/CSS" />
      <MyCompetences title="JavaScript" text="Умение работать с библиотеками Python: Numpy, Mutplotlib, Pandas" />
      <MyCompetences title="JavaScript" text="Умение работать в Figma" />
      <MyCompetences title="JavaScript" text="Понимание основ работы с JavaScript" />
      <h2 className='heading'>Компетенции, которые планирую изучить:</h2>

      <Carousel responsive={responsive}>
        {desiredCompetencesData.map((title, index) => (
          <div key={index}>
            <DesiredCompetences title={title} />
          </div>
        ))}
      </Carousel>;
    </>

  );
}

export default App;

