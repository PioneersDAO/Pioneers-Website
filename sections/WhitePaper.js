import WhitepaperCard from "../components/WhitepaperCard"

function WhitePaper() {
    return (
        <div>
            <h1 className='flex justify-center text-6xl font-bold text-purple-light font-sora'> White paper</h1>
            <WhitepaperCard/>
            <WhitepaperCard imgRight/>
        </div>
    )
}

export default WhitePaper
