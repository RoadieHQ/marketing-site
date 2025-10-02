const SLACK_WEBHOOK_URL_PLUGIN_FEEDBACK = process.env.SLACK_WEBHOOK_URL_PLUGIN_FEEDBACK;

const pluginFeedback = async (req) => {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  // Check if Slack webhook URL is configured
  if (!SLACK_WEBHOOK_URL_PLUGIN_FEEDBACK) {
    console.error('SLACK_WEBHOOK_URL_PLUGIN_FEEDBACK is not configured');
    return new Response(
      JSON.stringify({ error: 'Slack integration not configured' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }

  try {
    const body = await req.json();
    const { helpful, pluginSlug, pluginName, feedback } = body;

    // Build the page URL
    const pageUrl = `https://roadie.io/backstage/plugins/${pluginSlug}/`;

    // Construct the Slack message
    let slackMessage;

    if (helpful) {
      slackMessage = {
        text: `✅ Positive Plugin Feedback for <${pageUrl}|${pluginName}>`,
      };
    } else {
      slackMessage = {
        text: '⚠️ Plugin Feedback Issue',
        blocks: [
          {
            type: 'section',
            text: {
              type: 'mrkdwn',
              text: `A reader reported an issue with the <${pageUrl}|${pluginName}> installation instructions.`,
            },
          },
        ],
      };

      // Add feedback text if provided
      if (feedback && feedback !== 'No details provided' && feedback !== 'User dismissed without providing details') {
        slackMessage.blocks.push({
          type: 'section',
          text: {
            type: 'mrkdwn',
            text: `*Feedback:*\n${feedback}`,
          },
        });
      } else if (feedback === 'User dismissed without providing details') {
        slackMessage.blocks.push({
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: '_User closed the feedback form without providing details_',
            },
          ],
        });
      }
    }

    // Send message to Slack
    const slackResponse = await fetch(SLACK_WEBHOOK_URL_PLUGIN_FEEDBACK, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(slackMessage),
    });

    if (!slackResponse.ok) {
      throw new Error(`Slack API responded with status ${slackResponse.status}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Feedback sent successfully' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error sending feedback to Slack:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to send feedback', details: error.message }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      }
    );
  }
};

export default pluginFeedback;
