import Base from "./components/base/Base";
import About from "./components/about/About";
import Error from "./components/Error";

export default [
    {path: "/", exact: true, component: Base},
    {path: "/about", exact: false, component: About},
    {path: "*", exact: false, component: Error},
];
