import React from 'react';
import {AbsoluteFill, useCurrentFrame, interpolate, Sequence, staticFile} from 'remotion';
import {Programmer} from './Programmer';
import {CodingEnvironment} from './CodingEnvironment';

export const MyComposition: React.FC = () => {
  const frame = useCurrentFrame();
  
  // Scene transitions
  const sceneProgress = interpolate(frame, [0, 900], [0, 4]);
  const currentScene = Math.floor(sceneProgress);
  
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
        </AbsoluteFill>
      </Sequence>
      
      {/* Scene 2: Meet the programmer */}
      <Sequence from={180} durationInFrames={240}>
        <AbsoluteFill style={{backgroundColor: '#2c3e50'}}>
          <div
            style={{
              position: 'absolute',
              left: '20%',
              top: '30%',
              transform: 'scale(2)',
            }}
          >
            <Programmer mood="focused" />
          </div>
          
          <div
            style={{
              position: 'absolute',
              right: 100,
              top: 100,
              color: 'white',
              fontSize: 36,
              maxWidth: 400,
            }}
          >
            <h2 style={{color: '#e74c3c', marginBottom: 20}}>
              Meet Sarah
            </h2>
            <p style={{fontSize: 24, lineHeight: 1.4}}>
              A talented developer working on a React project...
            </p>
          </div>
        </AbsoluteFill>
      </Sequence>
      
      {/* Scene 3: Coding environment */}
      <Sequence from={420} durationInFrames={300}>
        <AbsoluteFill>
          <CodingEnvironment showCode={true} showClaudeCode={false} />
          
          {/* Programmer in corner */}
          <div
            style={{
              position: 'absolute',
              bottom: 50,
              right: 50,
              transform: 'scale(0.8)',
              zIndex: 10,
            }}
          >
            <Programmer mood="confused" />
          </div>
          
          {/* Thought bubble */}
          <div
            style={{
              position: 'absolute',
              bottom: 180,
              right: 20,
              backgroundColor: 'white',
              padding: 15,
              borderRadius: 15,
              fontSize: 16,
              color: '#2c3e50',
              maxWidth: 200,
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            }}
          >
            "This code could be optimized... but how?"
          </div>
        </AbsoluteFill>
      </Sequence>
      
      {/* Scene 4: Claude Code appears */}
      <Sequence from={720} durationInFrames={180}>
        <AbsoluteFill>
          <CodingEnvironment showCode={true} showClaudeCode={true} />
          
          {/* Programmer excited */}
          <div
            style={{
              position: 'absolute',
              bottom: 50,
              right: 50,
              transform: 'scale(0.8)',
              zIndex: 10,
            }}
          >
            <Programmer mood="excited" />
          </div>
          
          {/* Excited thought bubble */}
          <div
            style={{
              position: 'absolute',
              bottom: 180,
              right: 20,
              backgroundColor: '#e8f5e8',
              padding: 15,
              borderRadius: 15,
              fontSize: 16,
              color: '#27ae60',
              maxWidth: 200,
              boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
              border: '2px solid #27ae60',
            }}
          >
            "Amazing! Claude Code has so many helpful suggestions!"
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};