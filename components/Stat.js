function Stat({number, desc}) {
    return (
        <div className='border-l-4 pl-4 text-white border-purple-light'>
            <h3 className='text-2xl font-bold'>{number}</h3>
            <span>{desc}</span>
        </div>
    )
}

export default Stat
