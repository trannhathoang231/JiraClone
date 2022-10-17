import React,{useEffect} from "react";
import { Editor } from "@tinymce/tinymce-react";
import { withFormik } from "formik";
import * as Yup from 'yup'
import {connect, useSelector, useDispatch} from 'react-redux' //co the dung connect hoac useSelector de lay du lieu ve
import { projectCategoryAction } from "../../../redux/action/ProjectCategoryAction";
import { createProjectAction } from "../../../redux/action/ProjectCyberBugsAction";

function CreateProject(props) {

    const arrProjectCategory = useSelector(state => state.ProjectCategoryReducer.arrProjectCategory)
    
    const dispatch = useDispatch();

    // console.log('arrProjectCategory',arrProjectCategory);

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setFieldValue
    } = props

    useEffect(()=> {
        //Goi api de lay du lieu the select
       dispatch(projectCategoryAction())
    },[])

    const handleEditorChange = (content, editor) => {
        setFieldValue('description',content)
    }

  return (
    <div className="container mt-5">
      <h3>Create Project</h3>
      <form className="container" onSubmit={handleSubmit} onChange={handleChange}>
        <div className="form-group">
          <p>Name</p>
          <input className="form-control" name="projectName" />
        </div>
        <div className="form-group">
          <p>Description</p>
          <Editor

            name ='description'
        
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | " +
                "bold italic backcolor | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | help",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={handleEditorChange}
          />
         
        </div>
        <div className="form-group">
          <select name="categoryId" className="form-control" onChange={handleChange}>
            {arrProjectCategory.map((item,index)=> {
                return <option value={item.id} key={index}>{item.projectCategoryName}</option>
            })}
          </select>
        </div>
        <button className="btn btn-outline-primary" type="submit" onSubmit={handleSubmit}>
          Create project
        </button>
      </form>
    </div>
  );
}

const createProjectForm = withFormik({
    enableReinitialize:true, //moi lan props cua redux thay doi thi lap tuc binding lai nhung gia tri tren object
    mapPropsToValues: (props) => {

        console.log('propsvalue',props)

            return{
            projectName:'',
            description:'',
            categoryId:props.arrProjectCategory[0]?.id,
        }
    },
    validationSchema: Yup.object().shape({

    }),
    handleSubmit: (values, { props , setSubmitting}) => {
        // console.log('values',values);
        setSubmitting(true);
        props.dispatch(
            // {
            // type:'CREATE_PROJECT_JIRA',
            // newProject:values}
            createProjectAction(values))
    },
    displayName: 'createProjectFormik',
})(CreateProject);

const mapStateToProps = (state) => {
    return{
        arrProjectCategory: state.ProjectCategoryReducer.arrProjectCategory
    }
}

export default connect(mapStateToProps)(createProjectForm)