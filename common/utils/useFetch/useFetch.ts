import useAsync, { UseAsyncProps } from "../useAsync/useAsync";
import React from 'react'
const DEFAULT_OPTIONS = {
    headers: {'Content-Type': 'application/json'},
}

interface UseFetchProps {
  url: string
  options: object[]
  dependencies: Array<object>

}
const useFetch:Function = (url:string, options ={}, dependencies = []):any =>{
  return useAsync(() => {
    return fetch(url, {...DEFAULT_OPTIONS, ...options}).then(res => {
        if (res.ok) return res.json()
        return res.json().then(json => Promise.reject(json))
    })
  }, [dependencies])
  
}

export default useFetch