import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID i5NTVYabZTFEaM3dJ1fVSVZjc5ek2sFsfSVI_DC-pvk'
  }
});
