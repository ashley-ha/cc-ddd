// Claude Code Tips and Educational Content
export interface Tip {
  id: string;
  title: string;
  description: string;
  command?: string;
  duckAdvice: string;
  codeExample?: string;
  timing: {
    start: number; // frame number
    duration: number; // in frames at 30fps
  };
}

export const claudeCodeTips: Tip[] = [
  {
    id: 'code-review',
    title: 'Instant Code Review',
    description: 'Get immediate feedback on your code quality, potential bugs, and optimization opportunities.',
    duckAdvice: 'Quack! Ask me to review your code before committing. I can spot issues you might miss!',
    command: 'claude review src/component.tsx',
    codeExample: `// Before
const Component = (props) => {
  return <div>{props.data.map(item => <span>{item}</span>)}</div>
}

// After Claude Code review
const Component = ({ data }: { data: string[] }) => {
  return (
    <div>
      {data.map((item, index) => (
        <span key={index}>{item}</span>
      ))}
    </div>
  );
};`,
    timing: { start: 900, duration: 180 }
  },
  
  {
    id: 'debugging-help',
    title: 'Smart Debugging',
    description: 'Claude Code can analyze error messages and suggest specific solutions.',
    duckAdvice: 'Stuck on a bug? Paste the error message and I\\'ll help you debug it step by step!',
    command: 'claude debug "TypeError: Cannot read property..."',
    codeExample: `// Error: Cannot read property 'length' of undefined
// Claude Code suggests:
const handleData = (data?: string[]) => {
  if (!data?.length) return null;
  return data.map(item => process(item));
};`,
    timing: { start: 1080, duration: 180 }
  },

  {
    id: 'optimization',
    title: 'Performance Optimization',
    description: 'Automatically identify and fix performance bottlenecks in your code.',
    duckAdvice: 'I can spot performance issues and suggest React.memo, useMemo, and useCallback optimizations!',
    command: 'claude optimize --performance',
    codeExample: `// Before: Causes unnecessary re-renders
const ExpensiveComponent = ({ data, onClick }) => {
  const processedData = data.map(item => complexCalculation(item));
  return <div onClick={() => onClick(processedData)}>...</div>
}

// After Claude Code optimization
const ExpensiveComponent = React.memo(({ data, onClick }) => {
  const processedData = useMemo(
    () => data.map(item => complexCalculation(item)), 
    [data]
  );
  const handleClick = useCallback(
    () => onClick(processedData), 
    [onClick, processedData]
  );
  return <div onClick={handleClick}>...</div>
});`,
    timing: { start: 1260, duration: 210 }
  },

  {
    id: 'test-generation',
    title: 'Auto-Generate Tests',
    description: 'Generate comprehensive unit tests for your components and functions.',
    duckAdvice: 'Testing is important! I can write Jest tests, integration tests, and even mock data for you!',
    command: 'claude test src/utils.ts',
    codeExample: `// Original function
export const formatCurrency = (amount: number, locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'USD'
  }).format(amount);
};

// Claude Code generates:
describe('formatCurrency', () => {
  test('formats USD currency correctly', () => {
    expect(formatCurrency(1234.56)).toBe('$1,234.56');
  });
  
  test('handles different locales', () => {
    expect(formatCurrency(1234.56, 'de-DE')).toBe('1.234,56 $');
  });
  
  test('handles edge cases', () => {
    expect(formatCurrency(0)).toBe('$0.00');
    expect(formatCurrency(-100)).toBe('-$100.00');
  });
});`,
    timing: { start: 1470, duration: 180 }
  },

  {
    id: 'refactoring',
    title: 'Smart Refactoring',
    description: 'Modernize legacy code, extract reusable components, and improve architecture.',
    duckAdvice: 'Old code giving you trouble? I can help refactor it to modern patterns and best practices!',
    command: 'claude refactor --extract-components',
    codeExample: `// Before: Monolithic component
const UserDashboard = () => {
  // 200+ lines of mixed logic...
}

// After Claude Code refactoring
const UserDashboard = () => {
  return (
    <div>
      <UserProfile />
      <ActivityFeed />
      <StatisticsPanel />
      <SettingsModal />
    </div>
  );
};`,
    timing: { start: 1650, duration: 180 }
  },

  {
    id: 'documentation',
    title: 'Auto Documentation',
    description: 'Generate README files, API docs, and inline comments automatically.',
    duckAdvice: 'Good documentation saves time! I can write clear docs, JSDoc comments, and README files!',
    command: 'claude document --generate-readme',
    codeExample: `/**
 * Validates user input and sanitizes data
 * @param input - Raw user input string
 * @param options - Validation configuration
 * @returns Sanitized and validated data object
 * @throws ValidationError if input is invalid
 * 
 * @example
 * const result = validateUserInput('john@example.com', { 
 *   type: 'email',
 *   required: true 
 * });
 */
export const validateUserInput = (input: string, options: ValidationOptions) => {
  // Implementation...
};`,
    timing: { start: 1830, duration: 150 }
  }
];

export const duckPersonality = {
  catchphrases: [
    'Quack! Let me help you debug that!',
    'Duck and cover... your code with tests!',
    'Don\\'t let bugs ruffle your feathers!',
    'Time to get your ducks in a row!',
    'Waddle we do without proper error handling?',
    'That\\'s some fine-looking code, if I do say so myself!'
  ],
  
  moods: {
    helpful: 'ready to assist with coding challenges',
    excited: 'thrilled about clean, optimized code',
    wise: 'sharing years of debugging wisdom',
    encouraging: 'boosting developer confidence'
  }
};

export const videoScript = {
  totalDuration: 2000, // frames (about 67 seconds at 30fps)
  
  scenes: [
    {
      name: 'Introduction',
      frames: { start: 0, end: 180 },
      narration: 'Meet Sarah, a talented developer who\\'s about to discover how Claude Code can 10x her engineering skills.',
      duckAction: 'appears with friendly wave'
    },
    
    {
      name: 'The Problem',
      frames: { start: 180, end: 420 },
      narration: 'Sarah is working on a React component, but she knows it could be optimized. The code works, but is it following best practices?',
      duckAction: 'looks thoughtful, points at screen'
    },
    
    {
      name: 'Claude Code Arrives',
      frames: { start: 420, end: 720 },
      narration: 'Enter Claude Code - your AI pair programming partner. With just a few commands, it can review, optimize, and improve your code.',
      duckAction: 'excitedly demonstrates features'
    },
    
    {
      name: 'Feature Showcase',
      frames: { start: 720, end: 1800 },
      narration: 'Watch as Claude Code provides instant code review, generates tests, optimizes performance, and much more!',
      duckAction: 'guides through each feature with enthusiasm'
    },
    
    {
      name: 'Conclusion',
      frames: { start: 1800, end: 2000 },
      narration: 'With Claude Code as your debugging duck companion, you\\'ll write better code faster. Happy coding!',
      duckAction: 'celebratory dance with Sarah'
    }
  ]
};