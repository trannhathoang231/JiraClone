import React from "react";
import {  notification } from "antd";

export default function Notification(props) {
    
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Notification Title",
      description: "This is the content of the notification",
    });
  };

  return <div></div>;
}
