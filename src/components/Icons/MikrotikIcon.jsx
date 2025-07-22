import React from 'react';

const MikrotikIcon = ({ width = 28, height = 28, color, className, style, ...props }) => {
  // استخدم نظام viewBox ثابت 100x100
  const pad = 2; // padding أصغر ما يمكن
  const innerW = 100 - pad * 2;
  const innerH = 100 - pad * 2;
  // حجم الخط أصغر
  const fontSize = 18;
  // موضع النص أقرب أسفل viewBox
  const textY = pad + innerH * 0.99;
  // مسارات الشعار أصغر
  const path1 = `M${pad + innerW*0.23} ${pad + innerH*0.22} Q${pad + innerW*0.43} ${pad} ${pad + innerW*0.63} ${pad + innerH*0.22}`;
  const path2 = `M${pad + innerW*0.52} ${pad + innerH*0.08} Q${pad + innerW*0.59} ${pad} ${pad + innerW*0.73} ${pad + innerH*0.18}`;
  // مرر color إلى style مباشرة إذا تم تحديده
  const mergedStyle = color ? { ...style, color } : style;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={mergedStyle}
      {...props}
    >
      <g>
        <text
  x="50"
  y="60"
  textAnchor="middle"
  fontFamily="Arial, Helvetica, sans-serif"
  fontSize="28"
  fill="#3C3C3B"
  fontWeight="bold"
  letterSpacing="1"
  stroke="#fff"
  strokeWidth="2"
  paintOrder="stroke"
>MikroTik</text>
        <path d={path1} stroke="currentColor" strokeWidth={3} fill="none" />
        <path d={path2} stroke="currentColor" strokeWidth={1.5} fill="none" />
      </g>
    </svg>
  );
};

export default MikrotikIcon;
