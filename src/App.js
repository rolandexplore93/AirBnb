import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Card from './Components/Card';
import Data from './Data'

function App() {

  const cards = Data.map(item => {
    return (
        <Card
            key={item.id}
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            description={item.description}
            price={item.price}
            openSpots={item.openSpots}
        />
    )
  })
  
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section>
        {cards}
      </section>
    </div>
  );
}

export default App;
