import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuizScreen = ({ 
  section, 
  question, 
  totalQuestions, 
  currentQuestion, 
  selectedAnswer, 
  onAnswer, 
  onContinue 
}) => {
  return (
    <div className="text-white">
      <div className="mb-12">
        <h2 className="text-5xl font-bold mb-8">TI SEI MAI CHIEST* SE</h2>
        <div>
          <p className="text-xl mb-4">
            Sezione {section.id}: {section.title} ({currentQuestion}/{totalQuestions})
          </p>
          <h3 className="text-3xl font-semibold mb-8">{question.text}</h3>
        </div>
      </div>

      <div className="space-y-6">
        {question.options.map((option) => (
          <button
            key={option.id}
            className={`w-full bg-white/10 backdrop-blur-sm text-white rounded-xl p-6 text-left hover:bg-white/20 transition
              ${selectedAnswer === option.id ? 'ring-2 ring-white' : ''}`}
            onClick={() => onAnswer(option.id)}
          >
            <span className="text-xl">{option.text}</span>
          </button>
        ))}
      </div>

      <button
        className={`w-full mt-8 py-6 rounded-xl text-xl font-semibold
          ${selectedAnswer
            ? 'bg-white text-red-600 hover:bg-white/90'
            : 'bg-white/20 text-white/50 cursor-not-allowed'}`}
        onClick={onContinue}
        disabled={!selectedAnswer}
      >
        CONTINUE
      </button>
    </div>
  );
};