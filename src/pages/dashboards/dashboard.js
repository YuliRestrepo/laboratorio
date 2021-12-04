import React from "react";

import Header from "../../components/header";
import Navs from "../../components/admin/navs";
import Estadisticas from "../../components/admin/estadistica";

const Dashboard = () => {
    return <>
        <Header />
        <Navs />
        <Estadisticas />
    </>;
};

export default Dashboard;