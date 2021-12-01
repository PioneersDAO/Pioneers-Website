function WhitepaperCard({imgRight}) {
    return (
        <div className='flex items-center h-screen px-36 text-white'>
            <section className={`w-5/12 h-full flex items-center justify-center ${imgRight && 'md:order-last'}`}>
                <img  className='w-8/12 h-4/6 rounded-large z-10' src="https://media.istockphoto.com/photos/concept-of-an-open-magic-book-open-pages-with-water-and-land-and-picture-id1279460648?b=1&k=20&m=1279460648&s=170667a&w=0&h=uZa830sWo8hlFN0Y7FnQ14giNC0Z2EBNuTMuNJeJhQg=" alt="" />
                <div className='absolute w-3/12 h-4/6 rounded-large transform rotate-12 p-20 top-50 border-purple-light border-8'></div>
            </section>
            <section className='w-7/12 h-4/6 flex flex-col justify-between pl-10'>
                <div>
                    <h2 className='text-3xl font-bold mb-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
                    <p className='text-2xl text-gray-200 font-light'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo neque, dolorem autem quibusdam fugiat libero labore iste beatae repudiandae nisi exercitationem possimus incidunt, magni odit itaque quasi eaque, unde ducimus.</p>
                </div>
                <div>
                    <button className='px-3 w-3/6 h-16 py-1 text-3xl font-bold bg-purple-light rounded-large'>Read More</button>
                </div>
            </section>
        </div>
    )
}

export default WhitepaperCard
