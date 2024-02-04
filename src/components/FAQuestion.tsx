// FAQuestion.tsx
'use client'
import React, { useState } from 'react';

const FAQuestion = ({ question, answer }: { question: string; answer: string }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-4 border-b border-white">
      <div
        className="flex items-center cursor-pointer transition"
        onClick={toggleExpand}
        role="button"
        aria-expanded={expanded}
        aria-controls="answer"
      > 
        <div className={`font-semibold text-xl mb-4 ${expanded ? 'text-blue-100' : 'text-white'} transition`}>{question}</div>
        <div className={`mr-2 ml-auto mb-4 ${expanded ? 'ml-auto' : ''} transition`}>{expanded ? '▼' : '▶'}</div>
      </div>
      {expanded && <div className="mt-2 ml-6 mb-4 text-white-800 text-lg" id="answer">{answer}</div>}
    </div>
  );
};

export default FAQuestion;
