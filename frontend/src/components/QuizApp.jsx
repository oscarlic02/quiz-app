import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { quizData } from '../data/quizData';

const QuizApp = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const calculatePersonalityCode = () => {
    const traits = {
      1: { E: 0, C: 0 },
      2: { S: 0, A: 0 },
      3: { P: 0, I: 0 },
      4: { M: 0, D: 0 }
    };

    // Count traits from answers
    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = quizData.questions.find(q => q.id === parseInt(questionId));
      const option = question.options.find(opt => opt.id === answer);
      traits[question.section][option.trait]++;
    });

    // Determine dominant trait for each section
    const code = [
      traits[1].E > traits[1].C ? 'E' : 'C',
      traits[2].S > traits[2].A ? 'S' : 'A',
      traits[3].P > traits[3].I ? 'P' : 'I',
      traits[4].M > traits[4].D ? 'M' : 'D'
    ].join('');

    return code;
  };

  const findMatchingResult = (code) => {
    for (const profile of quizData.results.profiles) {
      const matchingVariant = profile.variants.find(v => v.code === code);
      if (matchingVariant) {
        return {
          ...matchingVariant,
          profileType: profile.type,
          profileDescription: profile.description
        };
      }
    }
    return null;
  };

  const handleAnswer = (questionId, answerId) => {
    setAnswers(prev => ({ ...prev, [questionId]: answerId }));
  };

  const handleContinue = () => {
    const currentSectionQuestions = quizData.questions.filter(q => q.section === currentSection);
    
    if (currentQuestion < currentSectionQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentSection < 4) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
    } else {
      const personalityCode = calculatePersonalityCode();
      const matchedResult = findMatchingResult(personalityCode);
      setResult(matchedResult);
    }
  };

  const currentSectionQuestions = quizData.questions.filter(q => q.section === currentSection);
  const currentQuestionData = currentSectionQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-red-600 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <ProgressIndicator
          currentSection={currentSection}
          currentQuestion={currentQuestion}
          totalSections={4}
          questionsPerSection={3}
        />
        
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={`${currentSection}-${currentQuestion}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <QuizScreen
                section={quizData.sections.find(s => s.id === currentSection)}
                question={currentQuestionData}
                totalQuestions={currentSectionQuestions.length}
                currentQuestion={currentQuestion + 1}
                selectedAnswer={answers[currentQuestionData.id]}
                onAnswer={(answerId) => handleAnswer(currentQuestionData.id, answerId)}
                onContinue={handleContinue}
              />
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ResultScreen result={result} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const ProgressIndicator = ({ currentSection, currentQuestion, totalSections, questionsPerSection }) => {
  const totalProgress = (currentSection - 1) * questionsPerSection + currentQuestion;
  const totalQuestions = totalSections * questionsPerSection;
  const progress = (totalProgress / totalQuestions) * 100;

  return (
    <div className="mb-8">
      <div className="flex justify-between text-white/80 text-sm mb-2">
        <span>Sezione {currentSection}/4</span>
        <span>Domanda {currentQuestion}/{questionsPerSection}</span>
      </div>
      <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};

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

const ResultScreen = ({ result }) => {
  return (
    <div className="text-white">
      <div className="mb-12">
        <h2 className="text-5xl font-bold mb-4">{result.title}</h2>
        <p className="text-2xl">{result.subtitle}</p>
      </div>

      <div className="mb-8">
        <h3 className="text-3xl mb-4">
          {result.profileType}
        </h3>
        <p className="text-xl leading-relaxed">
          {result.description}
        </p>
      </div>
    </div>
  );
};

export default QuizApp;