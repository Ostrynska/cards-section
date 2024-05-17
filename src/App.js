import './App.css';

// import Card from './components/Card/Card';
import CardList from './components/CardList/CardList';

function App() {
  return (
    <main>
      <h1 hidden>Cards App</h1>
      <section>
        <h2 hidden>Cards List</h2>
        <CardList />
      </section>
    </main>
  );
}

export default App;
