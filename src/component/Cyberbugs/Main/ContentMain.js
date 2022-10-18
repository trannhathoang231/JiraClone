import React from 'react'

export default function ContentMain(props) {

    const {projectDetail} = props;

    const renderCardTaskList = () => {
        return projectDetail.lstTask?.map((taskListDt,index)=> {
            return <div key={index} className="card" style={{ width: '25%', height: '25rem' }}>
            <div className="card-header">
                BACKLOG 3
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item" data-toggle="modal" data-target="#infoModal" style={{ cursor: 'pointer' }}>
                    <p>
                        Each issue has a single reporter but can have multiple
                        assignees
                    </p>
                    <div className="block" style={{ display: 'flex' }}>
                        <div className="block-right">
                            <div className="avatar-group" style={{ display: 'flex' }}>
                                <div className="avatar-block">
                                    <img src="https://res.cloudinary.com/fpt-food/image/upload/v1639680442/FPT%20FOOD/Jira_Bugs_Clone/ironman_tvda3m.jpg" alt="avatar.jpg" />
                                </div>
                                <div className="avatar-block">
                                    <img src="https://res.cloudinary.com/fpt-food/image/upload/v1639680442/FPT%20FOOD/Jira_Bugs_Clone/spiderman_z2e5kw.jpg" alt="avatar.jpg" />
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ width: 24, height: 24, lineHeight: '34px' }}>
                                <div style={{ cursor: 'pointer' }}>
                                    <i className="fa fa-bookmark" style={{ fontSize: 18 }} />
                                </div>
                            </div>
                            <div style={{ width: 24, height: 24, lineHeight: '34px' }}>
                                <div style={{ cursor: 'pointer' }}>
                                    <i className="fa fa-arrow-up" style={{ fontSize: 18 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
        })
    }

    return (
        
        <div className="content" style={{ display: 'flex',width:'fit-content',width:'100%',margin:'0'}}>

            {renderCardTaskList()}
        </div>
    )
}



