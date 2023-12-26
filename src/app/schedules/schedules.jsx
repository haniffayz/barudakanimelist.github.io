const Schedules = ({ api }) => {
    // console.log(api)
    return (
        <div>
            {api.data?.map((schedules, index)=> {
                console.log(schedules)
                return(
                    <div>

                    </div>
                )
            })}
        </div>
    )
}

export default Schedules