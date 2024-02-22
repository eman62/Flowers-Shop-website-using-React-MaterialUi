
import './App.css'

import FlowersSection from './components/flowersSection';
import AppBar1 from './components/navbar';
import AppBar2 from './components/navBar2';
import { BrowserRouter as Router } from 'react-router-dom';
import Section1 from './pages/section1';
import OurServicesPage from './pages/ourServices';
import CategoriesPage from './pages/categories';
import PostersPage from './pages/posters';
import InstaImagesPage from './pages/instaImages';
import ClientsPage from './pages/clients';
import Footer from './components/footer';
import BlogsPage from './pages/plogs';



function App() {
  return (
    <>
    <Router>
      
      <AppBar1></AppBar1>
      <AppBar2></AppBar2>
      <Section1></Section1>
      <OurServicesPage></OurServicesPage>
      <CategoriesPage></CategoriesPage>
      <FlowersSection></FlowersSection>
      <PostersPage></PostersPage>
      <InstaImagesPage></InstaImagesPage>
      <ClientsPage></ClientsPage>
      <BlogsPage></BlogsPage>
      <Footer></Footer>
      </Router>
    </>
  )
}

export default App
