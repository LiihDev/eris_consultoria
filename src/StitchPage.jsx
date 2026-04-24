import React, { useState, useEffect } from 'react';

export default function StitchPage({ htmlFile, title }) {
  const [html, setHtml] = useState('');

  useEffect(() => {
    fetch(htmlFile)
      .then(r => r.text())
      .then(content => {
        // Extract just the body content from the full HTML
        const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        setHtml(bodyMatch ? bodyMatch[1] : content);
      });
  }, [htmlFile]);

  useEffect(() => {
    document.title = title + ' | ÉRIS Consultoria';
  }, [title]);

  return (
    <div
      style={{ minHeight: '100vh' }}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
