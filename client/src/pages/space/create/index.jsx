import { useRef, useState } from "react";
import { Button, Form, Input } from "antd";
import { BsPlus } from "react-icons/bs";
import { v4 as uuidv4 } from "uuid";
import { RxCross2 } from "react-icons/rx";

import styles from "./style.module.css";
import "../../../common/ant_form/style.override.css";

export const CreateSpace = ({
  onClose,
  onFinish,
  isLoading,
  onFinishFailed,
  className,
  placeholder,
}) => {
  const uniqueId = uuidv4();
  let formRef = useRef(null);

  return (
    <div className={`${styles.createSpace} ${className}`}>
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
        className={`formValidation`}
      >
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              type: "text",
            },
          ]}
        >
          <Input placeholder={placeholder} />
        </Form.Item>

        <Form.Item>
          <div className={styles.btnWrapper}>
            <Button
              type="primary"
              loading={isLoading}
              htmlType="submit"
              className={styles.craeteBtn}
            >
              {!isLoading && <>Create</>}
            </Button>
            <div className={styles.cancelBtn} onClick={() => onClose(false)}>
              <RxCross2 />
            </div>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};
