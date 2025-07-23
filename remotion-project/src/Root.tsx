import React from 'react';
import {Composition} from 'remotion';
import {MyComposition} from './Composition';
import {EnhancedComposition} from './EnhancedComposition';
import {FinalComposition} from './FinalComposition';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComposition"
        component={MyComposition}
        durationInFrames={900} // 30 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="DebuggingDuckDemo"
        component={EnhancedComposition}
        durationInFrames={2000} // ~67 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="FinalDemo"
        component={FinalComposition}
        durationInFrames={2000} // ~67 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
    </>
  );
};