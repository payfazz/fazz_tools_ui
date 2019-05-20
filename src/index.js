import React, { PureComponent } from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import store from "./utils/redux";
import Container from "./components/container";
import ContainerItem from "./components/container/container_item";
import NetworkPage from "./pages/network";
import CreateTypePage from "./pages/create_type";

class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <ContainerItem
            label="Network"
            tabIndex={"0"}
            component={NetworkPage}
          />
          <ContainerItem
            label="Create Type"
            tabIndex={"1"}
            component={CreateTypePage}
          />
        </Container>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
