import React, { useContext, useEffect, useReducer, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import "@fontsource/libre-caslon-display";
import "@fontsource/dancing-script";
import {
  ChatOption,
  ChatStepId,
  MealPrepSelections,
  chatSteps,
} from '../data/meal-prep';
import { MealPrepCartContext } from '../context/meal-prep-cart';

// === Styled Components ===

const PageWrapper = styled.div`
  width: 100%;
  padding: 30px 0;
`;

const Title = styled.div`
  display: flex;
  font-size: 48px;
  justify-content: center;
  margin: 0px 0px 15px;

  @media screen and (max-width: 1024px) {
    margin-bottom: 25px;
  }
`;

const Warning = styled.div`
  font-family: "Libre Caslon Display";
  display: flex;
  font-size: 20px;
  justify-content: center;
  margin: 15px 0px;

  @media screen and (max-width: 1024px) {
    text-align: center;
    padding: 0 10px;
    margin-bottom: 25px;
  }
`;

const RedWarning = styled(Warning)`
  color: red;
`;

const WarningContainer = styled.div`
  margin: 0 25px;
  text-align: center;
`;

const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 20px auto 0;
  height: 65vh;
  border: 4px dotted #c4e2e8;
  border-radius: 8px;
  overflow: hidden;
  font-family: "Libre Caslon Display";

  @media screen and (max-width: 1024px) {
    height: 75vh;
    max-width: 100%;
    margin: 20px 10px 0;
    @media screen and (max-width: 1024px) {
     height: 55vh;
    }
  }
`;

const MessageList = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MessageBubble = styled.div<{ sender: 'bot' | 'user' }>`
  max-width: 75%;
  padding: 12px 18px;
  border-radius: 18px;
  font-size: 16px;
  line-height: 1.5;
  white-space: pre-line;
  align-self: ${props => props.sender === 'bot' ? 'flex-start' : 'flex-end'};
  background-color: ${props => props.sender === 'bot' ? '#c4e2e8' : 'rgba(55, 69, 119, 0.23)'};
  border-bottom-left-radius: ${props => props.sender === 'bot' ? '4px' : '18px'};
  border-bottom-right-radius: ${props => props.sender === 'user' ? '4px' : '18px'};

  @media screen and (max-width: 1024px) {
    max-width: 85%;
    font-size: 14px;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 15px 20px;
  border-top: 2px dotted #c4e2e8;
  background-color: white;
  justify-content: center;
  min-height: 50px;
  align-items: center;
`;

const OptionChip = styled.button`
  background-color: white;
  border: 2px solid #c4e2e8;
  border-radius: 25px;
  padding: 8px 20px;
  font-family: "Dancing Script";
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
  color: black;

  &:hover {
    background-color: #c4e2e8;
    transform: scale(1.03);
  }

  &:active {
    transform: scale(0.97);
  }

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    padding: 6px 14px;
  }
`;

const ExtraCostBadge = styled.span`
  font-size: 12px;
  color: #856e1e;
  margin-left: 6px;
  font-family: "Libre Caslon Display";
`;

const ActionButton = styled.button`
  background-color: rgba(55, 69, 119, 0.23);
  border-radius: 25px;
  padding: 10px 25px;
  font-size: 20px;
  border: none;
  font-family: 'Dancing Script';
  cursor: pointer;
  color: black;
  margin: 4px 8px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #c4e2e8;
  }
`;

// Day Counter styles
const DayCounterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  width: 100%;
`;

const DayDisplay = styled.span`
  font-family: "Dancing Script";
  font-size: 22px;
  min-width: 70px;
  text-align: center;
`;

const ChangeButton = styled.button`
  background-color: white;
  border: 2px solid #c4e2e8;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 20px;
  font-family: 'Dancing Script';
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #c4e2e8;
  }
`;

// Typing dots animation
const bounce = keyframes`
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-6px); }
`;

const TypingDotsWrapper = styled.div`
  display: flex;
  gap: 4px;
  padding: 4px 0;
`;

const Dot = styled.div<{ delay: number }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: rgba(55, 69, 119, 0.4);
  animation: ${bounce} 1.2s infinite;
  animation-delay: ${props => props.delay}ms;
