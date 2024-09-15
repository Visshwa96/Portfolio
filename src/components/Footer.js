
export default function Footer () {

    const config = {
        email : 'visshwapm@gmail.com',
        phone: '+919344321645'
    }

    return <section id='footer' className='flex flex-col bg-[#2E3A59] px-5  text-white' >
        <div className='flex flex-col items-center my-5'>
            <h1 className='text-[20px]   border-secondary  w-[240px] font-bold'>&copy;Visshwa PM 2024</h1>
        </div>
    </section>
}