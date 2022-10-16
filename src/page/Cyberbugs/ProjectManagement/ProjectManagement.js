import { Button, Space, Table, Tag, Divider } from "antd";
import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import FormEditProject from "../../../component/Forms/FormEditProject/FormEditProject";
import axios from 'axios'
import { DOMAIN_CYBERBUG } from "../../../ulti/constants/settingSystem";
import { getAllProjectAction } from "../../../redux/action/ProjectCyberBugsAction";
export default function ProjectManagement(props) {
  //lấy dữ liệu từ reducer
  const {projectList} = useSelector(state => state.ProjectCyberBugsReducer);

  // sử dụng useDispatch để gọi action
  const dispatch = useDispatch();

  console.log(projectList, 'projectlist')
  const [state, setState] = useState({
    filteredInfo: null,
    sortedInfo: null,
  });

  useEffect(() => { 
      dispatch(getAllProjectAction())
   },[])


  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  const clearFilters = () => {
    setState({ setFilteredInfo: null });
  };

  const clearAll = () => {
    setState({
      filteredInfo: null,
      setSortedInfo: null,
    });
  };

  const setAgeSort = () => {
    setState({
      setSortedInfo: {
        order: "descend",
        columnKey: "age",
      },
    });
  };

  let { sortedInfo, filteredInfo } = state;
  sortedInfo = sortedInfo || {};
  filteredInfo = filteredInfo || {};

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
      //!sorter
      // sorter:(item1,item2) =>{
      //   return Number(item2.id - item1.id)
      // },
      // sortDirections:['descend']
    },
    {
      title: "projectName",
      dataIndex: "projectName",
      key: "projectName",
      //!sorter
      // sorter: (item2,item1) =>{
      //   let projectName1 = item1.projectName?.trim().toLowerCase();
      //   let projectName2 = item2.projectName?.trim().toLowerCase();
      //   if(projectName2 < projectName1) {
      //       return -1;
      //   }
      //   return 1;
      // },

    },
    {
      title:'category',
      dataIndex:'categoryName',
      key:'categoryId',
      //!sorter
      // sorter: (item2,item1) =>{
      //   let categoryName1 = item1.categoryName?.trim().toLowerCase();
      //   let categoryName2 = item2.categoryName?.trim().toLowerCase();
      //   if(categoryName2 < categoryName1) {
      //       return -1;
      //   }
      //   return 1;
      // },
    },
    {
      title:'members',
      // dataIndex:'name',
      key:'userId',
      render(text,record,index){
         return record.members.map((item,i) => {
           return <Tag key={i} color='green' style={{display:'inline-block'}}>{item.name}</Tag>
           })
        }
       //!sorter
      // sorter: (item2,item1) =>{
      //   let creator1 = item1.creator.name?.trim().toLowerCase();
      //   let creator2 = item2.creator.name?.trim().toLowerCase();
      //   if(creator2 < creator1) {
      //       return -1;
      //   }
      //   return 1;
      // },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record, index) => {
        return (
          <div>
            <button className="btn mr-2 btn-primary" onClick={() => {
              const action = {
                type: 'OPEN_FORM_EDIT_PROJECT',
                Component: <FormEditProject />
              }

              //dispatch len reducer noi dung drawer
              dispatch(action)
            }}>
              <EditOutlined style={{ fontSize: 17 }} />
            </button>
            <button className="btn btn-danger">
              <DeleteOutlined style={{ fontSize: 17 }} />
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <div className="container mt-5">
      <h3>Project Management</h3>
      <Space
        style={{
          marginBottom: 16,
        }}
      >
        <Button onClick={setAgeSort}>Sort age</Button>
        <Button onClick={clearFilters}>Clear filters</Button>
        <Button onClick={clearAll}>Clear filters and sorters</Button>
      </Space>
      <Table
        columns={columns}
        rowKey={"id"}
        dataSource={projectList}
        onChange={handleChange}
      />
    </div>
  );
}

