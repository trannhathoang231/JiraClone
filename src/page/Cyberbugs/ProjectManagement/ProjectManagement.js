import { Button, Space, Table } from "antd";
import React, { useState, useEffect } from "react";
import ReactHtmlParser from "react-html-parser";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import FormEditProject from "../../../component/Forms/FormEditProject/FormEditProject";

export default function ProjectManagement(props) {
  //lấy dữ liệu từ reducer
  const projectList = useSelector(state => state.ProjectCyberBugsReducer.projectList);
  
  // sử dụng useDispatch để gọi action
  const dispatch = useDispatch();
  const [state, setState] = useState({
    filteredInfo: null,
    sortedInfo: null,
  });

  useEffect(() => {
    dispatch({ type: "GET_LIST_PROJECT_SAGA" });
  }, []);

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
    },
    {
      title: "projectName",
      dataIndex: "projectName",
      key: "projectName",
    },
    {
      title: "description",
      dataIndex: "description",
      key: "description",
      render: (text, record, index) => {
        let jsxContent = ReactHtmlParser(text);

        return <div key={index}>{jsxContent}</div>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text, record, index) => {
        return (
          <div>
            <button className="btn mr-2 btn-primary" onClick={()=> {
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
    <div className="container-fluid mt-5">
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

