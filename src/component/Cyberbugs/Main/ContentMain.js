import React from 'react'
import './ContentMain.css'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateStatusAction } from '../../../redux/action/TaskAction';
export default function ContentMain(props) {
    const dispatch = useDispatch()
    const arrStatus = useSelector(state => state.StatusReducer.arrStatus)
    const { projectDetail } = props;
    console.log(projectDetail, 'tasklist')
    const handleDragEnd = (result) => {
        let {projectId,taskId} = JSON.parse(result.draggableId)
        let {source,destination} = result
        console.log(projectId,taskId)
        console.log(result)
        if(result.destination){
            return;
        }
        if(source.index === destination.index && source.droppableId === destination.droppableId ){
            return;
        }
        const action = {
            type:"UPDATE_STATUS",
           arrStatus:{
            "taskId":taskId,
            "statusId":destination.droppableId,
            "projectId":projectId
           }
        }
        dispatch(action)
    console.log(arrStatus,'arrStatus')

    }
    const renderCardTaskList = () => {
        return <DragDropContext onDragEnd={handleDragEnd}>
            {
                projectDetail.lstTask?.map((taskListDt, index) => {
                    return <Droppable key={index} droppableId={taskListDt.statusId}>
                        {(provided) => {
                            return <div  className="card pb-5" style={{ width: '25%', height: 'auto', boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                                <div className="card-header" style={{ height: 'fit-content' }}>
                                    {taskListDt.statusName}
                                </div>
                                <div
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                                key={index}
                                    className="list-group list-group-flush" style={{height:'100%'}}>
                                    {taskListDt.lstTaskDeTail?.map((task, index) => {
                                        console.log(task, 'lstTask')
                                        return <Draggable key={task.taskId.toString()} index={index} draggableId={JSON.stringify({projectId:task.projectId,taskId:task.taskId})}>
                                            {(provided) => {
                                                return <div
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}


                                                    key={index} className="list-group-item" data-toggle="modal" data-target="#infoModal" >
                                                    <p >
                                                        {task.taskName}
                                                    </p>
                                                    <div className="block" style={{ display: 'flex' }}>
                                                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                                                            <div style={{ width: 'auto', height: 24, lineHeight: '34px' }}>
                                                                <div style={{ cursor: 'pointer' }}>
                                                                    <span style={{ fontWeight: 'bold', color: '#d40000', fontSize: '0.8rem' }}>{task.priorityTask.priority}</span>
                                                                </div>
                                                            </div>
                                                            <div style={{ width: 24, height: 24, lineHeight: '34px' }}>
                                                                <div style={{ cursor: 'pointer' }}>

                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="block-right">
                                                            <div className="avatar-group" style={{ display: 'flex' }}>
                                                                <div className="avatar-block">
                                                                    {task.assigness?.map((mem, index) => {
                                                                        return <span className='user' key={index} >
                                                                            <img src={mem.avatar} alt={mem.avatar} />
                                                                        </span>
                                                                    })}
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            }}

                                        </Draggable>
                                    })}
                                    {provided.placeholder}
                                </div>
                            </div>
                        }
                        }

                    </Droppable>
                })}

        </DragDropContext>
    }
    return (

        <div className="content" style={{ display: 'flex', width: '100%', margin: '0', paddingBottom: '100px' }}>
            {renderCardTaskList()}
        </div>

    )
}



