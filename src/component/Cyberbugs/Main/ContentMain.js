import React from 'react'
import './ContentMain.css'

export default function ContentMain(props) {

    const { projectDetail } = props;
    console.log(projectDetail, 'tasklist')
    const renderCardTaskList = () => {
        return projectDetail.lstTask?.map((taskListDt, index) => {
            return <div key={index} className="card pb-5" style={{ width: '25%', height: 'auto', boxShadow: ' rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                <div className="card-header">
                    BACKLOG 3
                </div>
                <ul className="list-group list-group-flush">
                    {taskListDt.lstTaskDeTail?.map((task, index) => {
                        console.log(task, 'lstTask')
                        return <li key={index} className="list-group-item" data-toggle="modal" data-target="#infoModal" style={{ cursor: 'pointer' }}>
                            <p>
                                {task.taskName}
                            </p>
                            <div className="block" style={{ display: 'flex' }}>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <div style={{ width: 'auto', height: 24, lineHeight: '34px' }}>
                                        <div style={{ cursor: 'pointer' }}>
                                           <span style={{fontWeight:'bold',color:'#d40000',fontSize:'0.8rem'}}>{task.priorityTask.priority}</span>
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
                        </li>
                    })}


                </ul>
            </div>
        })
    }

    return (

        <div className="content" style={{ display: 'flex', width: '100%', margin: '0', paddingBottom: '100px' }}>
            {renderCardTaskList()}
        </div>

    )
}



