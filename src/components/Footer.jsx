import React from 'react'

function Footer() {
    return (
        <footer className='bg-secondary-600'>
            <div className=" max-w-[1000px] px-12 pt-[70px] pb-8 mx-auto text-secondary-300 text-sm">
                <ul className="flex flex-wrap mb-4 [&>li]:mb-4 [&>li]:w-full [&>li]:xs:w-1/2 [&>li]:sm:w-1/3 [&>li]:md:w-1/4
        [&>li>span]:w-min hover:[&>li>span]:cursor-pointer hover:[&>li>span]:underline">
                    <li><span>Term of Use</span></li>
                    <li><span>Security</span></li>
                    <li><span>Legal Provesions</span></li>
                    <li><span>Cookie Preferences</span></li>
                    <li><span>Subtitles</span></li>
                    <li><span>Corporate Information</span></li>
                    <li><span>Contact Us</span></li>
                </ul>
                <button className="px-6 py-3 border border-secondary-300 text-secondary-200 hover:border-secondary-200">
                    DTS4A-51-FINAL-ADHADI_AJI_PUTRA
                </button>
            </div>
        </footer>
    )
}

export default Footer