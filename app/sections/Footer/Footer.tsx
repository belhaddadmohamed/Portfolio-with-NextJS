import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
// import Newsletter from '../Newsletter/Newsletter'

const Footer = () => {
  return (

    <footer className="bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto">
            <div className="flex flex-wrap justify-between py-10">
                {/* Logo */}
                <div className="my-8 w-full text-center sm:w-1/2 md:mb-0 md:text-left lg:w-1/3">
                    <Link href="/index.html" className="flex justify-center">
                    <Image  
                        className=" mx-auto md:mx-0"
                        src="/images/belhaddad_logo.png" 
                        alt="Logo" 
                        width={144}
                        height={100}/>
                    </Link>
                    <div className="mt-4">
                    <ul className="flex justify-center space-x-4">
                        <li>
                        <Link href="https://www.facebook.com/share/1BCXNwVcDh/?mibextid=wwXIfr" className="rounded-full text-gray-400 hover:text-white" aria-label="Facebook">
                            <svg className="size-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd"/>
                            </svg>
                        </Link>
                        </li>
                        <li>
                        <Link href="#" className="rounded-full text-gray-400 hover:text-white">
                            <svg className="size-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor" fill-rule="evenodd" d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z" clip-rule="evenodd"/>
                            </svg>
                        </Link>
                        </li>
                        <li>
                        <Link href="#" className="rounded-full text-gray-400 hover:text-white">
                            <svg className="size-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M21.7 8.037a4.26 4.26 0 0 0-.789-1.964 2.84 2.84 0 0 0-1.984-.839c-2.767-.2-6.926-.2-6.926-.2s-4.157 0-6.928.2a2.836 2.836 0 0 0-1.983.839 4.225 4.225 0 0 0-.79 1.965 30.146 30.146 0 0 0-.2 3.206v1.5a30.12 30.12 0 0 0 .2 3.206c.094.712.364 1.39.784 1.972.604.536 1.38.837 2.187.848 1.583.151 6.731.2 6.731.2s4.161 0 6.928-.2a2.844 2.844 0 0 0 1.985-.84 4.27 4.27 0 0 0 .787-1.965 30.12 30.12 0 0 0 .2-3.206v-1.516a30.672 30.672 0 0 0-.202-3.206Zm-11.692 6.554v-5.62l5.4 2.819-5.4 2.801Z" clip-rule="evenodd"/>
                            </svg>
                        </Link>
                        </li>
                        <li>
                        <Link href="#" className="rounded-full text-gray-400 hover:text-white">
                            <svg className="size-6 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd"/>
                            </svg>
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>

                {/* Contact information */}
                <div className="my-8 w-full px-8 text-center sm:w-1/2 md:mb-0 md:text-left lg:w-1/3">
                    <div>
                        <h6 className="text-lg font-bold text-yellow-300">Contact us</h6>
                        <hr className="mt-4  border-gray-200"/>
                    </div>
                    <ul className="mt-4 space-y-2 text-left">
                        <li className="flex items-center">
                            <svg className="mr-2 size-5 shrink-0 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.68.61 1 1 0 011 1v3.79a1 1 0 01-1 1A17.92 17.92 0 012 4a1 1 0 011-1h3.79a1 1 0 011 1 11.72 11.72 0 00.61 3.68 1 1 0 01-.27 1.11z"/>
                            </svg>
                            <div className='flex flex-wrap'>
                                <Link href='tel:+213669007335' className="mr-1 text-gray-400 hover:text-gray-600">(+213) 6 69 00 73 35</Link>
                            </div>
                        </li>
                        <li className="mt-[15px] flex items-center">
                            <svg className="mr-2 size-5 shrink-0 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
                            </svg>
                            <Link href="https://maps.app.goo.gl/8jTPcGrQWdFb5KRv9" className="text-gray-400 hover:text-gray-600">
                                Setif, Setif, Algeria
                            </Link>
                        </li>
                        <li className="mt-[15px] flex items-center">
                            <svg className="mr-2 size-5 shrink-0 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                            <Link href="mailto:support@belhaddadmohamed.com" className="text-gray-400 hover:text-gray-600">
                                support@belhaddadmohamed.com
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="my-8 w-full px-8 text-center md:text-left lg:w-1/3">
                    <div>
                    <h6 className="text-lg font-bold text-yellow-300">Newsletter</h6>
                    <hr className="mt-4 border-gray-200"/>
                    </div>
                    <p className="mt-4 text-gray-400">Enter your email address to receive the latest news from the Institute, directly in your inbox.</p>
                    <form className="mt-4">
                    <div className="flex">
                        <input type="email" className="w-full rounded-l-lg border border-gray-300 px-4 py-2 focus:outline-none" placeholder="Your e-mail" />
                        <button type="submit" className="rounded-r-lg bg-yellow px-4 py-2 text-white hover:bg-yellow-300">Subscribe</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <hr className='border-gray-500' />
        <div className=" py-4 text-center text-gray-400 sm:text-left">
            <p className="sm:ml-16">Belhaddad &#169; <span id="copyright-year">{new Date().getFullYear()}</span> All Rights Reserved {/* <Link target='__blank' href="https://belhaddadmohamed.com" className="text-yellow-400 hover:text-yellow-600">@belhaddad</Link>*/}</p> 
        </div>
    </footer>

  )
}

export default Footer