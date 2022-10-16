import React from 'react'
import ReactHtmlParser from 'react-html-parser'

export default function InfoMain(props) {

    const {projectDetail} = props

  return (
    <>
        <section>
             {/* {ReactHtmlParser(projectDetail.description)} */}
        </section>
        <div className='info py-3' style={{display: 'flex'}}>
            <div className="search-block">
                <input className="search" />
                <i className="fa fa-search"></i>
            </div>
            <div className='avatar-group' style={{display: 'flex'}}>
                {/* {renderAvatar()} */}
            </div>
            <div style={{marginLeft:20}} className="text">Only My Issues</div>
            <div style={{marginLeft:20}} className="text">Recently Updated</div>
        </div>
    </>

  )
}
