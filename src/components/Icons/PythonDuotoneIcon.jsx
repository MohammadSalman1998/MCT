import React from 'react';
import { SiPython } from 'react-icons/si';

/**
 * PythonDuotoneIcon renders the original SiPython icon but overlays a duotone (yellow/blue) effect using SVG filters.
 * This preserves the original shape but colors the top half yellow and the bottom half blue, matching the official Python logo.
 */
const PythonDuotoneIcon = ({ size = 40, style = {}, ...props }) => (
  <span style={{ position: 'relative', display: 'inline-block', width: size, height: size, ...style }}>
    {/* Bottom half (blue) */}
    <SiPython
      size={size}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        color: '#3776AB',
        clipPath: `inset(50% 0 0 0)` // bottom half
      }}
      {...props}
    />
    {/* Top half (yellow) */}
    <SiPython
      size={size}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        color: '#FFD43B',
        clipPath: `inset(0 0 50% 0)` // top half
      }}
      {...props}
    />
  </span>
);

export default PythonDuotoneIcon;
