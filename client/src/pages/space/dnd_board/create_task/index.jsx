import { useRef } from "react";
import { Form, Input } from "antd";
import { v4 as uuidv4 } from "uuid";

import "../../../../common/ant_form/style.override.css";
import styles from "./style.module.css";

export const CreateTask = ({ setIsCreateTask }) => {
  const uniqueId = uuidv4();
  let formRef = useRef(null);

  const onFinish = (values) => {};
  const onFinishFailed = (errorInfo) => {};

  return (
    <div className={styles.createTaskWrapper}>
      <Form
        name="basic"
        id={`sui-form-${uniqueId}`}
        ref={formRef}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="on"
        className="formValidation"
      >
        <Form.Item
          name="message"
          rules={[
            {
              required: true,
              message: "Type your task !",
            },
          ]}
        >
          <Input.TextArea placeholder="What needs to be done?" name="message" />
        </Form.Item>

        <Form.Item>
          <div className={styles.btnWrapper}>
            <button htmlType="submit">Create</button>
            <button
              className={styles.cancelBtn}
              onClick={() => setIsCreateTask(false)}
            >
              Cancel
            </button>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
