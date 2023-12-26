const Pagination = ({page, lastPage, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    
    const handleNextPage = () => {
        setPage((prevState) =>  prevState + 1)
        scrollTop
    }

    const handlePrevPage = () => {
        setPage((prevState) =>  prevState - 1)
        scrollTop
    }

    const lastNextPage = () => {
        setPage(() =>  lastPage)
        scrollTop
    }
    const firstNextPage = () => {
        setPage(() =>  page = 1)
        scrollTop
    }

    return (
        <div className="flex justify-center items-center py-6 px-2 gap-4 font-bold">

            {page <= 1 ? null : 
               <button onClick={handlePrevPage} className="transition-all hover:text-colos-secondary">Prev</button>
            }
            {
                page <= 1 ? null :
                <button onClick={firstNextPage} className="transition-all hover:text-colos-secondary">First Page</button>
            }
            <p className="flex flex-row">{page} of {lastPage}</p>
            {
                page >= lastPage ? null :
                <button onClick={handleNextPage} className="transition-all hover:text-colos-secondary">Next</button>
            }
            {
                page >= lastPage ? null : page == lastPage ? null : 
                <button onClick={lastNextPage} className="transition-all hover:text-colos-secondary">Last Page</button> 
            }
           
            
        </div>
    )
}

export default Pagination