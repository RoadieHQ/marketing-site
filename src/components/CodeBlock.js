import React from 'react';
import { createUseStyles } from 'react-jss';
import lodashEscape from 'lodash/escape';

const useStyles = createUseStyles((theme) => ({
  intro: theme.preMadeStyles.content,
}));


const CodeBlock = ({ language, code, intro }) => {
  const classes = useStyles();

  return (
    <div>
      {intro && intro !== '' && (
        <p className={classes.intro} dangerouslySetInnerHTML={{ __html: intro.trim() }} />
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
};

export default CodeBlock;
