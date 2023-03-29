import { useState, useEffect } from 'react'
import * as I from '~/store/storeInterfaces'
import defaultStore from '~/store/defaultStore'
import {getApi} from '~/api/getApi'
import {uploadApi} from '~/api/uploadApi'
import {deleteApi} from '~/api/deleteApi'
import { UseCover } from './cover.props'

const useCover:UseCover = () => {    

    const [data, setData] = useState<number>(1)

    useEffect(() => {
        console.log('welcome to cover')
    }, [])

    const sampleApi = () => {
        return
    }

    const state = {
        sample: data,
    }

    const api = {
        sampleApi:sampleApi,
    }

    return (
        [state, api]
    )
}
export default useCover