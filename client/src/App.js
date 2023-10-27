import {Routes,Route} from 'react-router-dom';
import {Layout} from './components/Layout.jsx';
import {MainPage} from './pages/MainPage.jsx';
import {PostsPage} from './pages/PostsPage.jsx';
import {PostPage} from './pages/PostPage.jsx';
import {AddPostPage} from './pages/AddPostPage.jsx';
import {EditPostPage} from './pages/EditPostPage.jsx';
import {LoginPage} from './pages/LoginPage.jsx';
import {RegisterPage} from './pages/RegisterPage.jsx'

function App() {
  return (
   // <Layout>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='posts' element={<PostsPage/>}/>
        <Route path=':id' element={<PostPage/>}/>
        <Route path='new' element={<AddPostPage/>}/>
        <Route path='edit' element={<EditPostPage/>}/>
        <Route path='login' element={<LoginPage/>} />
        <Route path='register' element={<RegisterPage/>} />
      </Routes>
    //</Layout>
  );
}

export default App;
