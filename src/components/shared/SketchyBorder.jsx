// FRAMER-READY

const SketchyBorder = () => (
  <svg style={{ display: 'none' }}>
    <defs>
      <filter id="sketchy">
        <feTurbulence
          type="turbulence"
          baseFrequency="0.02"
          numOctaves="3"
          result="noise"
          seed="2"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="noise"
          scale="3"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </defs>
  </svg>
);

export default SketchyBorder;
