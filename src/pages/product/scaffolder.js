import React from 'react';
import { graphql } from 'gatsby';
import { SEO, SitewideFooter, SitewideHeader, Button } from 'components';

import ContentfulLogoImg from '../../../content/assets/product-pages/scaffolder-contentful-logo.png';

const SEO_TITLE = 'Scaffolder: self-service for Cloud Native teams';
const LEAD = `Roadie’s Backstage-based Scaffolder lets you package best practices for your developers to grab with a few clicks.`;

const Home = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <>
      <SEO title={`${SEO_TITLE} | ${siteTitle}`} description={LEAD} />

      <SitewideHeader borderBottom={false} />

      <section className="Section size-2">
        <div className="Container">
          <div className='Grid columns-1 bp3-columns-2 gap-9 mb-9 bp2-mb-0'>
            <div className='Flex column gap-5'>
              <h1 className="Text size-8 bp2-size-9">
                Save DevOps from mundane tasks
              </h1>
              <p className="Text size-5 weight-1 lowContrast mb-3">
                Accelerate your delivery teams by putting all services, APIs, resources, teams, and documentation under Roadie’s Catalog. Eliminate the guessing game when gathering requirements for a new app or feature.
              </p>
              <Button
                className="Button size-3 accent bp2-mb-8"
                link={true}
                to="/free-trial/"
                text="Request a Demo"
              />
            </div>
            <div>
              <div
                  style={{
                    position: 'relative',
                    flexGrow: 1,
                    backgroundColor: 'white',
                    aspectRatio: '16 / 9',
                    borderRadius: 'var(--br-3)',
                    overflow: 'hidden',
                    border: '1px solid var(--gray-a3)',
                    backgroundClip: 'padding-box',
                    boxShadow: '0 1px 3px hsl(206 29% 48% / 10%), 0 2px 4px hsl(206 34% 48% / 8%), 0 5px 15px hsl(206 38% 55% / 12%)'
                  }}>
                    <div className='Grid columns-2 gap-3 pt-9 pr-3 pb-7' style={{ paddingLeft: 54 }}>
                      <div className='Card pt-2 pr-4 pb-2 pl-4'>
                        <span className='Text size-3 mb-4' style={{ fontWeight: 'var(--fw-2)' }}>
                          Create a React/Node app
                        </span>
                        <div className='Skeleton size-2 gray mb-3'></div>
                        <div className='Skeleton size-2 gray width-50 mb-2'></div>
                      </div>
                      <div className='Card pt-2 pr-4 pb-2 pl-4'>
                        <span className='Text size-3 mb-4' style={{ fontWeight: 'var(--fw-2)' }}>
                          Add Snyk to your service
                        </span>
                        <div className='Skeleton size-2 gray mb-3'></div>
                        <div className='Skeleton size-2 gray width-50 mb-2'></div>
                      </div>
                      <div className='Card pt-2 pr-4 pb-2 pl-4'>
                        <span className='Text size-3 mb-4' style={{ fontWeight: 'var(--fw-2)' }}>
                          Add OpenTelemetry to your Spring app
                        </span>
                        <div className='Skeleton size-2 gray mb-3'></div>
                        <div className='Skeleton size-2 gray width-50 mb-2'></div>
                      </div>
                      <div className='Card pt-2 pr-4 pb-2 pl-4'>
                        <span className='Text size-3 mb-4' style={{ fontWeight: 'var(--fw-2)' }}>
                          Register your service in Roadie's Catalog
                        </span>
                        <div className='Skeleton size-2 gray mb-3'></div>
                        <div className='Skeleton size-2 gray width-50 mb-2'></div>
                      </div>
                    </div>
                    <div style={{ width: '100%', height: 1, backgroundColor: 'var(--gray-4)', left: 0, top: 'var(--space-7)', position: 'absolute' }}></div>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: 'var(--space-8)', display: 'flex', alignItems: 'center', flexDirection: 'column', boxShadow: 'inset -1px 0 0 0 var(--gray-4)', height: '100%', paddingTop: 'var(--space-2)', gap: 'var(--space-3)', color: 'var(--gray-11)' }}>
                      <div className='mb-2'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><g clipPath="url(#clip0_61_2)"><path d="M12.5 21V20L23 14L20.226 12.5L12.5 17V16L23 10L20.226 8.5L12.5 13V12L23 6L12.5 0L2 5.9984V18.0016L12.5 24L23 18L20.226 16.5L12.5 21Z" fill="currentColor"></path></g><defs><clipPath id="clip0_61_2"><rect width="21" height="24" fill="white" transform="translate(2)"></rect></clipPath></defs></svg>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.2 1H4.17741H4.1774C3.86936 0.999988 3.60368 0.999978 3.38609 1.02067C3.15576 1.04257 2.92825 1.09113 2.71625 1.22104C2.51442 1.34472 2.34473 1.51442 2.22104 1.71625C2.09113 1.92825 2.04257 2.15576 2.02067 2.38609C1.99998 2.60367 1.99999 2.86935 2 3.17738V3.1774V3.2V11.8V11.8226V11.8226C1.99999 12.1307 1.99998 12.3963 2.02067 12.6139C2.04257 12.8442 2.09113 13.0717 2.22104 13.2837C2.34473 13.4856 2.51442 13.6553 2.71625 13.779C2.92825 13.9089 3.15576 13.9574 3.38609 13.9793C3.60368 14 3.86937 14 4.17741 14H4.2H10.8H10.8226C11.1306 14 11.3963 14 11.6139 13.9793C11.8442 13.9574 12.0717 13.9089 12.2837 13.779C12.4856 13.6553 12.6553 13.4856 12.779 13.2837C12.9089 13.0717 12.9574 12.8442 12.9793 12.6139C13 12.3963 13 12.1306 13 11.8226V11.8V3.2V3.17741C13 2.86936 13 2.60368 12.9793 2.38609C12.9574 2.15576 12.9089 1.92825 12.779 1.71625C12.6553 1.51442 12.4856 1.34472 12.2837 1.22104C12.0717 1.09113 11.8442 1.04257 11.6139 1.02067C11.3963 0.999978 11.1306 0.999988 10.8226 1H10.8H4.2ZM3.23875 2.07368C3.26722 2.05623 3.32362 2.03112 3.48075 2.01618C3.64532 2.00053 3.86298 2 4.2 2H10.8C11.137 2 11.3547 2.00053 11.5193 2.01618C11.6764 2.03112 11.7328 2.05623 11.7613 2.07368C11.8285 2.11491 11.8851 2.17147 11.9263 2.23875C11.9438 2.26722 11.9689 2.32362 11.9838 2.48075C11.9995 2.64532 12 2.86298 12 3.2V11.8C12 12.137 11.9995 12.3547 11.9838 12.5193C11.9689 12.6764 11.9438 12.7328 11.9263 12.7613C11.8851 12.8285 11.8285 12.8851 11.7613 12.9263C11.7328 12.9438 11.6764 12.9689 11.5193 12.9838C11.3547 12.9995 11.137 13 10.8 13H4.2C3.86298 13 3.64532 12.9995 3.48075 12.9838C3.32362 12.9689 3.26722 12.9438 3.23875 12.9263C3.17147 12.8851 3.11491 12.8285 3.07368 12.7613C3.05624 12.7328 3.03112 12.6764 3.01618 12.5193C3.00053 12.3547 3 12.137 3 11.8V3.2C3 2.86298 3.00053 2.64532 3.01618 2.48075C3.03112 2.32362 3.05624 2.26722 3.07368 2.23875C3.11491 2.17147 3.17147 2.11491 3.23875 2.07368ZM5 10C4.72386 10 4.5 10.2239 4.5 10.5C4.5 10.7761 4.72386 11 5 11H8C8.27614 11 8.5 10.7761 8.5 10.5C8.5 10.2239 8.27614 10 8 10H5ZM4.5 7.5C4.5 7.22386 4.72386 7 5 7H10C10.2761 7 10.5 7.22386 10.5 7.5C10.5 7.77614 10.2761 8 10 8H5C4.72386 8 4.5 7.77614 4.5 7.5ZM5 4C4.72386 4 4.5 4.22386 4.5 4.5C4.5 4.77614 4.72386 5 5 5H10C10.2761 5 10.5 4.77614 10.5 4.5C10.5 4.22386 10.2761 4 10 4H5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 2V1H10V2H5ZM4.75 0C4.33579 0 4 0.335786 4 0.75V1H3.5C2.67157 1 2 1.67157 2 2.5V12.5C2 13.3284 2.67157 14 3.5 14H11.5C12.3284 14 13 13.3284 13 12.5V2.5C13 1.67157 12.3284 1 11.5 1H11V0.75C11 0.335786 10.6642 0 10.25 0H4.75ZM11 2V2.25C11 2.66421 10.6642 3 10.25 3H4.75C4.33579 3 4 2.66421 4 2.25V2H3.5C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V2.5C12 2.22386 11.7761 2 11.5 2H11Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.30902 1C2.93025 1 2.58398 1.214 2.41459 1.55279L1.05279 4.27639C1.01807 4.34582 1 4.42238 1 4.5V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V4.5C14 4.42238 13.9819 4.34582 13.9472 4.27639L12.5854 1.55281C12.416 1.21403 12.0698 1.00003 11.691 1.00003L7.5 1.00001L3.30902 1ZM3.30902 2L7 2.00001V4H2.30902L3.30902 2ZM8 4V2.00002L11.691 2.00003L12.691 4H8ZM7.5 5H13V13H2V5H7.5ZM5.5 7C5.22386 7 5 7.22386 5 7.5C5 7.77614 5.22386 8 5.5 8H9.5C9.77614 8 10 7.77614 10 7.5C10 7.22386 9.77614 7 9.5 7H5.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49996 1.80002C4.35194 1.80002 1.79996 4.352 1.79996 7.50002C1.79996 10.648 4.35194 13.2 7.49996 13.2C10.648 13.2 13.2 10.648 13.2 7.50002C13.2 4.352 10.648 1.80002 7.49996 1.80002ZM0.899963 7.50002C0.899963 3.85494 3.85488 0.900024 7.49996 0.900024C11.145 0.900024 14.1 3.85494 14.1 7.50002C14.1 11.1451 11.145 14.1 7.49996 14.1C3.85488 14.1 0.899963 11.1451 0.899963 7.50002Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path><path d="M13.4999 7.89998H1.49994V7.09998H13.4999V7.89998Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path><path d="M7.09991 13.5V1.5H7.89991V13.5H7.09991zM10.375 7.49998C10.375 5.32724 9.59364 3.17778 8.06183 1.75656L8.53793 1.24341C10.2396 2.82218 11.075 5.17273 11.075 7.49998 11.075 9.82724 10.2396 12.1778 8.53793 13.7566L8.06183 13.2434C9.59364 11.8222 10.375 9.67273 10.375 7.49998zM3.99969 7.5C3.99969 5.17611 4.80786 2.82678 6.45768 1.24719L6.94177 1.75281C5.4582 3.17323 4.69969 5.32389 4.69969 7.5 4.6997 9.67611 5.45822 11.8268 6.94179 13.2472L6.45769 13.7528C4.80788 12.1732 3.9997 9.8239 3.99969 7.5z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path><path d="M7.49996 3.95801C9.66928 3.95801 11.8753 4.35915 13.3706 5.19448 13.5394 5.28875 13.5998 5.50197 13.5055 5.67073 13.4113 5.83948 13.198 5.89987 13.0293 5.8056 11.6794 5.05155 9.60799 4.65801 7.49996 4.65801 5.39192 4.65801 3.32052 5.05155 1.97064 5.8056 1.80188 5.89987 1.58866 5.83948 1.49439 5.67073 1.40013 5.50197 1.46051 5.28875 1.62927 5.19448 3.12466 4.35915 5.33063 3.95801 7.49996 3.95801zM7.49996 10.85C9.66928 10.85 11.8753 10.4488 13.3706 9.6135 13.5394 9.51924 13.5998 9.30601 13.5055 9.13726 13.4113 8.9685 13.198 8.90812 13.0293 9.00238 11.6794 9.75643 9.60799 10.15 7.49996 10.15 5.39192 10.15 3.32052 9.75643 1.97064 9.00239 1.80188 8.90812 1.58866 8.9685 1.49439 9.13726 1.40013 9.30601 1.46051 9.51924 1.62927 9.6135 3.12466 10.4488 5.33063 10.85 7.49996 10.85z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 2H8V7H13V2.5C13 2.22386 12.7761 2 12.5 2ZM13 8H8V13H12.5C12.7761 13 13 12.7761 13 12.5V8ZM7 7V2H2.5C2.22386 2 2 2.22386 2 2.5V7H7ZM2 8V12.5C2 12.7761 2.22386 13 2.5 13H7V8H2ZM2.5 1C1.67157 1 1 1.67157 1 2.5V12.5C1 13.3284 1.67157 14 2.5 14H12.5C13.3284 14 14 13.3284 14 12.5V2.5C14 1.67157 13.3284 1 12.5 1H2.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.07095 0.650238C6.67391 0.650238 6.32977 0.925096 6.24198 1.31231L6.0039 2.36247C5.6249 2.47269 5.26335 2.62363 4.92436 2.81013L4.01335 2.23585C3.67748 2.02413 3.23978 2.07312 2.95903 2.35386L2.35294 2.95996C2.0722 3.2407 2.0232 3.6784 2.23493 4.01427L2.80942 4.92561C2.62307 5.2645 2.47227 5.62594 2.36216 6.00481L1.31209 6.24287C0.924883 6.33065 0.650024 6.6748 0.650024 7.07183V7.92897C0.650024 8.32601 0.924883 8.67015 1.31209 8.75794L2.36228 8.99603C2.47246 9.375 2.62335 9.73652 2.80979 10.0755L2.2354 10.9867C2.02367 11.3225 2.07267 11.7602 2.35341 12.041L2.95951 12.6471C3.24025 12.9278 3.67795 12.9768 4.01382 12.7651L4.92506 12.1907C5.26384 12.377 5.62516 12.5278 6.0039 12.6379L6.24198 13.6881C6.32977 14.0753 6.67391 14.3502 7.07095 14.3502H7.92809C8.32512 14.3502 8.66927 14.0753 8.75705 13.6881L8.99505 12.6383C9.37411 12.5282 9.73573 12.3773 10.0748 12.1909L10.986 12.7653C11.3218 12.977 11.7595 12.928 12.0403 12.6473L12.6464 12.0412C12.9271 11.7604 12.9761 11.3227 12.7644 10.9869L12.1902 10.076C12.3768 9.73688 12.5278 9.37515 12.638 8.99596L13.6879 8.75794C14.0751 8.67015 14.35 8.32601 14.35 7.92897V7.07183C14.35 6.6748 14.0751 6.33065 13.6879 6.24287L12.6381 6.00488C12.528 5.62578 12.3771 5.26414 12.1906 4.92507L12.7648 4.01407C12.9766 3.6782 12.9276 3.2405 12.6468 2.95975L12.0407 2.35366C11.76 2.07292 11.3223 2.02392 10.9864 2.23565L10.0755 2.80989C9.73622 2.62328 9.37437 2.47229 8.99505 2.36209L8.75705 1.31231C8.66927 0.925096 8.32512 0.650238 7.92809 0.650238H7.07095ZM4.92053 3.81251C5.44724 3.44339 6.05665 3.18424 6.71543 3.06839L7.07095 1.50024H7.92809L8.28355 3.06816C8.94267 3.18387 9.5524 3.44302 10.0794 3.81224L11.4397 2.9547L12.0458 3.56079L11.1882 4.92117C11.5573 5.44798 11.8164 6.0575 11.9321 6.71638L13.5 7.07183V7.92897L11.932 8.28444C11.8162 8.94342 11.557 9.55301 11.1878 10.0798L12.0453 11.4402L11.4392 12.0462L10.0787 11.1886C9.55192 11.5576 8.94241 11.8166 8.28355 11.9323L7.92809 13.5002H7.07095L6.71543 11.932C6.0569 11.8162 5.44772 11.5572 4.92116 11.1883L3.56055 12.046L2.95445 11.4399L3.81213 10.0794C3.4431 9.55266 3.18403 8.94326 3.06825 8.2845L1.50002 7.92897V7.07183L3.06818 6.71632C3.18388 6.05765 3.44283 5.44833 3.81171 4.92165L2.95398 3.561L3.56008 2.95491L4.92053 3.81251ZM9.02496 7.50008C9.02496 8.34226 8.34223 9.02499 7.50005 9.02499C6.65786 9.02499 5.97513 8.34226 5.97513 7.50008C5.97513 6.65789 6.65786 5.97516 7.50005 5.97516C8.34223 5.97516 9.02496 6.65789 9.02496 7.50008ZM9.92496 7.50008C9.92496 8.83932 8.83929 9.92499 7.50005 9.92499C6.1608 9.92499 5.07513 8.83932 5.07513 7.50008C5.07513 6.16084 6.1608 5.07516 7.50005 5.07516C8.83929 5.07516 9.92496 6.16084 9.92496 7.50008Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                      <svg width="16" height="16" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.49991 0.876892C3.84222 0.876892 0.877075 3.84204 0.877075 7.49972C0.877075 11.1574 3.84222 14.1226 7.49991 14.1226C11.1576 14.1226 14.1227 11.1574 14.1227 7.49972C14.1227 3.84204 11.1576 0.876892 7.49991 0.876892ZM1.82707 7.49972C1.82707 4.36671 4.36689 1.82689 7.49991 1.82689C10.6329 1.82689 13.1727 4.36671 13.1727 7.49972C13.1727 10.6327 10.6329 13.1726 7.49991 13.1726C4.36689 13.1726 1.82707 10.6327 1.82707 7.49972ZM7.50003 4C7.77617 4 8.00003 4.22386 8.00003 4.5V7H10.5C10.7762 7 11 7.22386 11 7.5C11 7.77614 10.7762 8 10.5 8H8.00003V10.5C8.00003 10.7761 7.77617 11 7.50003 11C7.22389 11 7.00003 10.7761 7.00003 10.5V8H4.50003C4.22389 8 4.00003 7.77614 4.00003 7.5C4.00003 7.22386 4.22389 7 4.50003 7H7.00003V4.5C7.00003 4.22386 7.22389 4 7.50003 4Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <div className='Flex row jc-center'>
        <div className='SeparatorGradient size-2' role="separator"></div>
      </div>

      <section className='Section size-3'>
        <div className='Container'>
          <div className="Grid columns-1 bp3-columns-2 gap-9 ai-center">
            <div>
              <div
                style={{
                  position: 'relative',
                  flexGrow: 1,
                  backgroundColor: 'var(--violet-12)',
                  aspectRatio: '16 / 9',
                  borderRadius: 'var(--br-3)',
                  overflow: 'hidden',
                  color: 'var(--violet-7)',
                  fontFamily: 'var(--ff-mono)',
                  padding: 'var(--space-5)',
                  fontSize: 14,
                  lineHeight: '22px',
                }}>
                  <div className='mb-4'>
                    ## How to release
                  </div>
                  <div className='mb-4'>
                    This plugin uses the [npm-publish-action](https://github.com/marketplace/actions/publish-to-npm) Github Action to automate releases. It expects commits to be titled in a very specific way.
                  </div>
                  <div>
                    To publish a new version:
                  </div>
              </div>
            </div>
            <div>
              <div className='Flex column gap-5'>
                <h3 className='Text size-4 weight-2 orange'>Shorten the time to production of new services</h3>
                <h3 className='Text size-7'>Define templates to create new services or extend existing ones.</h3>
                <p className='Text size-4 lowContrast'>Spotify, HP, Expedia, and hundreds of adopters use Backstage’s Scaffolder to accelerate their lead time for changes. Instead of having teams re-invent best practices all over again, Roadie’s Backstage-based Scaffolder makes it easy for you to package production-grade setups for developers to grab with a few clicks.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='Section size-3'>
        <div className='Container'>
          <div className="Grid columns-1 bp3-columns-2 gap-9 ai-center">
            <div
              style={{
                position: 'relative'
              }}>
                <div
                  style={{
                    position: 'absolute',
                    backgroundColor: 'var(--yellow-4)',
                    width: '99%',
                    zIndex: '-1',
                    borderRadius: '50%',
                    aspectRatio: '1/1',
                    transform: 'translateY(-50%)',
                    top: '50%',
                  }}></div>
              <div
                style={{
                  position: 'relative',
                  flexGrow: 1,
                  backgroundColor: 'rgba(255,255,255,.8)',
                  backdropFilter: 'blur(10px)',
                  aspectRatio: '16 / 9',
                  borderRadius: 'var(--br-3)',
                  border: '1px solid var(--gray-a4)',
                  backgroundClip: 'padding-box',
                  boxShadow: '0 1px 3px hsl(204 42% 48% / 10%), 0 4px 12px -2px hsl(204 58% 48% / 8%), 0 15px 25px -5px hsl(204 48% 55% / 12%)'
                }}>
                  <div style={{ width: 1, height: '100%', backgroundColor: 'var(--gray-4)', left: 'var(--space-4)', top: 0, position: 'absolute' }}></div>
                  <div style={{ width: '100%', height: 1, backgroundColor: 'var(--gray-4)', left: 0, top: 'var(--space-4)', position: 'absolute' }}></div>
                  <div className='pt-7' style={{ display: 'flex', justifyContent: 'center' }}>
                    <div className="Card shadow pt-5 pr-5 pb-5 pl-5" style={{ width: 270, position: 'absolute' }}>
                      <span className="Text size-3 weight-2 mb-2" role="presentation">Project repository</span>
                      <div
                        style={{
                          backgroundColor: 'white',
                          borderRadius: 'var(--br-3)',
                          border: '1px solid var(--gray-a3)',
                          backgroundClip: 'padding-box',
                          boxShadow: '0 1px 3px hsl(204 42% 48% / 10%), 0 2px 4px hsl(204 58% 48% / 8%), 0 5px 15px hsl(204 48% 55% / 12%)',
                          marginBottom: 'var(--space-4)',
                        }}>
                          <div style={{
                            display: 'flex',
                            height: 32,
                            padding: 8,
                            fontSize: 14,
                            lineHeight: '1',
                            boxSizing: 'border-box',
                            alignItems: 'center',
                            borderBottom: '1px solid var(--gray-a4)',
                          }}>
                            QuickPaymentsA
                          </div>
                          <div style={{
                            display: 'flex',
                            height: 32,
                            padding: 8,
                            fontSize: 14,
                            lineHeight: '1',
                            boxSizing: 'border-box',
                            alignItems: 'center',
                          }}>
                            <span style={{ fontWeight: 'var(--fw-2)' }}>QuickPaymentsA</span>
                            <span>pp</span>
                          </div>
                          <div style={{
                            display: 'flex',
                            height: 32,
                            padding: 8,
                            fontSize: 14,
                            lineHeight: '1',
                            boxSizing: 'border-box',
                            alignItems: 'center',
                          }}>
                            <span style={{ fontWeight: 'var(--fw-2)' }}>QuickPaymentsA</span>
                            <span>uthorizations</span>
                          </div>
                        </div>
                      <span className="Text size-3 weight-2 mb-3" role="presentation">Using observability tooling?</span>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 12,
                      }}>
                        <div style={{
                          width: 16,
                          height: 16,
                          border: '1px solid var(--gray-5)',
                          borderRadius: 4,
                          marginRight: 8
                        }}></div>
                        <span className="Text size-2" role="presentation">No</span>
                      </div>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: 16,
                      }}>
                        <div style={{
                          width: 16,
                          height: 16,
                          border: '1px solid var(--gray-5)',
                          borderRadius: 4,
                          marginRight: 8
                        }}></div>
                        <span className="Text size-2" role="presentation">Yes</span>
                      </div>
                      <div className='Button size-2 accent'>Next Step</div>
                    </div>
                  </div>
              </div>
            </div>
            <div>
              <div className='Flex column gap-5'>
                <h3 className='Text size-4 weight-2 orange'>No more ticket back-and-forth</h3>
                <h3 className='Text size-7'>Reduce human error by defining powerful forms</h3>
                <p className='Text size-4 lowContrast'>Asking developers to type out service info in a free-form input is prone to errors. With the Roadie’s Scaffolder, you can define parameters for your input and turn them into dropdowns fed from your Catalog, integrations, or internal APIs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='Section size-3'>
        <div className='Container'>
          <div className="Grid columns-1 bp3-columns-2 gap-9 ai-center">
            <div>
              <div
                style={{
                  position: 'relative',
                  flexGrow: 1,
                  backgroundColor: 'var(--violet-12)',
                  aspectRatio: '16 / 9',
                  borderRadius: 'var(--br-3)',
                  overflow: 'hidden',
                  color: 'var(--violet-7)',
                  fontFamily: 'var(--ff-mono)',
                  padding: 'var(--space-5)',
                  fontSize: 14,
                  lineHeight: '22px',
                }}>
                  <div>
                    <span style={{ color: 'var(--green-4)' }} role="presentation">id: </span>
                    <span style={{ color: 'var(--yellow-5)' }} role="presentation">publish-pr</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--green-4)' }} role="presentation">name: </span>
                    <span style={{ color: 'var(--yellow-5)' }} role="presentation">Publish PR</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--green-4)' }} role="presentation">action: </span>
                    <span style={{ color: 'var(--yellow-5)' }} role="presentation">publish:github:pull-request</span>
                  </div>
                  <div>
                    <span style={{ color: 'var(--green-4)' }} role="presentation">input: </span>
                  </div>
                  <div className='pl-5'>
                    <span style={{ color: 'var(--green-4)' }} role="presentation">repoURL: </span>
                    <span style={{ color: 'white' }} role="presentation">$&#123;&#123; </span>
                    <span style={{ color: 'var(--yellow-5)' }} role="presentation">parameters.repository</span>
                    <span style={{ color: 'white' }} role="presentation"> &#125;&#125;</span>
                  </div>
                  <div className='pl-5'>
                    <span style={{ color: 'var(--green-4)' }} role="presentation">branchName: </span>
                    <span style={{ color: 'white' }} role="presentation">$&#123;&#123; </span>
                    <span style={{ color: 'var(--yellow-5)' }} role="presentation">parameters.pr_branch</span>
                    <span style={{ color: 'white' }} role="presentation"> &#125;&#125;</span>
                  </div>
                  <div className='pl-5'>
                    <span style={{ color: 'var(--green-4)' }} role="presentation">title: </span>
                    <span style={{ color: 'white' }} role="presentation">$&#123;&#123; </span>
                    <span style={{ color: 'var(--yellow-5)' }} role="presentation">parameters.path</span>
                    <span style={{ color: 'white' }} role="presentation"> &#125;&#125;</span>
                  </div>
                  <div className='pl-5'>
                    <span style={{ color: 'var(--green-4)' }} role="presentation">description: </span>
                    <span style={{ color: 'var(--yellow-5)' }} role="presentation">PR created by Roadie Scaffolder</span>
                  </div>
              </div>
            </div>
            <div>
              <div className='Flex column gap-5'>
                <h3 className='Text size-4 weight-2 orange'>GitHub Actions inspired syntax for your templates</h3>
                <h3 className='Text size-7'>Roadie lets you use the knowledge you already have</h3>
                <p className='Text size-4 lowContrast'>Cookiecutter is great, but can be unintuitive for people working in the platform space. Roadie uses Backstage Scaffolder templates, which supports actions that abstract away common operations, like creating a Pull Request or writing to GitHub, without you having to worry about authentication.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='Flex row jc-center'>
        <div className='SeparatorGradient size-2' role="separator"></div>
      </div>

      <section className="Section size-3">
        <div className='Container'>
          <div className='Flex row jc-center'>
            <figure className="max-w-2xl px-4 mx-auto mb-5">
              <div className='Flex row jc-center mb-7'>
                <img src={ContentfulLogoImg} alt="Contentful logo" />
              </div>
              <blockquote className="Text size-6 weight-1 ta-center mb-7">
                “Roadie helps us get the most out of Backstage while saving time and money on setup and operation.”
              </blockquote>
              <footer>
                <div className='Flex row ai-center gap-3 jc-center'>
                  <div className='Avatar size-3'>
                    <img src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg" alt="Andy Hoffman Headshot" />
                  </div>
                  <div className='Flex column'>
                    <span className='Text size-3 weight-2'>Enrique Amodeo Rubio</span>
                    <span className='Text size-3 lowContrast'>Staff Software Engineer at Contentful</span>
                  </div>
                </div>
              </footer>
            </figure>
          </div>
        </div>
      </section>

      <div className='Flex row jc-center'>
        <div className='SeparatorGradient size-2' role="separator"></div>
      </div>

      <section className='Section size-3'>
        <div className='Container'>
          <div className='Flex column bp2-row jc-between'>
            <span className='Text size-7 mb-7 bp2-mb-0'>Simpler, safer, and more powerful Backstage.</span>
            <a className='Button size-3 accent' href="#">Request a Demo</a>
          </div>
        </div>
      </section>

      <div className='Flex row jc-center'>
        <div className='SeparatorGradient size-2' role="separator"></div>
      </div>

      <SitewideFooter />
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query ScaffolderQuery {
    site {
      siteMetadata {
        title
        social {
          twitter
        }
      }
    }
  }
`;
