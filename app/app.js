import "./styles/app.scss";
import ProgressBar from "./components/Test";

alert("from webpack");

if (module.hot) {
  module.hot.accept();
}
