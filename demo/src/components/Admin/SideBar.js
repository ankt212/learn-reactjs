import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";
import { DiReact } from "react-icons/di";
import sidebarBg from "../../assets/bg2.jpg";
import { NavLink, useNavigate } from "react-router-dom";
const SideBar = (props) => {
  const { image, collapsed, toggled, handleToggleSidebar } = props;
  const navigate = useNavigate();
  return (
    <>
      <ProSidebar
        className="pro-sidebar"
        image={sidebarBg}
        collapsed={collapsed}
        toggled={toggled}
        breakPoint="md"
        onToggle={handleToggleSidebar}
      >
        <SidebarHeader>
          <div
            style={{
              padding: "24px",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: 14,
              letterSpacing: "1px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            <DiReact size={"3em"} color={"00bfff"} />
            <span
              onClick={() => navigate("/admins/manage-users")}
              style={{ cursor: "pointer" }}
            >
              An Peter
            </span>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <Menu iconShape="circle">
            <MenuItem
              icon={<FaTachometerAlt />}
              // suffix={<span className="badge red">New</span>}
            >
              <NavLink className="nav-link" to="/admins">
                Dashboard
              </NavLink>
            </MenuItem>
            {/* <MenuItem icon={<FaGem />}> Component</MenuItem> */}
          </Menu>
          <Menu iconShape="circle">
            <SubMenu
              // suffix={<span className="badge yellow">3</span>}
              // icon={<FaRegLaughWink />}
              icon={<FaGem />}
              title="Features"
            >
              <MenuItem>
                <NavLink className="nav-link" to="/admins/manage-users">
                  Quản lý User
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink className="nav-link" to="/admins/manage-quizzes">
                  Quản lý Bài Quiz
                </NavLink>
              </MenuItem>
              <MenuItem>
                <NavLink className="nav-link" to="/admins/manage-questions">
                  Quản lý Câu Hỏi
                </NavLink>
              </MenuItem>
            </SubMenu>
          </Menu>
        </SidebarContent>

        <SidebarFooter style={{ textAlign: "center" }}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 24px",
            }}
          >
            <a
              href="https://github.com/azouaoui-med/react-pro-sidebar"
              target="_blank"
              className="sidebar-btn"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span
                style={{
                  whiteSpace: "nowrap",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                }}
              >
                View source
              </span>
            </a>
          </div>
        </SidebarFooter>
      </ProSidebar>
    </>
  );
};

export default SideBar;
