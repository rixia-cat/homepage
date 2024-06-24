export default function Footer() {
    return (
        <footer id="footer" className='flex w-full px-md  backdrop-blur-sm bg-footer_background  dark:bg-footer_background-dark border-t border-gray-300 dark:border-gray-700'>
            <div className='flex w-full items-center justify-between px-4 h-14 '>
                <a href='/' className='text-2xl'>rixia.dev</a>
                <div className='mx-auto' />
                <div className='text-sm'>© rixia. All Rights Reserved.</div>
            </div>
        </footer>
    )
}