// src/stories/theme/Colors.stories.tsx

import React from 'react';
import { lightTheme, darkTheme } from '../../theme/colors';

export default {
  title: 'Design Tokens/Colors',
};

const ColorBlock = ({ name, color }: { name: string; color: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 8 }}>
    <div
      style={{
        width: 48,
        height: 24,
        backgroundColor: color,
        border: '1px solid #ccc',
        marginRight: 12,
      }}
    />
    <code style={{ fontSize: 14 }}>{name}</code>
  </div>
);

const renderColorGroup = (theme: Record<string, any>, groupName: string) => {
  const group = theme[groupName];
  if (!group) return null;

  return (
    <>
      <h3>{groupName}</h3>
      {Object.entries(group).map(([key, value]) => (
        <ColorBlock key={key} name={`${groupName}.${key}`} color={value} />
      ))}
      <hr />
    </>
  );
};

export const LightTheme = () => (
  <div style={{ padding: 20 }}>
    <h2>Light Theme Colors</h2>
    {renderColorGroup(lightTheme, 'primary')}
    {renderColorGroup(lightTheme, 'secondary')}
    {renderColorGroup(lightTheme, 'success')}
    {renderColorGroup(lightTheme, 'warning')}
    {renderColorGroup(lightTheme, 'error')}
    {renderColorGroup(lightTheme, 'neutral')}
    {renderColorGroup(lightTheme, 'background')}
    {renderColorGroup(lightTheme, 'text')}
  </div>
);

export const DarkTheme = () => (
  <div style={{ padding: 20, backgroundColor: '#111827', color: '#fff' }}>
    <h2>Dark Theme Colors</h2>
    {renderColorGroup(darkTheme, 'primary')}
    {renderColorGroup(darkTheme, 'secondary')}
    {renderColorGroup(darkTheme, 'success')}
    {renderColorGroup(darkTheme, 'warning')}
    {renderColorGroup(darkTheme, 'error')}
    {renderColorGroup(darkTheme, 'neutral')}
    {renderColorGroup(darkTheme, 'background')}
    {renderColorGroup(darkTheme, 'text')}
  </div>
);
