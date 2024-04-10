
const baseURL = "https://badak-admin-portal-backend.onrender.com"
// Function to authenticate user credentials by making an API call
export const authenticateUser = async (username, password) => {
    try {
      // Make an API call to backend endpoint for authentication
      const response = await fetch(`${baseURL}/api/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });
  
      if (!response.ok) {
        throw new Error('Failed to authenticate user');
      }
  
      const data = await response.json();
  
      // Check if the response contains user data or an error message
      if (data.error) {
        // Authentication failed, return null
        return null;
      } else {
        // Authentication successful, return user role
        return data;
      }
    } catch (error) {
      console.error("Error authenticating user:", error);
      throw error; // Throw error if authentication fails
    }
  };
  