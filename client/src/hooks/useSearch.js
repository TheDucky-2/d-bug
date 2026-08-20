import { useState } from "react"

export const useSearch = () => {

    const [isSearching, setIsSearching] = useState(false)
    const [searchQuery, setSearchQuery] = useState("")

    const openSearch = () => {
        setIsSearching(true)
    }

    const closeSearch = () => {
        setIsSearching(false)
        setSearchQuery("")
    }

    const handleSearchExitEvent = (e) => {
        if(e.key === "Escape"){
            closeSearch()
        }
    }


    return {
        isSearching,
        searchQuery,
        setSearchQuery,
        openSearch,
        closeSearch,
        handleSearchExitEvent
    }


}