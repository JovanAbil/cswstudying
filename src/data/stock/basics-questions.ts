import { Question } from '@/types/quiz';

export const basicsQuestions: Question[] = [
  {
    id: 'basics-1',
    type: 'free-response',
    question: 'Who comes to the stock market?',
    correctAnswer: 'Buyers and sellers',
    explanation: 'The stock market exists to connect people who want to buy shares with those who want to sell them.'
  },
  {
    id: 'basics-2',
    type: 'free-response',
    question: 'What do the buyers and sellers decide on a stock?',
    correctAnswer: 'They agree on a price',
    explanation: 'A trade only occurs when both a buyer and a seller agree on the same price.'
  },
  {
    id: 'basics-3',
    type: 'free-response',
    question: 'What are stocks?',
    correctAnswer: 'Stocks are parts of a company that can be bought',
    explanation: 'A stock represents partial ownership in a company.'
  },
  {
    id: 'basics-4',
    type: 'free-response',
    question: 'What is the S&P 500?',
    correctAnswer: 'An index that tracks 500 large US companies',
    explanation: 'The S&P 500 measures the performance of 500 major publicly traded U.S. companies.'
  },
  {
    id: 'basics-5',
    type: 'free-response',
    question: 'What is the NASDAQ-100 and how is it different from the NASDAQ?',
    correctAnswer: 'The NASDAQ-100 is an index of 100 large non-financial companies listed on the NASDAQ',
    explanation: 'The NASDAQ is a stock exchange, while the NASDAQ-100 is a specific index made up of selected companies on that exchange.'
  },
  {
    id: 'basics-6',
    type: 'free-response',
    question: 'What three identities are on the stock market?',
    correctAnswer: 'Market maker, investor, trader',
    explanation: 'Market makers provide liquidity, investors focus on long-term ownership, and traders focus on short-term price movements.'
  },
  {
    id: 'basics-7',
    type: 'free-response',
    question: "Why doesn't a stock immediately sell when you press sell?",
    correctAnswer: 'A buyer must agree to buy it at that price',
    explanation: "Stocks only sell when a matching buyer accepts the seller's price."
  },
  {
    id: 'basics-8',
    type: 'free-response',
    question: 'What is liquidity?',
    correctAnswer: 'How quickly an investment can be bought or sold and converted into cash',
    explanation: 'Highly liquid assets can be traded quickly with little price change.'
  },
  {
    id: 'basics-9',
    type: 'free-response',
    question: 'What happens when sellers sell more shares than buyers buy?',
    correctAnswer: 'The stock price goes down',
    explanation: 'Excess supply pushes the price lower.'
  },
  {
    id: 'basics-10',
    type: 'free-response',
    question: 'What happens when buyers buy more shares than sellers sell?',
    correctAnswer: 'The stock price goes up',
    explanation: 'Higher demand pushes the price higher.'
  },
  {
    id: 'basics-11',
    type: 'free-response',
    question: 'What is a bid?',
    correctAnswer: 'The highest price buyers are willing to pay',
    explanation: 'The bid represents buyer demand in the market.'
  },
  {
    id: 'basics-12',
    type: 'free-response',
    question: 'What is an ask?',
    correctAnswer: 'The lowest price sellers are willing to accept',
    explanation: 'The ask represents seller supply in the market.'
  },
  {
    id: 'basics-13',
    type: 'free-response',
    question: 'What is the difference between a bid and an ask called, and what is it?',
    correctAnswer: 'The spread, which is the difference between the bid and the ask',
    explanation: 'The spread reflects liquidity and trading costs in the market.'
  },
  {
    id: 'basics-14',
    type: 'free-response',
    question: 'What is a limit order?',
    correctAnswer: 'An order to buy or sell at a specific price or better, with no guarantee it will be executed',
    explanation: 'A limit order only fills at the chosen price or a better one, so it may not execute if the market never reaches that price.'
  },
  {
    id: 'basics-15',
    type: 'free-response',
    question: 'What is a stop order?',
    correctAnswer: 'An order that becomes a market order once a specific price is hit',
    explanation: 'When the stop price is reached, the order converts into a market order and executes at the best available price.'
  },
  {
    id: 'basics-16',
    type: 'free-response',
    question: 'What does a stop order do?',
    correctAnswer: 'Limits losses or triggers entries',
    explanation: 'Stop orders are commonly used to protect against large losses or to enter trades when price moves past a certain level.'
  },
  {
    id: 'basics-17',
    type: 'free-response',
    question: 'What is a market order?',
    correctAnswer: 'An order to buy or sell immediately at the best available price',
    explanation: 'Market orders prioritize speed over price control.'
  },
  {
    id: 'basics-18',
    type: 'free-response',
    question: 'What is trading volume in terms of stock?',
    correctAnswer: 'The total number of shares traded in a day',
    explanation: 'Volume shows how active a stock is and reflects market interest.'
  },
  {
    id: 'basics-19',
    type: 'free-response',
    question: 'What is volatility?',
    correctAnswer: 'How fast and how far the price moves',
    explanation: 'Volatility measures the size and speed of price changes.'
  },
  {
    id: 'basics-20',
    type: 'free-response',
    question: 'What is the difference between high volatility and low volatility?',
    correctAnswer: 'High volatility offers more opportunity but more risk, while low volatility is slower and tighter',
    explanation: 'High volatility means larger price swings, while low volatility means smaller, steadier movements.'
  },
  {
    id: 'basics-21',
    type: 'free-response',
    question: 'What is the difference between long-term and short-term trading?',
    correctAnswer: 'Long-term focuses on investing, while short-term is driven by news, supply and demand, emotions, and liquidity',
    explanation: 'Long-term strategies aim for growth over time, while short-term trading focuses on quick price movements.'
  }
];

