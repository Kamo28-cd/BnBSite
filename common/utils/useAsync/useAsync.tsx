import React, { useCallback, useEffect, useState } from "react";


export interface UseAsyncProps {
    callback?: any
    dependencies?: object[]
}

const useAsync:Function =(callback:any, dependencies = []) =>{
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()
    const [value, setValue] = useState()

    const callbackMemorised = useCallback(() => {
        setLoading(true)
        setError(undefined)
        setValue(undefined)

        callback()
        .then(setValue)
        .catch(setError)
        .finally(()=> setLoading(false))
    }, dependencies)

    useEffect(() => {
        callbackMemorised()
    }, [callbackMemorised])
    return {loading, error, value}
}

export default useAsync