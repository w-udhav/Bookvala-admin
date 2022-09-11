import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import axios from 'axios'
import React from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect } from 'react';
import { useState } from 'react';
import { serverURL } from '../App'
import { setGlobalState, useGlobalState } from '../GlobalState';

const ListSelector = () => {

  const [main, setMain] = useState([])
  const [sub, setSub] = useState([])
  const [date, setDate] = useState(null);

  const getMainCategory = () => {
    axios.get(`${serverURL}/api/getmaincategory`)
      .then((res) => {
        setMain(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  const getSubCategory = (e) => {
    axios.get(`${serverURL}/api/getsubcategory/${e}`)
      .then((res) => {
        setSub(res.data)
      })
  }

  useEffect(() => {
    getMainCategory();
  }, [])

  return (
    <div className='border-zinc-400 box-border border-b pb-4 my-4 flex justify-end'>
      <div className='w-[40%] flex flex-row items-center justify-between  space-x-5'>
        <div className='flex-1'>
          <FormControl fullWidth>
            <InputLabel id='mainCate'> Main Category </InputLabel>
            <Select
              labelId='mainCate'
              label='Main Category'
              defaultValue=""
              onChange={(e) => {
                if (e.target.value == -1) {
                  setSub([]);
                  setGlobalState("category", -1)
                  return;
                }
                getSubCategory(e.target.value)
              }}
            >
              <MenuItem value={-1}> None </MenuItem>
              {
                main.map((e) => {
                  return (
                    <MenuItem key={e.id} value={e.id}> {e.cat_name} </MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
        </div>
        <div className='flex-1'>
          <FormControl fullWidth>
            <InputLabel id='mainCate'> Sub Category </InputLabel>
            <Select
              labelId='mainCate'
              label='Sub Category'
              defaultValue=""
              onChange={(e) => { setGlobalState("category", e.target.value) }}
            >
              {
                sub.map((e) => {
                  return (
                    <MenuItem key={e.cat_id} value={e.cat_id} > {e.cat_name} </MenuItem>
                  )
                })
              }
            </Select>
          </FormControl>
        </div>
        <div className='flex-1'>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Select Date"
              value={date}
              onChange={(e) => setDate(e)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>
    </div>
  )
}



export default ListSelector