import React from 'react';
import {useCurrentFrame, interpolate, Easing} from 'remotion';

interface CodingEnvironmentProps {
  showCode?: boolean;
  showClaudeCode?: boolean;
}

export const CodingEnvironment: React.FC<CodingEnvironmentProps> = ({
  showCode = true,
  showClaudeCode = false,
}) => {
  const frame = useCurrentFrame();
  
  // Typing animation
  const codeProgress = interpolate(
    frame,
    [0, 180], // 6 seconds at 30fps
    [0, 1],
    {
      easing: Easing.linear,
      extrapolateRight: 'clamp',
    }
  );
  
  const fullCode = `// Working on a React component
import React from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
};`;

  const displayedCode = fullCode.slice(0, Math.floor(fullCode.length * codeProgress));
  
  const claudeAdvice = [
    '💡 Consider using useCallback for the onClick handler',
    '🚀 You can use Claude Code to optimize this!',
    '✨ Try: /optimize-component',
    '📚 Add TypeScript types for better development',
  ];
  
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: '#1e1e1e',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Monaco, monospace',
      }}
    >
      {/* VSCode-like header */}
      <div
        style={{
          height: 40,
          backgroundColor: '#323233',
          borderBottom: '1px solid #464647',
          display: 'flex',
          alignItems: 'center',
          paddingLeft: 15,
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 8,
          }}
        >
          <div style={{width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ff5f57'}} />
          <div style={{width: 12, height: 12, borderRadius: '50%', backgroundColor: '#ffbd2e'}} />
          <div style={{width: 12, height: 12, borderRadius: '50%', backgroundColor: '#28ca42'}} />
        </div>
        <div
          style={{
            marginLeft: 20,
            color: '#cccccc',
            fontSize: 14,
          }}
        >
          MyComponent.tsx
        </div>
      </div>
      
      {/* Editor area */}
      <div
        style={{
          flex: 1,
          display: 'flex',
        }}
      >
        {/* Code editor */}
        <div
          style={{
            flex: 2,
            padding: 20,
            backgroundColor: '#1e1e1e',
            color: '#d4d4d4',
            fontSize: 16,
            lineHeight: 1.5,
            whiteSpace: 'pre-wrap',
            fontFamily: 'Monaco, Consolas, monospace',
          }}
        >
  {showCode && (
            <div>
              <div style={{color: '#6a9955'}}>// Working on a React component</div>
              <div style={{color: '#c586c0'}}>
                import <span style={{color: '#9cdcfe'}}>React</span> from <span style={{color: '#ce9178'}}>'react'</span>;
              </div>
              <br />
              <div>
                <span style={{color: '#c586c0'}}>const</span>{' '}
                <span style={{color: '#dcdcaa'}}>MyComponent</span>{' '}
                <span style={{color: '#d4d4d4'}}>=</span>{' '}
                <span style={{color: '#569cd6'}}>() =&gt; {'{'}</span>
              </div>
              <div style={{paddingLeft: 20}}>
                <span style={{color: '#c586c0'}}>const</span>{' '}
                <span style={{color: '#9cdcfe'}}>[count, setCount]</span>{' '}
                <span style={{color: '#d4d4d4'}}>=</span>{' '}
                <span style={{color: '#dcdcaa'}}>useState</span>
                <span style={{color: '#d4d4d4'}}>(</span>
                <span style={{color: '#b5cea8'}}>0</span>
                <span style={{color: '#d4d4d4'}}>);</span>
              </div>
              <br />
              <div style={{paddingLeft: 20}}>
                <span style={{color: '#c586c0'}}>return</span>{' '}
                <span style={{color: '#d4d4d4'}}>{'('}</span>
              </div>
              <div style={{paddingLeft: 40}}>
                <span style={{color: '#808080'}}>&lt;div&gt;</span>
              </div>
              <div style={{paddingLeft: 60}}>
                <span style={{color: '#808080'}}>&lt;h1&gt;</span>Counter: {'{'}<span style={{color: '#9cdcfe'}}>count</span>{'}'}<span style={{color: '#808080'}}>&lt;/h1&gt;</span>
              </div>
              {codeProgress > 0.7 && (
                <>
                  <div style={{paddingLeft: 60}}>
                    <span style={{color: '#808080'}}>&lt;button </span>
                    <span style={{color: '#92c5f7'}}>onClick</span>
                    <span style={{color: '#d4d4d4'}}>=&gt; setCount(count + 1)</span>
                    <span style={{color: '#808080'}}>&gt;</span>
                  </div>
                  <div style={{paddingLeft: 80}}>
                    <span style={{color: '#d4d4d4'}}>Increment</span>
                  </div>
                  <div style={{paddingLeft: 60}}>
                    <span style={{color: '#808080'}}>&lt;/button&gt;</span>
                  </div>
                </>
              )}
              <div style={{paddingLeft: 40}}>
                <span style={{color: '#808080'}}>&lt;/div&gt;</span>
              </div>
              <div style={{paddingLeft: 20}}>
                <span style={{color: '#d4d4d4'}}>);</span>
              </div>
              <div>
                <span style={{color: '#569cd6'}}>{'};'}</span>
              </div>
            </div>
          )}
          
          {/* Cursor */}
          {frame % 60 < 30 && (
            <span
              style={{
                backgroundColor: '#ffffff',
                width: 2,
                height: 20,
                display: 'inline-block',
                animation: 'blink 1s infinite',
              }}
            />
          )}
        </div>
        
        {/* Claude Code panel */}
        {showClaudeCode && (
          <div
            style={{
              flex: 1,
              backgroundColor: '#252526',
              borderLeft: '1px solid #464647',
              padding: 20,
              color: '#cccccc',
            }}
          >
            <div
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                marginBottom: 20,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
              }}
            >
              <div
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: '#007acc',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  color: 'white',
                }}
              >
                C
              </div>
              Claude Code
            </div>
            
            <div style={{fontSize: 14, lineHeight: 1.6}}>
              {claudeAdvice.map((advice, index) => {
                const shouldShow = interpolate(
                  frame,
                  [60 + index * 30, 90 + index * 30],
                  [0, 1],
                  {
                    extrapolateLeft: 'clamp',
                    extrapolateRight: 'clamp',
                  }
                );
                
                return shouldShow > 0 ? (
                  <div
                    key={index}
                    style={{
                      marginBottom: 15,
                      opacity: shouldShow,
                      transform: `translateY(${(1 - shouldShow) * 20}px)`,
                      padding: 10,
                      backgroundColor: '#3c3c3c',
                      borderRadius: 5,
                      borderLeft: '3px solid #007acc',
                    }}
                  >
                    {advice}
                  </div>
                ) : null;
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};