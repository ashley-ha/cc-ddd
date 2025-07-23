import React from 'react';
import {useCurrentFrame, spring, useVideoConfig} from 'remotion';

interface ProgrammerProps {
  mood?: 'happy' | 'confused' | 'focused' | 'excited';
}

export const Programmer: React.FC<ProgrammerProps> = ({mood = 'focused'}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  
  // Breathing animation
  const breathe = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    config: {
      damping: 200,
      stiffness: 100,
    },
  });
  
  // Blinking animation
  const blink = Math.sin(frame * 0.1) < -0.9 ? 0.1 : 1;
  
  const getMoodExpression = () => {
    switch (mood) {
      case 'happy':
        return {eyeHeight: 1, mouthCurve: 15};
      case 'confused':
        return {eyeHeight: 0.7, mouthCurve: -5};
      case 'excited':
        return {eyeHeight: 1.2, mouthCurve: 20};
      default:
        return {eyeHeight: 1, mouthCurve: 5};
    }
  };

  const expression = getMoodExpression();
  
  return (
    <div
      style={{
        position: 'relative',
        transform: `scale(${1 + breathe * 0.05})`,
      }}
    >
      {/* Hair */}
      <div
        style={{
          position: 'absolute',
          top: -40,
          left: -60,
          width: 120,
          height: 80,
          backgroundColor: '#FFD700',
          borderRadius: '50% 50% 40% 40%',
          transform: 'rotate(-5deg)',
        }}
      />
      
      {/* Face */}
      <div
        style={{
          width: 80,
          height: 90,
          backgroundColor: '#FDBCB4',
          borderRadius: '40% 40% 35% 35%',
          position: 'relative',
          border: '2px solid #E8A692',
        }}
      >
        {/* Eyes */}
        <div
          style={{
            position: 'absolute',
            top: 25,
            left: 15,
            width: 12,
            height: 12 * expression.eyeHeight * blink,
            backgroundColor: '#2C3E50',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 25,
            right: 15,
            width: 12,
            height: 12 * expression.eyeHeight * blink,
            backgroundColor: '#2C3E50',
            borderRadius: '50%',
          }}
        />
        
        {/* Nose */}
        <div
          style={{
            position: 'absolute',
            top: 40,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 4,
            height: 4,
            backgroundColor: '#E8A692',
            borderRadius: '50%',
          }}
        />
        
        {/* Mouth */}
        <div
          style={{
            position: 'absolute',
            top: 60,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 20,
            height: expression.mouthCurve > 0 ? 8 : 6,
            border: '2px solid #C0392B',
            borderTop: expression.mouthCurve > 0 ? 'none' : '2px solid #C0392B',
            borderBottom: expression.mouthCurve > 0 ? '2px solid #C0392B' : 'none',
            borderRadius: expression.mouthCurve > 0 ? '0 0 50px 50px' : '50px 50px 0 0',
          }}
        />
      </div>
      
      {/* Body */}
      <div
        style={{
          position: 'absolute',
          top: 85,
          left: -40,
          width: 160,
          height: 120,
          backgroundColor: '#3498DB',
          borderRadius: '20px 20px 10px 10px',
          border: '3px solid #2980B9',
        }}
      />
      
      {/* Arms */}
      <div
        style={{
          position: 'absolute',
          top: 100,
          left: -60,
          width: 50,
          height: 15,
          backgroundColor: '#FDBCB4',
          borderRadius: '10px',
          border: '2px solid #E8A692',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 100,
          right: -60,
          width: 50,
          height: 15,
          backgroundColor: '#FDBCB4',
          borderRadius: '10px',
          border: '2px solid #E8A692',
        }}
      />
    </div>
  );
};