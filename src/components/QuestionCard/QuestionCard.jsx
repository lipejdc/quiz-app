import { useState } from "react";
import "./QuestionCard.css";

export default function QuestionCard({
  question,
  answer,
  tags = [],
  initiallyBookmarked = false,
}) {
  // Local state for “show answer”
  const [showAnswer, setShowAnswer] = useState(false);
  // Local state for “bookmarked”
  const [bookmarked, setBookmarked] = useState(initiallyBookmarked);

  return (
    <article className="question-card">
      <h2 className="question-card__heading">{question}</h2>

      {/* Answer text, only rendered when showAnswer is true */}
      <p className={`question-card__text${showAnswer ? "" : " hidden"}`}>
        {answer}
      </p>

      {/* Bookmark button */}
      <button
        className="question-card__bookmark-button"
        onClick={() => setBookmarked((b) => !b)}
        aria-pressed={bookmarked}
      >
        {/* You could import these SVGs as components too */}
        <svg
          className="question-card__bookmark-icon"
          viewBox="0 0 24 24"
          fill={bookmarked ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      </button>

      {/* Show/Hide answer button */}
      <button
        className="question-card__answer-button"
        onClick={() => setShowAnswer((v) => !v)}
      >
        {showAnswer ? "Hide answer" : "Show answer"}
      </button>

      {/* Tags list */}
      <div className="question-card__tags">
        {tags.map((t) => (
          <span key={t} className="question-card__tag">
            #{t}
          </span>
        ))}
      </div>
    </article>
  );
}
