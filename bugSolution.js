```javascript
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userId" element={<UserPage />} />
        {/* ... other routes ... */}
      </Routes>
    </BrowserRouter>
  );
}

function UserPage() {
  const { userId } = useParams();
  return (
    <div>
      <h1>User Profile</h1>
      <UserProfile userId={userId} />
    </div>
  );
}

function UserProfile({ userId }) {
  return (
    <div>
      <h2>User ID: {userId}</h2>
      {/* ... other user profile details ... */}
    </div>
  );
}

export default App;
```