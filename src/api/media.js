import axios from "axios"

const baseUrl = "https://localhost:8000"

export const getMedia = async () => {
    const token = localStorage.getItem('token')

    const config = {
      method: 'get',
      url: `${baseUrl}/api/Media`,
      headers: { 
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json', 
      }
    }
    try {
      const res = await axios(config)
      return res.data
    } catch (error) {
      console.log(error)
    }
}