import React from 'react';
import lodashEscape from 'lodash/escape';

const CodeBlock = ({ language, code, intro }) => (
  <div>
    {intro && intro !== '' && (
      <div className="prose prose-primary" dangerouslySetInnerHTML={{ __html: intro.trim() }} />
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

export default CodeBlock;
