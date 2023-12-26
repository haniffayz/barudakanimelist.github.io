import Schedules from "./schedules"

const Page = async() => {
    
    const schedules = await fetch('https://api.jikan.moe/v4/schedules')
    // console.log(schedules)

    return (
        <div>
            <div className="justify-center items-center flex p-12"> 
                <h1 className="text-xl">Jadwal Terbaru</h1>
            </div>

            <Schedules api={schedules}/>
            
        </div>
    )
}

export default Page