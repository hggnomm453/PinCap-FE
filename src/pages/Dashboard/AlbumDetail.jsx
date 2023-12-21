import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Button, Col, Layout, Row, Card, Table, Space, Tag } from "antd";
import {
  Link,
  Route,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

const baseURL = "http://localhost:8000/api";
const AlbumDetail = () => {
  const [detailAlbum, setDetailAlbum] = useState(null);
  const [medias, setMedias] = useState({
    id: "",
    mediaURL: "",
    mediaName: "",
    privacy: "",
    type: "",
    description: "",
    isDeleted:""
  });
  const { id } = useParams();
  const getDetailAlbum = async () => {
    try {
      const response = await axios.get(baseURL + "/album/" + id);
      setDetailAlbum(response.data.detailAlbum);
      setMedias(response.data.detailAlbum.medias);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    getDetailAlbum();
  }, []);

  
  const columns = [
    {
      title: "Media",
      key: "mediaURL",
      dataIndex: "mediaURL",
    },
    {
      title: "Album name",
      dataIndex: "mediaName",
      key: "mediaName",
    },
    {
      title: "Privacy",
      dataIndex: "privacy",
      key: "privacy",
        render: (text, record) => (
          <span style={{ color: text === "PRIVATE" ? "red" : "blue" }}>
            {text}
          </span>
        ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Link to={`/dashboard/album/${record.id}`}>Media Detail</Link>
          <a>Delete</a>

        </Space>
      ),
    },
  ];    


  return (
    <Layout className="main-layout">
      <Sidebar className="sidebar-layout" />
      <Row className="home-layout">
        <Header />
        {medias != null && medias.length > 0  && (
        <>
          <Table
            style={{ margin: "15px 30px" }}
            columns={columns}
              dataSource={medias}
            rowKey={"id"}
          />
        </>
         )} 
      </Row>
    </Layout>
  );
};

export default AlbumDetail;
