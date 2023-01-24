import { BrowserRouter, Route, Routes } from  "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { DashBoard } from "./components/DashBoard";
import { TaskForm } from "./components/TaskForm";
import { Tasklist } from "./components/Tasklist";



function App() {
  return (
    <>
       <BrowserRouter>
         <NavigationBar></NavigationBar>
         <Routes>
           <Route path="/" element = { <DashBoard /> }></Route>
           <Route path="/create-task" element={<TaskForm />}></Route>
           <Route path="/tasks" element={<Tasklist />}></Route>
         </Routes>
       </BrowserRouter>
    </>
  );
}

export default App;
