import React from 'react';
import { Editor } from '@tinymce/tinymce-react'  
import { Select, Slider } from 'antd';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getListProjectAction, getAllTaskType, getAllPriority } from './../../../redux/action/ProjectCyberBugsAction';
import { getAllUser } from './../../../redux/action/UserCyberBugsAction';

const { Option } = Select;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

export default function FormCreateTask(props) {
  const { arrProject } = useSelector(state => state.ProjectCyberBugsReducer);
  const { arrTaskType } = useSelector(state => state.ProjectCyberBugsReducer);
  const { arrPriority } = useSelector(state => state.ProjectCyberBugsReducer);
  const { userSearch } = useSelector(state => state.UserLoginCyberBugsReducer);
  console.log('userSearch', userSearch);
  // const userOption = userSearch.map((item, index) => {
  //   console.log('userOption', userOption);
  //   return { value: item.userId, label: item.name }
  // })

  const dispatch = useDispatch();

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    setValues,
    setFieldValue
  } = props;

  const handleEditorChange = (content, editor) => {
    setFieldValue('description', content)
  }

  const [timeTracking, setTimetracking] = useState({
    timeTrackingSpent: 0,
    timeTrackingRemaining: 0
  });

  useEffect(() => {
    const action = getListProjectAction();
    dispatch(action);

    const action2 = getAllTaskType();
    dispatch(action2);

    const action3 = getAllPriority();
    dispatch(action3);
  }, []);

  return (
    <div className='container'>
      <div className='form-group'>
        <p>Project</p>
        <select name="projectId" className='form-control' >
          {arrProject.map((project, index) => {
            return <option key={index} value={project.id}>{project.projectName}</option>
          })}
        </select>
      </div>
      <div className='form-group'>
        <div className='row'>
          <div className='col-6'>
            <p>Priority</p>
            <select name="priorityId" className='form-control' >
              {arrPriority.map((priority, index) => {
                return <option key={index} value={priority.priorityId}>{priority.priority}</option>
              })}
            </select>
          </div>
          <div className='col-6'>
            <p>Task type</p>
            <select name="typeId" className='form-control' >
              {arrTaskType.map((taskType, index) => {
                return <option key={index} value={taskType.id}>{taskType.taskType}</option>
              })}
            </select>
          </div>
        </div>
      </div>

      <div className='form-group'>
        <div className='row'>
          <div className='col-6'>
            <p>Assignees</p>
            <Select
              mode="tags"
              placeholder="Please select"
              // options={userOption}
              optionFilterProp='label'
              onChange={handleChange}
              onSearch={(value) => {
                const action4 = getAllUser(value);
                dispatch(action4);
              }}
              style={{
                width: '100%',
              }}
            >
              {children}
            </Select>
            <div className="row mt-3">
              <div className="col-12">
                <p>Original Estimate</p>
                <input type='number' className="form-control" defaultValue='0' min='0' name='originalEstimate' />
              </div>
            </div>
          </div>
          <div className="col-6">
            <p>Time tracking</p>
            <Slider defaultValue={30} tooltip={{ open: true, }} value={timeTracking.timeTrackingSpent} max={Number(timeTracking.timeTrackingRemaining) + Number(timeTracking.timeTrackingSpent)} />
            <div className="row">
              <div className="col-6 text-left font-weight-bold">{timeTracking.timeTrackingSpent}h logged</div>
              <div className="col-6 text-right font-weight-bold">{timeTracking.timeTrackingRemaining}h remaining</div>
            </div>
            <div className="row" style={{ marginTop: 3 }}>
              <div className="col-6">
                <p>Time spent</p>
                <input type='number' className="form-control" defaultValue='0' min='0' name='timeTrackingSpent' onChange={(e) => {
                  setTimetracking({
                    ...timeTracking,
                    timeTrackingSpent: e.target.value
                  })
                }} />
              </div>
              <div className="col-6">
                <p>Time remaining</p>
                <input type='number' className="form-control" defaultValue='0' min='0' name='timeTrackingRemaining' onChange={(e) => {
                  setTimetracking({
                    ...timeTracking,
                    timeTrackingRemaining: e.target.value
                  })
                }} />
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className='form-control'>
        <p>Description</p>
        <Editor
          name="description"
          // initialValue={values.priorityId}
          init={{
            selector: "textarea#myTextArea",
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | bold italic backcolor |  alignleft aligncenter alignright alignjustify |  bullist numlist outdent indent | removeformat | help",
          }}
          onEditorChange={handleEditorChange}
        />
      </div>
    </div>
  )
}
