import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  Sequence,
  Img,
  staticFile,
  useVideoConfig,
} from 'remotion';
import {Programmer} from './Programmer';
import {CodingEnvironment} from './CodingEnvironment';

// Import our script data
const claudeCodeTips = [
  {
    id: 'code-review',
    title: 'Instant Code Review',
    description: 'Get immediate feedback on your code quality and potential bugs.',
    duckAdvice: 'Quack! Ask me to review your code before committing!',
    timing: { start: 900, duration: 180 }
  },
  {
    id: 'debugging-help', 
    title: 'Smart Debugging',
    description: 'Claude Code analyzes error messages and suggests solutions.',
    duckAdvice: "Stuck on a bug? I'll help you debug it step by step!",
    timing: { start: 1080, duration: 180 }
  },
  {
    id: 'optimization',
    title: 'Performance Optimization', 
    description: 'Automatically identify and fix performance bottlenecks.',
    duckAdvice: 'I can spot performance issues and suggest optimizations!',
    timing: { start: 1260, duration: 210 }
  }
];

const DuckCharacter: React.FC<{mood?: string, scale?: number}> = ({mood = 'happy', scale = 1}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  
  // Bobbing animation
  const bob = Math.sin(frame * 0.1) * 5;
  
  return (
    <div
      style={{
        transform: `scale(${scale}) translateY(${bob}px)`,
        position: 'relative',
      }}
    >
      {/* Duck body */}
      <div
        style={{
          width: 60,
          height: 40,
          backgroundColor: '#FFD700',
          borderRadius: '50% 50% 40% 40%',
          position: 'relative',
          border: '2px solid #FFA500',
        }}
      />
      
      {/* Duck head */}
      <div
        style={{
          width: 40,
          height: 35,
          backgroundColor: '#FFD700',
          borderRadius: '50%',
          position: 'absolute',
          top: -20,
          left: 10,
          border: '2px solid #FFA500',
        }}
      />
      
      {/* Beak */}
      <div
        style={{
          width: 0,
          height: 0,
          borderLeft: '8px solid transparent',
          borderRight: '8px solid transparent',
          borderTop: '12px solid #FF8C00',
          position: 'absolute',
          top: -10,
          left: 45,
          transform: 'rotate(90deg)',
        }}
      />
      
      {/* Eye */}
      <div
        style={{
          width: 6,
          height: 6,
          backgroundColor: '#000',
          borderRadius: '50%',
          position: 'absolute',
          top: -15,
          left: 25,
        }}
      />
      
      {/* Wing */}
      <div
        style={{
          width: 25,
          height: 20,
          backgroundColor: '#DAA520',
          borderRadius: '50%',
          position: 'absolute',
          top: 5,
          left: 30,
          border: '1px solid #B8860B',
        }}
      />
    </div>
  );
};

const TipCard: React.FC<{tip: typeof claudeCodeTips[0], visible: boolean}> = ({tip, visible}) => {
  const frame = useCurrentFrame();
  
  const opacity = visible ? 1 : 0;
  const translateY = visible ? 0 : 20;
  
  return (
    <div
      style={{
        position: 'absolute',
        top: 100,
        left: 50,
        width: 400,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 15,
        padding: 20,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        border: '2px solid #3498db',
        opacity,
        transform: `translateY(${translateY}px)`,
        transition: 'all 0.3s ease',
      }}
    >
      <h3
        style={{
          color: '#2c3e50',
          fontSize: 20,
          marginBottom: 10,
          fontWeight: 'bold',
        }}
      >
        💡 {tip.title}
      </h3>
      
      <p
        style={{
          color: '#34495e',
          fontSize: 14,
          marginBottom: 15,
          lineHeight: 1.4,
        }}
      >
        {tip.description}
      </p>
      
      <div
        style={{
          backgroundColor: '#f8f9fa',
          padding: 15,
          borderRadius: 8,
          borderLeft: '4px solid #3498db',
        }}
      >
        <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
          <span style={{fontSize: 16}}>🦆</span>
          <p
            style={{
              color: '#2c3e50',
              fontSize: 13,
              margin: 0,
              fontStyle: 'italic',
            }}
          >
            {tip.duckAdvice}
          </p>
        </div>
      </div>
    </div>
  );
};

