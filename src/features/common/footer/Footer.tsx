export default function Footer() {
    return (
        <footer id="footer" className='flex w-full  border-t border-gray-300  bg-footer_background backdrop-blur-sm dark:border-gray-700 dark:bg-footer_background-dark'>
            <div className='flex h-14 w-full items-center justify-between px-4 '>
                <a href='/' className='text-2xl'>rixia.dev</a>
                <div className='mx-auto' />
                <div className='text-sm'>© rixia. All Rights Reserved.</div>
            </div>
        </footer>
    )
}