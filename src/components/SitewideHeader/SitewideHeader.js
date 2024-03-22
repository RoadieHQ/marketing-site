import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Logo from '../Logo';
import TopBanner from 'components/TopBanner';
import WhitepaperVs from '../TopBanner/Whitepaper';
import { Link } from 'components';


const SitewideHeader = () => {
  return (
    <div>
      <TopBanner>
        <WhitepaperVs />
      </TopBanner>

      <header className='Header'>
        <div className="position-absolute">
          <Logo />
        </div>

        <div className='Container'>
          <NavigationMenu.Root className="NavigationMenuRoot">
            <NavigationMenu.List className="NavigationMenuList">
              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                  Product
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className='CaretDown'
                    >
                      <path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="NavigationMenuContent">
                  <ul className="NavigationMenuContentList product">
                    <li>
                      {/* <Link
                        to="/product/catalog"
                        className="Link highContrast"
                      >
                        <span className='Text size-3 inline'>
                          fewfwefwef
                        </span>
                      </Link> */}
                      <NavigationMenu.Link asChild>
                        <a className="NavigationMenuListItemLink" href="/product/catalog">
                          <div className='Flex row gap-2'>
                            <div className='pt-1'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                              </svg>
                            </div>
                            <div className='Flex column'>
                              <span className="Text size-3 weight-2">Catalog</span>
                              <p className="Text size-3 lowContrast">All your tech assets on a single glass pane.</p>
                            </div>
                          </div>
                        </a>
                      </NavigationMenu.Link>
                    </li>
                    <li>
                      <NavigationMenu.Link asChild>
                        <a className="NavigationMenuListItemLink" href="/product/scaffolder">
                          <div className='Flex row gap-2'>
                            <div className='pt-1'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <div className='Flex column'>
                              <span className="Text size-3 weight-2">Scaffolder</span>
                              <p className="Text size-3 lowContrast">Accelerate your development initatives.</p>
                            </div>
                          </div>
                        </a>
                      </NavigationMenu.Link>
                    </li>
                    <li>
                      <NavigationMenu.Link asChild>
                        <a className="NavigationMenuListItemLink" href="/product/documentation">
                          <div className='Flex row gap-2'>
                            <div className='pt-1'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                              </svg>
                            </div>
                            <div className='Flex column'>
                              <span className="Text size-3 weight-2">Documentation</span>
                              <p className="Text size-3 lowContrast">Find everyone's docs in the same place.</p>
                            </div>
                          </div>
                        </a>
                      </NavigationMenu.Link>
                    </li>
                    <li>
                      <NavigationMenu.Link asChild>
                        <a className="NavigationMenuListItemLink" href="/product/tech-insights">
                          <div className='Flex row gap-2'>
                            <div className='pt-1'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                              </svg>
                            </div>
                            <div className='Flex column'>
                              <span className="Text size-3 weight-2">Tech Insights</span>
                              <p className="Text size-3 lowContrast">Measure and improve software quality.</p>
                            </div>
                          </div>
                        </a>
                      </NavigationMenu.Link>
                    </li>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Trigger className="NavigationMenuTrigger">
                  Resources
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className='CaretDown'
                    >
                      <path d="M4.18179 6.18181C4.35753 6.00608 4.64245 6.00608 4.81819 6.18181L7.49999 8.86362L10.1818 6.18181C10.3575 6.00608 10.6424 6.00608 10.8182 6.18181C10.9939 6.35755 10.9939 6.64247 10.8182 6.81821L7.81819 9.81821C7.73379 9.9026 7.61934 9.95001 7.49999 9.95001C7.38064 9.95001 7.26618 9.9026 7.18179 9.81821L4.18179 6.81821C4.00605 6.64247 4.00605 6.35755 4.18179 6.18181Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                  </svg>
                </NavigationMenu.Trigger>
                <NavigationMenu.Content className="NavigationMenuContent">
                  <ul className="NavigationMenuContentList resources">
                    <li>
                      <NavigationMenu.Link asChild>
                        <a className="NavigationMenuListItemLink" href="/backstage-bites">
                          <div className='Flex row gap-2'>
                            <div className='pt-1'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                              </svg>
                            </div>
                            <div className='Flex column'>
                              <span className="Text size-3 weight-2">Backstage Bites</span>
                              <p className="Text size-3 lowContrast">Short videos teaching Backstage concepts.</p>
                            </div>
                          </div>
                        </a>
                      </NavigationMenu.Link>
                    </li>
                    <li>
                      <NavigationMenu.Link asChild>
                        <a className="NavigationMenuListItemLink" href="/backstage/plugins">
                          <div className='Flex row gap-2'>
                            <div className='pt-1'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
                              </svg>
                            </div>
                            <div className='Flex column'>
                              <span className="Text size-3 weight-2">Backstage Plugins</span>
                              <p className="Text size-3 lowContrast">Browse our Backstage plugin marketplace.</p>
                            </div>
                          </div>
                        </a>
                      </NavigationMenu.Link>
                    </li>
                    <li>
                      <NavigationMenu.Link asChild>
                        <a className="NavigationMenuListItemLink" href="/blog">
                          <div className='Flex row gap-2'>
                            <div className='pt-1'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                              </svg>
                            </div>
                            <div className='Flex column'>
                              <span className="Text size-3 weight-2">Blog</span>
                              <p className="Text size-3 lowContrast">Read our posts on Backstage and Roadie.</p>
                            </div>
                          </div>
                        </a>
                      </NavigationMenu.Link>
                    </li>
                    <li>
                      <NavigationMenu.Link asChild>
                        <a className="NavigationMenuListItemLink" href="/case-studies">
                          <div className='Flex row gap-2'>
                            <div className='pt-1'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                              </svg>
                            </div>
                            <div className='Flex column'>
                              <span className="Text size-3 weight-2">Case Studies</span>
                              <p className="Text size-3 lowContrast">How organisations succeed with Backstage.</p>
                            </div>
                          </div>
                        </a>
                      </NavigationMenu.Link>
                    </li>
                    <li>
                      <NavigationMenu.Link asChild>
                        <a className="NavigationMenuListItemLink" href="/documentation">
                          <div className='Flex row gap-2'>
                            <div className='pt-1'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                              </svg>
                            </div>
                            <div className='Flex column'>
                              <span className="Text size-3 weight-2">Docs</span>
                              <p className="Text size-3 lowContrast">Set up your Roadie Backstage experience.</p>
                            </div>
                          </div>
                        </a>
                      </NavigationMenu.Link>
                    </li>
                    <li>
                      <NavigationMenu.Link asChild>
                        <a className="NavigationMenuListItemLink" href="https://discord.com/invite/W3qEMhmx4f" target='_blank' rel="noreferrer">
                          <div className='Flex row gap-2'>
                            <div className='pt-1'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                              </svg>
                            </div>
                            <div className='Flex column'>
                              <span className="Text size-3 weight-2">Discord</span>
                              <p className="Text size-3 lowContrast">Get support or provide feedback.</p>
                            </div>
                          </div>
                        </a>
                      </NavigationMenu.Link>
                    </li>
                  </ul>
                </NavigationMenu.Content>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link className="NavigationMenuLink" href="/case-studies">
                  Customers
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link className="NavigationMenuLink" href="/pricing">
                  Pricing
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Item>
                <NavigationMenu.Link className="NavigationMenuLink" href="/backstage-weekly">
                  Backstage Weekly
                </NavigationMenu.Link>
              </NavigationMenu.Item>

              <NavigationMenu.Indicator className="NavigationMenuIndicator">
                <div className="Arrow" />
              </NavigationMenu.Indicator>
            </NavigationMenu.List>

            <div className="ViewportPosition">
              <NavigationMenu.Viewport className="NavigationMenuViewport" />
            </div>
          </NavigationMenu.Root>
        </div>

        <div className='position-absolute right-0 mr-6'>
          <Link
            to="/request-demo"
            className="Button size-1 accent"
          >
            Get a Demo
          </Link>
        </div>
      </header>
    </div>
  );
};

export default SitewideHeader;