`;

// === Sub-Components ===

const TypingDots = () => (
  <TypingDotsWrapper>
    <Dot delay={0} />
    <Dot delay={200} />
    <Dot delay={400} />
  </TypingDotsWrapper>
);

const DayCounterWidget = ({ onConfirm }: { onConfirm: (days: number) => void }) => {
  const [days, setDays] = useState(3);

  return (
    <DayCounterContainer>
      <ChangeButton onClick={() => setDays(d => Math.max(3, d - 1))}>-</ChangeButton>
      <DayDisplay>{days} days</DayDisplay>
      <ChangeButton onClick={() => setDays(d => Math.min(14, d + 1))}>+</ChangeButton>
      <ActionButton onClick={() => onConfirm(days)}>Confirm</ActionButton>
    </DayCounterContainer>
  );
};

// === Chat Reducer ===

interface ChatMessage {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

interface ChatState {
  messages: ChatMessage[];
  currentStepId: ChatStepId;
  selections: MealPrepSelections;
  isComplete: boolean;
}

type ChatAction =
  | { type: 'SELECT_OPTION'; label: string; value: string; nextStepId: ChatStepId }
  | { type: 'SELECT_DAY_COUNT'; days: number; nextStepId: ChatStepId }
  | { type: 'RESET' };

function updateSelections(
  stepId: ChatStepId,
  value: string,
  prev: MealPrepSelections
): MealPrepSelections {
  switch (stepId) {
    case 'welcome':
      return { ...prev, path: value as MealPrepSelections['path'] };
    case 'standard_plate_type':
      return { ...prev, plateType: value as 'protein' | 'pasta' };
    case 'standard_protein':
      return { ...prev, protein: value };
    case 'standard_pasta':
      return { ...prev, pasta: value };
    case 'standard_pasta_protein':
      return { ...prev, pastaProtein: value === 'none' ? undefined : value };
    case 'standard_base':
      return { ...prev, base: value };
    case 'standard_veggie':
      return { ...prev, veggie: value };
    case 'standard_sauce':
      return { ...prev, sauce: value };
    case 'bundle_select':
      return { ...prev, bundleType: value };
    case 'crew_pack_select':
      return { ...prev, crewPack: value };
    case 'crew_pack_breakfast':
      return { ...prev, crewBreakfast: value };
    case 'crew_pack_lunch':
      return { ...prev, crewLunch: value };
    case 'crew_pack_dinner':
      return { ...prev, crewDinner: value };
    case 'crew_pack_no_heat':
      if (value !== 'Red-Eye Overnight Oats') {
        return { ...prev, crewNoHeatMeal: value };
      }
      return prev;
    case 'crew_pack_oat_flavor':
      // If no-heat meal isn't set yet, this came from the no-heat step (Layover)
      if (!prev.crewNoHeatMeal) {
        return { ...prev, crewOatFlavor: value, crewNoHeatMeal: `Red-Eye Overnight Oats - ${value}` };
      }
      // Otherwise came from breakfast (other packs)
      return { ...prev, crewOatFlavor: value };
    case 'crew_pack_greens_protein':
      return { ...prev, crewGreensProtein: value };
    case 'crew_pack_snack':
      return { ...prev, crewSnack: value };
    default:
      return prev;
  }
}

const initialSelections: MealPrepSelections = { path: null };
const SESSION_KEY = 'mealPrepChatState';
const SESSION_VERSION = 4;

// Clear stale session data from previous versions
try {
  const raw = sessionStorage.getItem(SESSION_KEY);
  if (raw) {
    const parsed = JSON.parse(raw);
    if (parsed._version !== SESSION_VERSION) {
      sessionStorage.removeItem(SESSION_KEY);
    }
  }
} catch {}

function saveToSession(state: ChatState): void {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify({ ...state, _version: SESSION_VERSION }));
  } catch {}
}

function loadFromSession(): ChatState | null {
  try {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (stored) return JSON.parse(stored) as ChatState;
  } catch {}
  return null;
}

function getInitialState(): ChatState {
  const saved = loadFromSession();
  if (saved) return saved;

  const firstStep = chatSteps['welcome'];
  const botText = typeof firstStep.botMessage === 'function'
    ? firstStep.botMessage(initialSelections)
    : firstStep.botMessage;

  return {
    messages: [
      { id: 'bot-init', sender: 'bot', text: botText },
    ],
    currentStepId: 'welcome',
    selections: initialSelections,
    isComplete: false,
  };
}

function chatReducer(state: ChatState, action: ChatAction): ChatState {
  switch (action.type) {
    case 'SELECT_OPTION': {
      const updatedSelections = updateSelections(
        state.currentStepId,
        action.value,
        state.selections
      );

      const nextStep = chatSteps[action.nextStepId];
      const botText = typeof nextStep.botMessage === 'function'
        ? nextStep.botMessage(updatedSelections)
        : nextStep.botMessage;

      return {
        messages: [
          ...state.messages,
          { id: `user-${Date.now()}`, sender: 'user', text: action.label },
          { id: `bot-${Date.now()}`, sender: 'bot', text: botText },
        ],
        currentStepId: action.nextStepId,
        selections: updatedSelections,
        isComplete: nextStep.options === null,
      };
    }

    case 'SELECT_DAY_COUNT': {
      const updatedSelections = { ...state.selections, days: action.days };
      const nextStep = chatSteps[action.nextStepId];
      const botText = typeof nextStep.botMessage === 'function'
        ? nextStep.botMessage(updatedSelections)
        : nextStep.botMessage;

      return {
        messages: [
          ...state.messages,
          { id: `user-${Date.now()}`, sender: 'user', text: `${action.days} days` },
          { id: `bot-${Date.now()}`, sender: 'bot', text: botText },
        ],
        currentStepId: action.nextStepId,
        selections: updatedSelections,
        isComplete: nextStep.options === null,
      };
    }

    case 'RESET': {
      sessionStorage.removeItem(SESSION_KEY);
      return getInitialState();
    }

    default:
      return state;
  }
}

// === Main Component ===

export const MealPrepChat = () => {
  const [chatState, dispatch] = useReducer(chatReducer, undefined, getInitialState);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { addOrder, addCrewPack } = useContext(MealPrepCartContext);

  useEffect(() => {
    saveToSession(chatState);
  }, [chatState]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatState.messages, isTyping]);

  const handleOptionSelect = (option: ChatOption) => {
    const currentStep = chatSteps[chatState.currentStepId];
    const nextStepId = currentStep.getNextStep(option.value, chatState.selections);

    // Add to cart when user confirms from summary
    if (chatState.currentStepId === 'standard_summary' && option.value === 'yes') {
      addOrder(chatState.selections);
    }
    if (chatState.currentStepId === 'crew_pack_summary' && option.value === 'yes') {
      addCrewPack(chatState.selections);
    }

    // Navigate to cart page
    if ((chatState.currentStepId === 'standard_confirm' || chatState.currentStepId === 'crew_pack_confirm') && option.value === 'view_cart') {
      window.location.href = '/cart';
      return;
    }

    // "Add Another" resets the chat
    if ((chatState.currentStepId === 'standard_confirm' || chatState.currentStepId === 'crew_pack_confirm') && option.value === 'add_another') {
      dispatch({ type: 'RESET' });
      return;
    }

    setIsTyping(true);
    setTimeout(() => {
      dispatch({ type: 'SELECT_OPTION', label: option.label, value: option.value, nextStepId });
      setIsTyping(false);
    }, 400);
  };

  const handleDaySelect = (days: number) => {
    const currentStep = chatSteps[chatState.currentStepId];
    const nextStepId = currentStep.getNextStep(String(days), chatState.selections);

    setIsTyping(true);
    setTimeout(() => {
      dispatch({ type: 'SELECT_DAY_COUNT', days, nextStepId });
      setIsTyping(false);
    }, 400);
  };

  const handleStartOver = () => {
    dispatch({ type: 'RESET' });
  };

  const currentStep = chatSteps[chatState.currentStepId];

  return (
    <PageWrapper>
      <Title>Modern Meal Prep</Title>
      <WarningContainer>
        <RedWarning>
          Meal preparation services are only available in Orlando, Florida.
        </RedWarning>
        <Warning>
          Please contact us at cherickseats@gmail.com to let us know of any allergies or food sensitivities before placing your order.
        </Warning>
      </WarningContainer>

      <ChatContainer>
        <MessageList>
          {chatState.messages.map((msg) => (
            <MessageBubble key={msg.id} sender={msg.sender}>
              {msg.text}
            </MessageBubble>
          ))}
          {isTyping && (
            <MessageBubble sender="bot">
              <TypingDots />
            </MessageBubble>
          )}
          <div ref={messagesEndRef} />
        </MessageList>

        <OptionsContainer>
          {isTyping ? null : chatState.isComplete ? (
            <OptionChip onClick={handleStartOver}>Start Over</OptionChip>
          ) : currentStep.options === 'day_counter' ? (
            <>
              <DayCounterWidget onConfirm={handleDaySelect} />
              <OptionChip onClick={handleStartOver}>Start Over</OptionChip>
            </>
          ) : Array.isArray(currentStep.options) ? (
            <>
              {currentStep.options.map((opt) => (
                <OptionChip key={opt.value} onClick={() => handleOptionSelect(opt)}>
                  {opt.label}
                  {opt.extraInfo && <ExtraCostBadge>({opt.extraInfo})</ExtraCostBadge>}
                </OptionChip>
              ))}
              {chatState.currentStepId !== 'welcome' && !currentStep.options.some(opt => opt.value === 'no') && (
                <OptionChip onClick={handleStartOver}>Start Over</OptionChip>
              )}
            </>
          ) : null}
        </OptionsContainer>
      </ChatContainer>
    </PageWrapper>
  );
};