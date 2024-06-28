import Image from 'next/image';

export default function Footer() {
    return (
        <footer id="footer" className='flex w-full  border-t border-gray-300  bg-footer_background backdrop-blur-sm dark:border-gray-700 dark:bg-footer_background-dark'>
            <div className='flex h-14 w-full items-center justify-between px-4 '>
                <div className='flex flex-row '>
                    <div className='flex items-center pr-2'>
                        <Image src='/images/prof-cat.svg' alt='サイトアイコン画像' width={36} height={36} />
                    </div>
                    <a href='/' className='text-2xl text-grayishblack dark:text-grayishblack-dark'>rixia.dev</a>
                </div>
                <div className='mx-auto' />
                <div className='text-sm'>© rixia. All Rights Reserved.</div>
            </div>
        </footer>
    )
}