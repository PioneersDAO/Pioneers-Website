import Stat from "../components/Stat"

function Stats() {
    return (
        <div className='flex justify-evenly pb-6'>
            <Stat number = {'40+'} desc = {'NFTS'}/>
            <Stat number = {'540+'} desc = {'Members'}/>
            <Stat number = {'300'} desc = {'Developers'}/>
            <Stat number = {'+25'} desc = {'Designers'}/>
        </div>
    )
}

export default Stats
