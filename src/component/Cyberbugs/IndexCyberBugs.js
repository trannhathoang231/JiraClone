import React, { useEffect } from 'react'

import { useSelector , useDispatch} from 'react-redux'
import ContentMain from './Main/ContentMain'
import HeaderMain from './Main/HeaderMain'
import InfoMain from './Main/InfoMain'

export default function IndexCyberBugs(props) {

    const {projectDetail} = useSelector(state => state.ProjectReducer)
    const dispatch = useDispatch()


    useEffect(() => {

        const {projectId} = props.match.params
        dispatch({
            type:'GET_PROJECT_DETAIL',
            projectId
        })

    },[])

  return (
    <div className='main'>
   
                        <h3>Cyber Board</h3>
                        <HeaderMain />
                        <ContentMain />
                        <InfoMain />
                 
    </div>
  )
}
