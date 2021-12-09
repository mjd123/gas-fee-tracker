import React from "react";
import "./App.css";
import { Row, Col, Layout, Card } from "antd";

const { Content } = Layout;

function App() {
  return (
    <div className="App">
      <Layout>
        <Content style={{ width: "100%", padding: "10px 5px" }}>
          <Row
            gutter={[12, 8]}
            style={{ width: "100%", height: "100%", margin: "0 0" }}
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
