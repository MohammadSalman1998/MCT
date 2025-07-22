import React from 'react';
import { FaTools, FaNetworkWired, FaCog, FaServer, FaChartLine } from 'react-icons/fa';
import { MdSupport } from 'react-icons/md';

export const ToolsDuotone = props => <FaTools {...props} style={{ color: '#f59e42' }} />; // Orange
export const NetworkWiredDuotone = props => <FaNetworkWired {...props} style={{ color: '#2563eb' }} />; // Blue
export const CogDuotone = props => <FaCog {...props} style={{ color: '#374151' }} />; // Dark Gray
export const SupportDuotone = props => <MdSupport {...props} style={{ color: '#10b981' }} />; // Green
export const ServerDuotone = props => <FaServer {...props} style={{ color: '#6b7280' }} />; // Gray
export const ChartLineDuotone = props => <FaChartLine {...props} style={{ color: '#f43f5e' }} />; // Rose
