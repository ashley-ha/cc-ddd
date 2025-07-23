import React from 'react';
import {
  AbsoluteFill,
  useCurrentFrame,
  interpolate,
  Sequence,
  Video,
  staticFile,
  useVideoConfig,
  spring,
} from 'remotion';
import {Programmer} from './Programmer';
import {CodingEnvironment} from './CodingEnvironment';

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
    duckAdvice: "I can spot performance issues and suggest optimizations!",
    timing: { start: 1260, duration: 210 }
  }
];

const TipCard: React.FC<{tip: typeof claudeCodeTips[0], visible: boolean}> = ({tip, visible}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  
  const opacity = visible ? spring({
    frame: frame - tip.timing.start,
    fps,
    from: 0,
    to: 1,
    config: { damping: 200 }
  }) : 0;
  
  const translateY = visible ? spring({
    frame: frame - tip.timing.start,
    fps,
    from: 50,
    to: 0,
    config: { damping: 200 }
  }) : 50;
  
  return (
    <div
      style={{
        position: 'absolute',
        top: 150,
        right: 100,
        width: 500,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 20,
        padding: 30,
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
        border: '3px solid #3498db',
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
    >
      <h3
        style={{
          color: '#2c3e50',
          fontSize: 28,
          marginBottom: 15,
          fontWeight: 'bold',
        }}
      >
        💡 {tip.title}
      </h3>
      
      <p
        style={{
          color: '#34495e',
          fontSize: 18,
          marginBottom: 20,
          lineHeight: 1.5,
        }}
      >
        {tip.description}
      </p>
      
      <div
        style={{
          backgroundColor: '#f8f9fa',
          padding: 20,
          borderRadius: 12,
          borderLeft: '5px solid #3498db',
        }}
      >
        <div style={{display: 'flex', alignItems: 'flex-start', gap: 15}}>
          <span style={{fontSize: 24}}>🦆</span>
          <p
            style={{
              color: '#2c3e50',
              fontSize: 16,
              margin: 0,
              fontStyle: 'italic',
              lineHeight: 1.4,
            }}
          >
            {tip.duckAdvice}
          </p>
        </div>
      </div>
    </div>
  );
};

export const FinalComposition: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  
  // Determine current tip based on frame
  const getCurrentTip = () => {
    return claudeCodeTips.find(tip => 
      frame >= tip.timing.start && 
      frame < tip.timing.start + tip.timing.duration
    );
  };
  
  const currentTip = getCurrentTip();
  
  return (
    <AbsoluteFill style={{backgroundColor: '#1a1a1a'}}>
      
      {/* Scene 1: Introduction with Manim Duck */}
      <Sequence from={0} durationInFrames={180}>
        <AbsoluteFill
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 48,
            color: 'white',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          }}
        >
          <div>
            <h1 style={{
              marginBottom: 30, 
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              fontSize: 64
            }}>
              🦆 Debugging Duck Demo
            </h1>
            <p style={{
              fontSize: 28, 
              color: '#f8f9fa',
              textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
            }}>
              How Claude Code can 10x your engineering skills
            </p>
          </div>
          
          {/* Manim Duck Introduction Video */}
          <div
            style={{
              position: 'absolute',
              bottom: 50,
              right: 100,
              width: 400,
              height: 300,
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
          >
            <Video
              src={staticFile('manim/DuckIntroduction.mp4')}
              startFrom={0}
              endAt={180}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </AbsoluteFill>
      </Sequence>
      
      {/* Scene 2: Meet the programmer */}
      <Sequence from={180} durationInFrames={240}>
        <AbsoluteFill style={{backgroundColor: '#2c3e50'}}>
          <div
            style={{
              position: 'absolute',
              left: '10%',
              top: '20%',
              transform: 'scale(2)',
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
              fontSize: 36,
              maxWidth: 500,
            }}
          >
            <h2 style={{color: '#e74c3c', marginBottom: 25, fontSize: 42}}>
              Meet Sarah 👩‍💻
            </h2>
            <p style={{fontSize: 24, lineHeight: 1.4, marginBottom: 25}}>
              A talented developer working on a React project...
            </p>
            <p style={{fontSize: 20, color: '#bdc3c7'}}>
              She knows her code works, but could it be better?
            </p>
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
              bottom: 80,
              right: 120,
              transform: 'scale(1.2)',
              zIndex: 10,
            }}
          >
            <Programmer mood="confused" />
          </div>
          
          {/* Thought bubble */}
          <div
            style={{
              position: 'absolute',
              bottom: 250,
              right: 50,
              backgroundColor: 'white',
              padding: 25,
              borderRadius: 25,
              fontSize: 18,
              color: '#2c3e50',
              maxWidth: 350,
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              border: '3px solid #e74c3c',
            }}
          >
            "This code works... but I know it could be optimized. How can I make it better?"
          </div>
        </AbsoluteFill>
      </Sequence>
      
      {/* Scene 4: Claude Code solution with Manim Duck */}
      <Sequence from={720} durationInFrames={180}>
        <AbsoluteFill>
          <CodingEnvironment showCode={true} showClaudeCode={true} />
          
          {/* Excited programmer */}
          <div
            style={{
              position: 'absolute',
              bottom: 80,
              right: 450,
              transform: 'scale(1.2)',
              zIndex: 10,
            }}
          >
            <Programmer mood="excited" />
          </div>
          
          {/* Manim Duck Animation */}
          <div
            style={{
              position: 'absolute',
              bottom: 50,
              right: 50,
              width: 350,
              height: 300,
              borderRadius: 20,
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
              backgroundColor: 'rgba(255,255,255,0.1)',
              zIndex: 15,
            }}
          >
            <Video
              src={staticFile('manim/DebuggingDuck.mp4')}
              startFrom={0}
              endAt={180}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>
        </AbsoluteFill>
      </Sequence>
      
      {/* Scene 5: Feature showcase with integrated tips */}
      <Sequence from={900} durationInFrames={900}>
        <AbsoluteFill style={{
          background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        }}>
          {/* Main content area */}
          <div
            style={{
              display: 'flex',
              height: '100%',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 60,
            }}
          >
            {/* Left side: Manim Duck Video */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: 500,
                  height: 400,
                  borderRadius: 25,
                  overflow: 'hidden',
                  boxShadow: '0 12px 48px rgba(0,0,0,0.3)',
                  backgroundColor: 'white',
                }}
              >
                <Video
                  src={staticFile('manim/DebuggingDuck.mp4')}
                  startFrom={frame - 900}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
              
              <h2
                style={{
                  color: 'white',
                  fontSize: 40,
                  marginTop: 30,
                  textAlign: 'center',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                }}
              >
                Claude Code Features
              </h2>
            </div>
            
            {/* Right side: Tip cards */}
            <div style={{flex: 1, position: 'relative', height: '100%'}}>
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
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
          }}
        >
          <div>
            <h1 style={{
              fontSize: 56, 
              marginBottom: 40,
              textShadow: '3px 3px 6px rgba(0,0,0,0.5)'
            }}>
              Happy Coding! 🚀
            </h1>
            <p style={{
              fontSize: 28, 
              marginBottom: 50,
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
              lineHeight: 1.4
            }}>
              With Claude Code as your debugging duck companion,<br />
              you'll write better code faster than ever!
            </p>
            
            {/* Celebrating characters */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 150,
              }}
            >
              <div style={{transform: 'scale(2)'}}>
                <Programmer mood="happy" />
              </div>
              
              {/* Final Manim Duck celebration */}
              <div
                style={{
                  width: 300,
                  height: 250,
                  borderRadius: 20,
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                }}
              >
                <Video
                  src={staticFile('manim/DebuggingDuck.mp4')}
                  startFrom={120} // Start from a celebratory part
                  endAt={200}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};