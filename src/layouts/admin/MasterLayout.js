import React from "react";
import '../../assets/admin/css/styles.css'
import '../../assets/admin/js/scripts'
import Footer from "./Footer";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import PublicRouter from "../../routes/PublicRouter";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../../components/admin/Dashboard";
import Profile from "../../components/admin/Profile";


const MasterLayout = ()=> {
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">  

                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">
                    <main>
                        <Routes>
                            {/* {routes.map((route,idx) => { 
                                return(
                                    route.component && (
                                        <Route 
                                        key={idx}
                                        path={route.path}
                                        exact={route.exact}
                                        name ={route.name}
                                        render ={(props)=>(
                                            <route.element {...props}/>
                                        )}
                                        />
                                    )
                                )
                            })}
                            <Redirect from="admin" to="/admin/dashboard" />
                             <Route path='/admin' element={<Navigate to='/admin/dashboard' replace />} /> */}
                                {PublicRouter.map((route,index)=>{
                                    const Page = route.component
                                    return (
                                        <Route 
                                        key={index}
                                        path={route.path}
                                        element = {<Page />}
                                        />
                                    )
                                })}
                             

                             {/* <Route path="/dashboard" element={<Dashboard />}/> 
                             <Route path="/profile" element={ <Profile/>}/> */}

                             <Route path="/" element={<Navigate to="/admin/dashboard" replace={true} />} />
                        </Routes>
                    </main>
                    <Footer />
                </div>

            </div>
        </div>
    )
}

export default MasterLayout