import { useState } from 'react';
import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const [data, setData ] = useState<any>([])
export const fetchCardsData = () =>{
  axios
  .get('../../mocks/cards')
  .then((res) => {
    console.log(res)
    setData(res.data)
   })
   .catch((err) =>{
    console.log(err)
   })
}
  

