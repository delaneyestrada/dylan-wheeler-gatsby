import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function AboutSection({ sectionContent, fontSize }) {
  return (
    <div style={{ fontSize: `${fontSize}px` }}>
      <ReactMarkdown children={sectionContent} plugins={[remarkGfm]} />
    </div>
  );
}
