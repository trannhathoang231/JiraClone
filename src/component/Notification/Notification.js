import React from "react";
import { Button, notification, Space } from "antd";

import { useDispatch, useSelector } from "react-redux";

export default function Notification(props) {
    
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Notification Title",
      description: "This is the content of the notification",
    });
  };

  return <div></div>;
}
