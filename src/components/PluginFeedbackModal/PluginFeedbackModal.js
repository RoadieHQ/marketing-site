import React, { useState } from 'react';
import classnames from 'classnames';

const PluginFeedbackModal = ({ isVisible, onClose, pluginSlug, pluginName }) => {
  const [stage, setStage] = useState('initial'); // 'initial', 'feedback', 'submitting', 'success'
  const [feedbackText, setFeedbackText] = useState('');

  const handleYes = async () => {
    setStage('submitting');
    try {
      await fetch('/.netlify/functions/pluginFeedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          helpful: true,
          pluginSlug,
          pluginName,
        }),
      });
      setStage('success');
      setTimeout(() => {
        onClose();
        setStage('initial');
      }, 2000);
    } catch (error) {
      console.error('Failed to send feedback:', error);
      setStage('initial');
    }
  };

  const handleNo = () => {
    setStage('feedback');
  };

  const handleSubmitFeedback = async (e) => {
    e.preventDefault();
    setStage('submitting');
    try {
      await fetch('/.netlify/functions/pluginFeedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          helpful: false,
          pluginSlug,
          pluginName,
          feedback: feedbackText || 'No details provided',
        }),
      });
      setStage('success');
      setTimeout(() => {
        onClose();
        setStage('initial');
        setFeedbackText('');
      }, 2000);
    } catch (error) {
      console.error('Failed to send feedback:', error);
      setStage('initial');
    }
  };

  const handleDismiss = async () => {
    // If user dismisses while on feedback stage, send notification
    if (stage === 'feedback' && !feedbackText) {
      try {
        await fetch('/.netlify/functions/pluginFeedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            helpful: false,
            pluginSlug,
            pluginName,
            feedback: 'User dismissed without providing details',
          }),
        });
      } catch (error) {
        console.error('Failed to send feedback:', error);
      }
    }
    onClose();
    setStage('initial');
    setFeedbackText('');
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 pointer-events-none px-4 pb-4">
      <div className="max-w-7xl mx-auto">
        <div
          className={classnames(
            'pointer-events-auto max-w-md transition-transform duration-300 ease-out',
            'bg-gray-900 shadow-2xl rounded border border-gray-700',
            'mx-auto md:mx-0 md:mr-auto md:ml-2.5',
            {
              'translate-y-0': isVisible,
              'translate-y-full': !isVisible,
            }
          )}
        >
          {stage === 'initial' && (
            <div className="px-3 py-1.5 flex items-center gap-2">
              <span className="text-xs text-gray-300 flex-1">Did these instructions help?</span>
              <button
                onClick={handleYes}
                className="bg-green-600 hover:bg-green-500 text-white p-1 rounded transition-colors duration-200 flex items-center justify-center"
                aria-label="Yes, helpful"
                title="Yes, helpful"
              >
                <span className="text-base">👍</span>
              </button>
              <button
                onClick={handleNo}
                className="bg-red-600 hover:bg-red-500 text-white p-1 rounded transition-colors duration-200 flex items-center justify-center"
                aria-label="No, not helpful"
                title="Not helpful"
              >
                <span className="text-base">👎</span>
              </button>
              <button
                onClick={handleDismiss}
                className="text-gray-400 hover:text-gray-300 p-0.5"
                aria-label="Close"
              >
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}

          {stage === 'feedback' && (
            <div className="p-3">
              <form onSubmit={handleSubmitFeedback}>
                <textarea
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Tell us what was unclear or missing..."
                  className="w-full px-2 py-1.5 bg-gray-800 border border-gray-700 rounded text-gray-200 placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none text-xs"
                  rows="3"
                />

                <div className="flex gap-2 mt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-medium py-1.5 px-3 rounded transition-colors duration-200 text-xs"
                  >
                    Send feedback
                  </button>
                  <button
                    type="button"
                    onClick={handleDismiss}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-gray-200 font-medium py-1.5 px-3 rounded transition-colors duration-200 text-xs"
                  >
                    Skip
                  </button>
                </div>
              </form>
            </div>
          )}

          {stage === 'submitting' && (
            <div className="px-3 py-1.5 text-center">
              <div className="inline-block animate-spin rounded-full h-3 w-3 border-2 border-gray-600 border-t-primary-500 mr-1.5"></div>
              <span className="text-xs text-gray-300">Sending...</span>
            </div>
          )}

          {stage === 'success' && (
            <div className="px-3 py-1.5 text-center">
              <span className="text-xs text-gray-300">Thanks for your feedback!</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PluginFeedbackModal;
