import React from 'react';
import lodashEscape from 'lodash/escape';
import kebabCase from 'lodash/kebabCase';

const CodeBlock = ({ language, code, intro }) => (
  <div>
    {intro && intro !== '' && (
      <div className="prose-xl prose-primary" dangerouslySetInnerHTML={{ __html: intro.trim() }} />
    )}

    {code && code !== '' && (
      <div className="gatsby-highlight" data-language={language}>
        <pre className={`language-${language}`}>
          <code
            className={`language-${language}`}
            dangerouslySetInnerHTML={{
              __html: lodashEscape(code.trim()),
            }}
          />
        </pre>
      </div>
    )}
  </div>
);

CodeBlock.generateKey = ({ code, intro }) => {
  if (intro && intro !== '') {
    return `key-${kebabCase(intro)}`;
  }

  return `key-${kebabCase(code)}`;
};

export default CodeBlock;
