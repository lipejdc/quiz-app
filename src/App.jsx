import "./assets/styles/global.css";
import FooterNavigation from "./components/FooterNavigation/FooterNavigation";
import Header from "./components/Header/Header";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import { QUESTIONS } from "../src/data/questions";

function App() {
  return (
    <>
      <Header />
      <main className="main-content">
        {QUESTIONS.map((card) => (
          <QuestionCard
            key={card.id}
            question={card.question}
            answer={card.answer}
            tags={card.tags}
          />
        ))}
      </main>
      <FooterNavigation />
    </>
  );
}

export default App;
