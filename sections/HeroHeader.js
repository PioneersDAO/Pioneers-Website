function HeroHeader() {
    return (
        <div className='h-screen flex flex-col items-center text-white px-36 py-16'>
            <section className='flex flex-col items-center'>
                <section className=' flex justify-end w-full'><img className='h-28' src="smiley.png" alt="" /></section> 
                <span className='text-7xl font-bold text-purple-light mb-6'>Build Communities,</span>
                <span className='text-7xl font-bold'>Watch, learn and Grow</span>
            </section>

            <p className='flex justify-center items-center py-16'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta a cupiditate natus impedit quidem soluta, eaque obcaecati qui laboriosam nam vel reprehenderit possimus necessitatibus officia! Molestias eligendi necessitatibus praesentium voluptates?</p>
            <section className='flex justify-between w-10/12 px-40'>
                <button className='w-5/12 h-12 font-bold text-2xl rounded-lg bg-purple-light'>Join Discord</button>
                <button className='w-5/12 h-12 font-bold text-2xl rounded-lg border-2 border-purple-light'>Learn More</button>
            </section>
        </div>
    )
}

export default HeroHeader
