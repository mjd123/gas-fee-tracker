import React from "react";
import "./App.css";
import { Row, Col, Layout, Card } from "antd";
import useAxios from "./hooks/useAxios";

const { Content } = Layout;

function App() {
  const { isLoading, apiData } = useAxios();

  return (
    <div className="App">
      <Layout>
        <Content style={{ width: "100%", padding: "10px 5px" }}>
          <Row
            gutter={[12, 8]}
            style={{ width: "100%", height: "100%", marginLeft: "0" }}
            justify="space-around"
            align="middle"
          >
            <Col span={12}>
              <Card>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>

            <Col span={12}>
              <Card>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
            <Col span={12}>
              <Card>
                <p>Card content</p>
                <p>Card content</p>
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
