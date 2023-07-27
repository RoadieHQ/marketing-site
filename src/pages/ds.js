import React from 'react';
import { SEO } from 'components';

const DS = () => (
  <>
    <SEO
      title={`DS | Roadie`}
      description="Design System"
    />
    <div className='Container'>
      <section className='Section size-3'>
        <div className='Flex column gap-5'>
          <div className='Flex row gap-5'>
            <button className='Button size-1 neutral'>
              <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              Add Field
            </button>
            <button className='Button size-2 neutral'>
              <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              Request a Demo
            </button>
            <button className='Button size-3 neutral'>
              <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              Request a Demo
            </button>
          </div>
          <div className='Flex row gap-5'>
            <button className='Button size-2 neutral'>Request a Demo</button>
            <button className='Button size-2 accent'>Request a Demo</button>
            <button className='Button size-2 green'>Request a Demo</button>
            <button className='Button size-2 red'>Request a Demo</button>
          </div>
        </div>
      </section>

      <section className='Section size-3'>
        <div className='Flex column gap-4'>
          <div className='Flex row gap-4'>
            <span className='Badge size-1 gray'>
              Coming Soon
            </span>
            <span className='Badge size-2 gray'>
              Coming Soon
            </span>
          </div>
          <div className='Flex row gap-4'>
            <span className='Badge size-2 gray'>
              Coming Soon
            </span>
            <span className='Badge size-2 indigo'>
              Owner
            </span>
            <span className='Badge size-2 green'>
              Approved
            </span>
            <span className='Badge size-2 yellow'>
              Pending
            </span>
            <span className='Badge size-2 red'>
              Declined
            </span>
          </div>
        </div>
      </section>

      <section className='Section size-3'>
        <img className='Image' src='https://roadie.io/static/team-in-road-4aa9b8d4321ef42d6f74abbe82d843f7.jpg' alt='Colm Tuite' />
      </section>

      <div className='Flex column gap-6'>  
        <div className='Separator' role='separator'></div>
        <div className='Separator size-1' role='separator'></div>
        <div className='Separator size-2' role='separator'></div>
        <div className='Separator vertical size-1' role='separator'></div>
        <div className='Separator vertical size-2' role='separator'></div>
      </div>

      <section className='Section size-3'>
        <div className='Flex row gap-6'>
          <div className='Avatar size-1'>
            <img src='https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_x96.jpg' alt='Colm Tuite' />
          </div>
          <div className='Avatar size-2'>
            <img src='https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_x96.jpg' alt='Colm Tuite' />
          </div>
          <div className='Avatar size-3'>
            <img src='https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_x96.jpg' alt='Colm Tuite' />
          </div>
          <div className='Avatar size-4'>
            <img src='https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_x96.jpg' alt='Colm Tuite' />
          </div>
        </div>
      </section>

      <section className='Section size-3'>
        <div className='Grid columns-2 gap-6 ai-start'>
          <div className='Flex column gap-1'>
            <div className='Flex ai-center' style={{ backgroundColor: 'hotpink', height: 64 }}>
              <h1 className='Text size-9 string'>The quick brown fox</h1>
            </div>
            <div className='Flex ai-center' style={{ backgroundColor: 'hotpink', height: 64 }}>
              <h2 className='Text size-8 string'>The quick brown fox</h2>
            </div>
            <div className='Flex ai-center' style={{ backgroundColor: 'hotpink', height: 64 }}>
              <h3 className='Text size-7 string'>The quick brown fox jumps</h3>
            </div>
            <div className='Flex ai-center' style={{ backgroundColor: 'hotpink', height: 64 }}>
              <h4 className='Text size-6 string'>The quick brown fox jumps</h4>
            </div>
            <div className='Flex ai-center' style={{ backgroundColor: 'hotpink', height: 64 }}>
              <h5 className='Text size-5 string'>The quick brown fox jumps over the lazy dog</h5>
            </div>
            <div className='Flex ai-center' style={{ backgroundColor: 'hotpink', height: 64 }}>
              <h6 className='Text size-4 string'>The quick brown fox jumps over the lazy dog</h6>
            </div>
            <div className='Flex ai-center' style={{ backgroundColor: 'hotpink', height: 64 }}>
              <p className='Text size-3 string'>The quick brown fox jumps over the lazy dog</p>
            </div>
            <div className='Flex ai-center' style={{ backgroundColor: 'hotpink', height: 64 }}>
              <address className='Text size-2 string'>The quick brown fox jumps over the lazy dog</address>
            </div>
            <div className='Flex ai-center' style={{ backgroundColor: 'hotpink', height: 64 }}>
              <span className='Text size-1 string'>The quick brown fox jumps over the lazy dog</span>
            </div>
          </div>
          <div className='Flex column gap-2' style={{ borderLeft: '1px solid hotpink' }}>
            <h1 className='Text size-9'>T</h1>
            <h2 className='Text size-8'>T</h2>
            <h3 className='Text size-7'>T</h3>
            <h4 className='Text size-6'>T</h4>
            <h5 className='Text size-5 weight-2'>T</h5>
          </div>
        </div>
      </section>

      <section className='Section size-3'>
        <div className='Grid columns-2 gap-6'>
          <div>
            <h1 className='Text size-9' style={{ maxWidth: '600px', marginBottom: '20px'}}>The quick brown fox jumps over the lazy dog</h1>
            <h2 className='Text size-8' style={{ maxWidth: '600px', marginBottom: '20px'}}>The quick brown fox jumps over the lazy dog</h2>
            <h3 className='Text size-7' style={{ maxWidth: '600px', marginBottom: '20px'}}>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog</h3>
          </div>
          <div>
            <h4 className='Text size-6' style={{ maxWidth: '600px', marginBottom: '20px'}}>I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and broaden the potential solution space. I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and broaden the potential solution.</h4>
            <h5 className='Text size-5 weight-2' style={{ maxWidth: '600px', marginBottom: '20px'}}>I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and broaden the potential solution space. I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and broaden the potential solution.</h5>
            <p className='Text size-4' style={{ marginBottom: '20px'}}>I encourage my team to keep learning. Ideas in different topics or fields can often inspire <code className='Code'>console.log('Roadie').console</code> new ideas and broaden the potential solution space. I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and broaden the potential solution.<sup className='Sup'>1</sup></p>
          </div>
          <div>
            <p className='Text size-3 lowContrast' style={{ marginBottom: '20px'}}>I encourage my team to keep learning.<sup className='Sup'>1</sup> Ideas in different topics or fields can often inspire new ideas <code className='Code'>console.log('Roadie').console</code> and broaden the potential solution space. I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and broaden the potential solution space.</p>
          </div>
          <div className='Grid columns-2 gap-6'>
            <div>
              <span className='Text size-2 lowContrast' style={{ marginBottom: '20px'}}>I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and broaden the potential solution space. I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and broaden the potential solution space.</span>
            </div>
            <div>
              <span className='Text size-1 lowContrast' style={{ marginBottom: '20px'}}>I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and broaden the potential solution space. I encourage my team to keep learning. Ideas in different topics or fields can often inspire new ideas and broaden the potential solution space.</span>
            </div>
          </div>
        </div>  
      </section>

      <section className='Section size-3'>
        <div className='Grid columns-2 gap-9'>
          <div className='Flex column gap-6'>
            <h1 className='Text size-9'>SaaS Backstage. Simpler, safer, and more powerful.</h1>
            <p className='Text size-5 weight-1 lowContrast'>Get automatic upgrades, instant Catalog updates, and ready-to-use integrations with Roadie’s Backstage-as-a-Service.</p>
            <button className='Button size-3 accent'>Request a Demo</button>
          </div>
          <div>
            <div style={{ backgroundColor: 'gainsboro', height: 500 }}></div>
          </div>
        </div>
      </section>

      <section className='Section size-3'>
        <div className='Grid columns-2 gap-9 ai-center'>
          <div>
            <div style={{ backgroundColor: 'gainsboro', height: 500 }}></div>
          </div>
          <div className='Flex column gap-5'>
            <h3 className='Text size-4 weight-2 indigo'>Write Checks</h3>
            <h4 className='Text size-7'>Create a culture of quality and accountability</h4>
            <p className='Text size-4'>Checks run against source code and the APIs your tools expose. They find software which is not meeting expectations and report this to the people who can get it fixed.</p>
            <p className='Text size-3 lowContrast'>Scorecards group checks together into concepts your teams understand. Like “Security best practices - Level 1” or “Production SRE requirements - Level 3”.</p>
          </div>
        </div>
      </section>
    </div>
  </>
);

export default DS;

