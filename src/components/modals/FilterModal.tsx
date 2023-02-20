import { FormControl, InputLabel, MenuItem } from '@mui/material'
import Select from '@mui/material/Select'
import React from 'react'

const FilterModal: React.FC = () => {
  return (
    <div className='absolute top-14 left-3 w-[17em] z-[1000] bg-white rounded shadow'>
        <form className='flex flex-col gap-2 px-5 py-3'>
            <label className='flex flex-col'>
                Organization
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select"
                    >
                    <MenuItem value={10}>Organization</MenuItem>
                    </Select>
                </FormControl>
            </label>
            <label className='flex flex-col'>
                Username
                <input className='input-filter' type="text" placeholder='User' />
            </label>
            <label className='flex flex-col'>
                Email
                <input className='input-filter' type="email" placeholder='Email' />
            </label>
            <label className='flex flex-col'>
                Date
                <input className='input-filter' type="date" placeholder='Date' />
            </label>
            <label className='flex flex-col'>
                Phone Number
                <input className='input-filter' type="text" placeholder='Phone Number' />
            </label>
            <label className='flex flex-col'>
                Status
                <FormControl>
                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                    <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Select"
                    >
                    <MenuItem value={10}>Status</MenuItem>
                    </Select>
                </FormControl>
            </label>
            <div className='flex flex-row justify-evenly'>
                <button className='py-2 px-7 border-2 border-[#545f7d] text-[#545f7d] rounded-lg'>Reset</button>
                <button className='py-2 px-7 bg-[#39cdcc] text-[white] rounded-lg'>Filter</button>
            </div>
        </form>
    </div>
  )
}

export default FilterModal