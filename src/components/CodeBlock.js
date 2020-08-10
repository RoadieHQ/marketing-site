import React from 'react';

const CodeBlock = ({ language, code, intro }) => {
  return (
    <div>
      {intro && intro !== '' && <p>{intro.trim()}</p>}

      {code && code !== '' && (
        <div className="gatsby-highlight" data-language={language}>
          <pre className={`language-${language}`}>
            <code
              className={`language-${language}`}
              dangerouslySetInnerHTML={{
                __html: code.trim(),
              }}
            />
          </pre>
        </div>
      )}
    </div>
  );
};

export default CodeBlock;
