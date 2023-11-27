import React from 'react';

const ScorecardsCard = () => {
  return (
    <div className='Card shadow pt-5 pr-5 pb-5 pl-5'>
      <span className='Text size-3 weight-2 string mb-4'>Scorecards</span>
      
      <div className='Flex column gap-2 ai-stretch'>
        <div className='Scorecard'>
          <div>
            <div className='ScorecardMeter awful'>
              <div className='ScorecardMeterMask'>
                <span className='Text size-4 weight-1 string'>14%</span>
              </div>
            </div>
          </div>
          <div className='fg-1'>
            <span className='Text size-3 weight-2 string mb-3'>Backstage Component best practices</span>
            <div className='Grid columns-4'>
              <div>
                <span className='Text size-2 weight-2 string mb-1'>Owner</span>
                <span className='Text size-2 lowContrast'>Engineering</span>
              </div>
              <div>
                <span className='Text size-2 weight-2 string mb-1'>Checks</span>
                <span className='Text size-2 lowContrast'>4</span>
              </div>
              <div>
                <span className='Text size-2 weight-2 string mb-1'>Entities</span>
                <span className='Text size-2 lowContrast'>61</span>
              </div>
              <div>
                <span className='Text size-2 weight-2 string mb-1'>Failing</span>
                <span className='Text size-2 lowContrast'>57</span>
              </div>
            </div>
          </div>
        </div>

        <div className='Scorecard'>
          <div>
            <div className='ScorecardMeter bad'>
              <div className='ScorecardMeterMask'>
                <span className='Text size-4 weight-1 string'>24%</span>
              </div>
            </div>
          </div>
          <div className='fg-1'>
            <span className='Text size-3 weight-2 string mb-3'>Security compliance level 1</span>
            <div className='Grid columns-4'>
              <div>
                <span className='Text size-2 weight-2 string mb-1'>Owner</span>
                <span className='Text size-2 lowContrast'>Engineering</span>
              </div>
              <div>
                <span className='Text size-2 weight-2 string mb-1'>Checks</span>
                <span className='Text size-2 lowContrast'>5</span>
              </div>
              <div>
                <span className='Text size-2 weight-2 string mb-1'>Entities</span>
                <span className='Text size-2 lowContrast'>26</span>
              </div>
              <div>
                <span className='Text size-2 weight-2 string mb-1'>Failing</span>
                <span className='Text size-2 lowContrast'>3</span>
              </div>
            </div>
          </div>
        </div>

        <div className='Scorecard'>
          <div>
            <div className='ScorecardMeter decent'>
              <div className='ScorecardMeterMask'>
                <span className='Text size-4 weight-1 string'>45%</span>
              </div>
            </div>
          </div>
          <div className='fg-1'>
            <span className='Text size-3 weight-2 string mb-3'>Dependabot configuration & security</span>
            <div className='Grid columns-4'>
              <div>
                <span className='Text size-2 weight-2 string mb-1'>Owner</span>
                <span className='Text size-2 lowContrast'>Engineering</span>
              </div>
              <div>
                <span className='Text size-2 weight-2 string mb-1'>Checks</span>
                <span className='Text size-2 lowContrast'>2</span>
              </div>
              <div>
                <span className='Text size-2 weight-2 string mb-1'>Entities</span>
                <span className='Text size-2 lowContrast'>29</span>
              </div>
              <div>
                <span className='Text size-2 weight-2 string mb-1'>Failing</span>
                <span className='Text size-2 lowContrast'>16</span>
              </div>
            </div>
          </div>
        </div>

        <div className='Scorecard'>
          <div>
            <div className='ScorecardMeter awesome'>
              <div className='ScorecardMeterMask'>
                <span className='Text size-4 weight-1 string'>94%</span>
              </div>
            </div>
          </div>
          <div className='fg-1'>
            <span className='Text size-3 weight-2 string mb-3'>Basic PagerDuty usage</span>
            <div className='Grid columns-4'>
              <div>
                <span className='Text size-2 weight-2 string mb-1'>Owner</span>
                <span className='Text size-2 lowContrast'>Engineering</span>
              </div>
              <div>
                <span className='Text size-2 weight-2 string mb-1'>Checks</span>
                <span className='Text size-2 lowContrast'>9</span>
              </div>
              <div>
                <span className='Text size-2 weight-2 string mb-1'>Entities</span>
                <span className='Text size-2 lowContrast'>2</span>
              </div>
              <div>
                <span className='Text size-2 weight-2 string mb-1'>Failing</span>
                <span className='Text size-2 lowContrast'>1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScorecardsCard;
