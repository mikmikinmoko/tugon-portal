import PropTypes from "prop-types";
import { Modal, Typography } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const { Text } = Typography;

const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

const SpinnerModal = ({ isLoading, message }) => {
  return (
    <>
      <Modal
        open={isLoading}
        closable={false}
        footer={null}
        centered
        style={{ borderRadius: "15px" }}
      >
        <Spin indicator={antIcon} />
        <Text style={{ marginLeft: "24px" }}>{message}</Text>
      </Modal>
    </>
  );
};

SpinnerModal.propTypes = {
  isLoading: PropTypes.node,
  message: PropTypes.node,
};

export default SpinnerModal;
