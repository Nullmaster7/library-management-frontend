import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserListPage from './pages/UserListPage';
import BookListPage from './pages/BookListPage';
import UserDetailPage from './pages/UserDetailPage';
import BookDetailPage from './pages/BookDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/users" element={<UserListPage />} />
        <Route path="/users/:id" element={<UserDetailPage />} />
        <Route path="/books" element={<BookListPage />} />
        <Route path="/books/:id" element={<BookDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
