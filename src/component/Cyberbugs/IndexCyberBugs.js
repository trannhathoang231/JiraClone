import React, { useEffect } from 'react'

import { useSelector , useDispatch} from 'react-redux'
import { getProjectDetailAction } from '../../redux/action/ProjectCyberBugsAction'
import ContentMain from './Main/ContentMain'
import HeaderMain from './Main/HeaderMain'
import InfoMain from './Main/InfoMain'

export default function IndexCyberBugs(props) {
    // console.log(props.match.params.projectId)
    const {projectDetail} = useSelector(state => state.ProjectReducer)
    const dispatch = useDispatch()

    console.log('projectDetail',projectDetail)
    useEffect(() => {

        const {projectId} = props.match.params
        // dispatch({
        //     type:'GET_PROJECT_DETAIL',
        //     projectId
        // })
        dispatch(getProjectDetailAction(projectId))
    },[])

  return (
    <div className='main container mt-5'>
   
            <HeaderMain projectDetail={projectDetail} />

            <InfoMain projectDetail={projectDetail} />

            <ContentMain projectDetail={projectDetail}/>
                 
    </div>
  )
}
