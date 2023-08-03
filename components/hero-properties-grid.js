import "antd/dist/antd.min.css";
import { Menu, Dropdown, Button } from "antd";
import {
  DownOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  HeartOutlined,
  LeftOutlined,
  LockOutlined,
  MailOutlined,
  PaperClipOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  ReloadOutlined,
  RightOutlined,
  SearchOutlined,
  SendOutlined,
  ShareAltOutlined,
  UserOutlined,
} from "@ant-design/icons";
import PropertiesGridContainer from "./properties-grid-container";
import styles from "./hero-properties-grid.module.css";
const HeroPropertiesGrid = () => {
  return (
    <div className={styles.contents}>
      <div className={styles.container}>
        <div className={styles.sortBy}>
          <div className={styles.options}>
            <img
              className={styles.listbulletsIcon}
              alt=""
              src="/listbullets.svg"
            />
            <img
              className={styles.listbulletsIcon}
              alt=""
              src="/squaresfour.svg"
            />
          </div>
          <div className={styles.text}>Sort by:</div>
          <Dropdown
            overlay={
              <Menu>
                {[
                  { value: "Popular properties" },
                  { value: "Latest properties" },
                  { value: "Recommended properties" },
                ].map((option, index) => (
                  <Menu.Item key={index}>
                    <a onClick={(e) => e.preventDefault()}>
                      {option.value || ""}
                    </a>
                  </Menu.Item>
                ))}
              </Menu>
            }
            placement="bottomLeft"
            trigger={["hover"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              {`Default Order `}
              <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
      <PropertiesGridContainer />
      <div className={styles.pagination}>
        <div className={styles.backArrow}>
          <img className={styles.listbulletsIcon} alt="" src="/arrowleft.svg" />
        </div>
        <div className={styles.div}>
          <div className={styles.div1}>1</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div1}>2</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div1}>3</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div1}>...</div>
        </div>
        <div className={styles.div2}>
          <div className={styles.div1}>54</div>
        </div>
        <div className={styles.forwardArrow}>
          <img
            className={styles.listbulletsIcon}
            alt=""
            src="/arrowright.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroPropertiesGrid;
