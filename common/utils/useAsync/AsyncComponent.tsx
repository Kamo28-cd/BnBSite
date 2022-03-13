import React from 'react'
import useAsync from './useAsync'

const AsyncComponent: React.FC = () => {
    const {loading, error, value} = useAsync(() => {
        return new Promise((resolve, reject) => {
            const success = true
            setTimeout(() => {
                success ? resolve("Successful Resolve") : reject("Error")
            }, 1000)
        })
    })
    return (
        <div>
            <div>Loading: {loading.toString()}</div>
            <div>{error}</div>
            <div>{value}</div>
        </div>
    )
}

export default AsyncComponent