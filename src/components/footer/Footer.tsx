import SiteLogoLink from "../logo/SiteLogoLink";

export default function Footer() {
    return (
        <footer id="footer" className='flex w-full  border-t border-gray-300  bg-footer_background backdrop-blur-sm dark:border-gray-700 dark:bg-footer_background-dark'>
            <div className='flex h-20 w-full items-center justify-between px-4 '>
                <SiteLogoLink />
                <p className='text-end text-sm '>© rixia. All Rights Reserved.</p>
            </div>
        </footer>
    )
}