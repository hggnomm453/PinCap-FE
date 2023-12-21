import axios from "axios"

const baseUrl = "http://localhost:8000"

export const login = async (data) => {
    var config = {
        method: 'post',
        url: `${baseUrl}/api/auth/login`,
        headers: { 
          'Content-Type': 'application/json', 
        },
        data : data
      };
      
      try {
        const response = await axios(config);
        return response.data
      } catch (error) {
        console.log(error);
      }
}