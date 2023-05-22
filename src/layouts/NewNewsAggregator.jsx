import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import { FormControl, FormHelperText, Grid, InputLabel, MenuItem, Select } from '@mui/material';

const NewNewsAggregator = () => {

    const [searchKeyword, setSearchKeyword] = useState('');
    const [news, setNews] = useState([]);
    const [filterOptions, setFilterOptions] = useState({
        date: '',
        category: '',
        source: '',
    });

    useEffect(() => {
        fetchNews();
    }, [filterOptions])

    const handleSearchInputChange = (e) => {
        setSearchKeyword(e.target.value);
    };
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilterOptions((prevState) => ({
            ...prevState,
            [name]: value === '' ? null : value,
        }));
    };
    const fetchNews = async () => {
        try {
            const response = await axios.get('/api/newsguaradian', {
                params: {
                    q: searchKeyword,
                    date: filterOptions.date,
                    category: filterOptions.category,
                    source: filterOptions.source,
                },
            });
            setNews(response.data.response.results);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    };

    console.log(filterOptions)
    return (
        <div>
            <Grid
                container
                alignItems='center'
                justifyContent='center'
            >
                <Grid item>
                    {/* Date Filter */}
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="date-label">Date</InputLabel>
                        <Select
                            labelId="date-label"
                            name="date"
                            value={filterOptions.date}
                            label="Date"
                            onChange={handleFilterChange}
                        >
                            <MenuItem value="">
                                <em>All Dates</em>
                            </MenuItem>
                            <MenuItem value="today">Today</MenuItem>
                            <MenuItem value="this-week">This Week</MenuItem>
                            <MenuItem value="this-month">This Month</MenuItem>
                        </Select>
                        <FormHelperText>Select a date</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid item>
                    {/* Category Filter */}
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="category-label">Category</InputLabel>
                        <Select
                            labelId="category-label"
                            name="category"
                            value={filterOptions.category}
                            label="Category"
                            onChange={handleFilterChange}
                        >
                            <MenuItem value="">
                                <em>All Categories</em>
                            </MenuItem>
                            <MenuItem value="sports">Sports</MenuItem>
                            <MenuItem value="politics"> Politics </MenuItem>
                            {/* <MenuItem value="this-month">This Month</MenuItem> */}
                        </Select>
                        <FormHelperText>Select a category</FormHelperText>
                    </FormControl>
                </Grid>

                <Grid item>
                    {/* Source Filter */}
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="source-label">Source</InputLabel>
                        <Select
                            labelId="source-label"
                            name="source"
                            value={filterOptions.source}
                            label="Source"
                            onChange={handleFilterChange}
                        >
                            <MenuItem value="">
                                <em>All Sources</em>
                            </MenuItem>
                            <MenuItem value="today">Today</MenuItem>
                            <MenuItem value="nytimes">The New York Times</MenuItem>
                            <MenuItem value="guardian">The Guardian</MenuItem>
                        </Select>
                        <FormHelperText>Select a source</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid>
        </div>
    )
}

export default NewNewsAggregator