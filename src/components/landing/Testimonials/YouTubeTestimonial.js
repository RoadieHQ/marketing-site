import React from 'react';

import { Link } from 'components';

import AndyThumbImg from '../../../../content/assets/home/illustrations/home-andy-video-thumb.png';
import AndyAvatarImg from '../../../../content/assets/home/illustrations/home-andy-avatar.png';

const YouTubeTestimonial = () => {
    return (
        <section className="Section size-3">
            <div className='Container'>
            <blockquote
                cite="https://youtu.be/6Ss1e-9X_JY?t=51"
            >
                <div className='Flex column ai-center gap-7'>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="52" viewBox="0 0 64 52" fill="none">
                    <path d="M24.0923 27.696V51.592H0.608274V26.254C0.608274 10.598 10.9083 0.503996 27.3883 0.0919888V10.804C18.3243 11.628 13.3803 16.366 13.3803 25.43V27.696H24.0923ZM59.9363 27.696V51.592H36.4523V26.254C36.4523 10.598 46.7523 0.503996 63.2323 0.0919888V10.804C54.1683 11.628 49.2243 16.366 49.2243 25.43V27.696H59.9363Z" fill="var(--gray-4)"/>
                </svg>
                <p className="Text size-6 bp2-size-7 weight-1 ta-center" style={{ maxWidth: 600 }}>
                    “Roadie has been fantastic to work with and allowed us to adopt Backstage without the
                    overhead.”
                </p>
                <footer>
                    <div className='Flex row ai-center gap-3'>
                    <div className='Avatar size-3'>
                        <img src={AndyAvatarImg} alt="Andy Hoffman Headshot" />
                    </div>
                    <div className='Flex column'>
                        <span className='Text size-3 weight-2'>Andy Hoffman</span>
                        <span className='Text size-3 lowContrast'>DevOps Manager at Caribou</span>
                    </div>
                    </div>
                </footer>
                <div className='SeparatorGradient size-1' role="separator"></div>
                <aside className="">
                    <Link className="LinkCard" to="https://youtu.be/6Ss1e-9X_JY?t=51">
                        <div className='Flex row ai-center gap-3'>
                            <div className='VideoThumb'>
                            <img src={AndyThumbImg} alt="Andy's talk thumbnail" width="71" />
                            </div>
                            <span className='Text size-3 indigo'>Watch talk on YouTube &rarr;</span>
                        </div>
                    </Link>
                </aside>
                </div>
            </blockquote>
            </div>
        </section>
    );
};

export default YouTubeTestimonial;