export const EnhancedComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  
  // Determine current scene based on frame
  const getCurrentTip = () => {
    return claudeCodeTips.find(tip => 
      frame >= tip.timing.start && 
      frame < tip.timing.start + tip.timing.duration
    );
  };
  
  const currentTip = getCurrentTip();
  
  return (
    <AbsoluteFill style={{backgroundColor: '#1a1a1a'}}>
      {/* Scene 1: Introduction */}
      <Sequence from={0} durationInFrames={180}>
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 48,
            color: 'white',
            textAlign: 'center',
          }}
        >
          <div>
            <h1 style={{marginBottom: 30, color: '#3498db'}}>
              🦆 Debugging Duck Demo
            </h1>
            <p style={{fontSize: 24, color: '#bdc3c7'}}>
              How Claude Code can 10x your engineering skills
            </p>
          </div>
          
          {/* Animated duck introduction */}
          <div
            style={{
              position: 'absolute',
              bottom: 100,
              right: 100,
              transform: `scale(1.5) translateX(${interpolate(frame, [60, 120], [200, 0])}px)`,
            }}
          >
            <DuckCharacter mood="excited" />
          </div>
        </AbsoluteFill>
      </Sequence>
      
      {/* Scene 2: Meet the programmer */}
      <Sequence from={180} durationInFrames={240}>
        <AbsoluteFill style={{backgroundColor: '#2c3e50'}}>
          <div
            style={{
              position: 'absolute',
              left: '15%',
              top: '25%',
              transform: 'scale(1.8)',
            }}
          >
            <Programmer mood="focused" />
          </div>
          
          <div
            style={{
              position: 'absolute',
              right: 80,
              top: 80,
              color: 'white',
              fontSize: 32,
              maxWidth: 450,
            }}
          >
            <h2 style={{color: '#e74c3c', marginBottom: 20}}>
              Meet Sarah 👩‍💻
            </h2>
            <p style={{fontSize: 22, lineHeight: 1.4, marginBottom: 20}}>
              A talented developer working on a React project...
            </p>
            <p style={{fontSize: 18, color: '#bdc3c7'}}>
              She knows her code works, but could it be better?
            </p>
          </div>
          
          {/* Duck companion */}
          <div
            style={{
              position: 'absolute',
              bottom: 50,
              left: 50,
            }}
          >
            <DuckCharacter mood="thoughtful" scale={0.8} />
          </div>
        </AbsoluteFill>
      </Sequence>
      
      {/* Scene 3: Problem identification */}
      <Sequence from={420} durationInFrames={300}>
        <AbsoluteFill>
          <CodingEnvironment showCode={true} showClaudeCode={false} />
          
          {/* Programmer looking confused */}
          <div
            style={{
              position: 'absolute',
              bottom: 50,
              right: 100,
              transform: 'scale(0.9)',
              zIndex: 10,
            }}
          >
            <Programmer mood="confused" />
          </div>
          
          {/* Duck providing encouragement */}
          <div
            style={{
              position: 'absolute',
              bottom: 60,
              right: 250,
              zIndex: 10,
            }}
          >
            <DuckCharacter mood="encouraging" scale={0.7} />
          </div>
          
          {/* Thought bubble */}
          <div
            style={{
              position: 'absolute',
              bottom: 200,
              right: 20,
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 20,
              fontSize: 16,
              color: '#2c3e50',
              maxWidth: 280,
              boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
              border: '2px solid #e74c3c',
            }}
          >
            "This code works... but I know it could be optimized. How can I make it better?"
          </div>
        </AbsoluteFill>
      </Sequence>
      
      {/* Scene 4: Claude Code solution */}
      <Sequence from={720} durationInFrames={180}>
        <AbsoluteFill>
          <CodingEnvironment showCode={true} showClaudeCode={true} />
          
          {/* Excited programmer */}
          <div
            style={{
              position: 'absolute',
              bottom: 50,
              right: 100,
              transform: 'scale(0.9)',
              zIndex: 10,
            }}
          >
            <Programmer mood="excited" />
          </div>
          
          {/* Happy duck */}
          <div
            style={{
              position: 'absolute',
              bottom: 60,
              right: 250,
              zIndex: 10,
            }}
          >
            <DuckCharacter mood="happy" scale={0.7} />
          </div>
          
          {/* Success message */}
          <div
            style={{
              position: 'absolute',
              bottom: 200,
              right: 20,
              backgroundColor: '#e8f5e8',
              padding: 20,
              borderRadius: 20,
              fontSize: 16,
              color: '#27ae60',
              maxWidth: 280,
              boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
              border: '2px solid #27ae60',
            }}
          >
            "Wow! Claude Code found several optimization opportunities I missed!"
          </div>
        </AbsoluteFill>
      </Sequence>
      
      {/* Scene 5: Feature showcase with tips */}
      <Sequence from={900} durationInFrames={900}>
        <AbsoluteFill style={{backgroundColor: '#f8f9fa'}}>
          {/* Main content area */}
          <div
            style={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 50,
            }}
          >
            {/* Left side: Duck presenter */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <DuckCharacter mood="presenter" scale={2} />
              <h2
                style={{
                  color: '#2c3e50',
                  fontSize: 32,
                  marginTop: 40,
                  textAlign: 'center',
                }}
              >
                Claude Code Features
              </h2>
            </div>
            
            {/* Right side: Tip cards */}
            <div style={{flex: 2, position: 'relative', height: '100%'}}>
              {claudeCodeTips.map((tip, index) => (
                <TipCard
                  key={tip.id}
                  tip={tip}
                  visible={currentTip?.id === tip.id}
                />
              ))}
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>
      
      {/* Scene 6: Final celebration */}
      <Sequence from={1800} durationInFrames={200}>
        <AbsoluteFill
          style={{
            backgroundColor: '#3498db',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <div>
            <h1 style={{fontSize: 48, marginBottom: 30}}>
              Happy Coding! 🚀
            </h1>
            <p style={{fontSize: 24, marginBottom: 40}}>
              With Claude Code as your debugging duck companion,<br />
              you'll write better code faster!
            </p>
            
            {/* Celebrating characters */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 100,
              }}
            >
              <div style={{transform: 'scale(1.5)'}}>
                <Programmer mood="happy" />
              </div>
              
              <div style={{transform: 'scale(2)'}}>
                <DuckCharacter mood="celebrating" />
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};