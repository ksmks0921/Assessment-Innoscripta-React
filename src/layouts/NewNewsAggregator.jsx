import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import { Button, Card, CardActions, CardContent, CardMedia, FormControl, FormHelperText, Grid, IconButton, InputBase, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

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
    const fetchNews = async (e) => {
        e.preventDefault();
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
    console.log(searchKeyword)
    return (
        <div>
            <Grid
                container
                alignItems='center'
                justifyContent='center'
                spacing={2}
                xs={12}
                // sx={{marginTop: "20px", marginLeft: "0px"}}
                sx={{ margin: "20px auto" }}
            >
                <Grid
                    container
                    item
                    alignItems='center'
                    justifyContent='center'
                    sx={{ paddingRight: "16px" }}
                >
                    <Paper
                        component="form"
                        onSubmit={fetchNews}
                        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                    >
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search articles by keyword"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            value={searchKeyword}
                            onChange={handleSearchInputChange}
                        />
                        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                    </Paper>
                </Grid>

                {/* Filter container */}
                <Grid
                    container
                    item
                    alignItems='center'
                    justifyContent='center'
                    xs={12}
                    sx={{ paddingRight: "16px", justifyContent: { xs: 'left', sm: 'center' } }}
                >

                    {/* Date Filter */}
                    <Grid item>
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

                    {/* Category Filter */}
                    <Grid item>
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
                                <MenuItem value="health"> Health </MenuItem>
                                <MenuItem value="science"> Science </MenuItem>
                                <MenuItem value="business"> Business </MenuItem>
                            </Select>
                            <FormHelperText>Select a category</FormHelperText>
                        </FormControl>
                    </Grid>

                    {/* Source Filter */}
                    <Grid item>
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
                                <MenuItem value="news-api">News</MenuItem>
                                <MenuItem value="nytimes">The New York Times</MenuItem>
                                <MenuItem value="guardian">The Guardian</MenuItem>
                            </Select>
                            <FormHelperText>Select a source</FormHelperText>
                        </FormControl>
                    </Grid>
                </Grid>
            </Grid>

            <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                {news.map((article, index) => (
                    <div key={index} className="bg-white shadow-md p-4">
                        <h2 className="text-xl font-bold mb-2">{article.webTitle}</h2>
                        <p className="text-gray-600 mb-4">{article.sectionName}</p>
                        <a href={article.webUrl} className="text-blue-500 hover:text-blue-700">
                            Read More
                        </a>
                    </div>
                ))}


                <Grid item xs={12}>
                    <Typography variant="h4" align='center'>
                        News With Images
                    </Typography>
                    <hr />
                </Grid>

                {/* Example Contents */}

                <Grid
                    item
                    container
                    xs={12}
                    spacing={4}
                    alignItems='center'
                    justifyContent='center'
                // sx={{ justifyContent: { sm: 'left', xs: 'center', md: 'center' },}}
                >

                    <Grid item xs={10} sm={5} md={3.5} lg={2.5}>
                        <Card sx={{ width: "inherit", }}>
                            <CardMedia
                                sx={{ height: 100 }}
                                image="https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Article Web Title
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Article Section name
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button component={Link} to={'/login'} size="small" variant="contained">Read More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={10} sm={5} md={3.5} lg={2.5}>
                        <Card sx={{ width: "inherit", }}>
                            <CardMedia
                                sx={{ height: 100 }}
                                image="https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Article Web Title
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Article Section name
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button component={Link} to={'/login'} size="small" variant="contained">Read More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={10} sm={5} md={3.5} lg={2.5}>
                        <Card
                            sx={{
                                width: "inherit",
                                // maxWidth: 345
                            }}>
                            <CardMedia
                                sx={{ height: 100 }}
                                image="https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Article Web Title
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Article Section name
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button component={Link} to={'/login'} size="small" variant="contained">Read More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={10} sm={5} md={3.5} lg={2.5}>
                        <Card
                            sx={{
                                width: "inherit",
                                // maxWidth: 345
                            }}>
                            <CardMedia
                                sx={{ height: 100 }}
                                image="https://res.cloudinary.com/demo/image/upload/v1312461204/sample.jpg"
                                title="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Article Web Title
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Article Section name
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button component={Link} to={'/login'} size="small" variant="contained">Read More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>


                {/***************  SECOND EXAMPLE DATA *****************/}


                <Grid item xs={12}>
                    <Typography variant="h4" align='center'>
                        News Without Images
                    </Typography>
                    <hr />
                </Grid>

                {/* Example Contents */}

                <Grid
                    item
                    container
                    xs={12}
                    spacing={4}
                    alignItems='center'
                    justifyContent='center'
                // sx={{ justifyContent: { sm: 'left', xs: 'center', md: 'center' },}}
                >
                    <Grid item xs={10} sm={5} md={3.5} lg={2.5}>
                        <Card sx={{ width: "inherit" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Article Web Title
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Article Section name
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <Button component={Link} to={'/login'} size="small" variant="contained">Read More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={10} sm={5} md={3.5} lg={2.5}>
                        <Card sx={{ width: "inherit" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Article Web Title
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Article Section name
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <Button component={Link} to={'/login'} size="small" variant="contained">Read More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={10} sm={5} md={3.5} lg={2.5}>
                        <Card sx={{ width: "inherit" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Article Web Title
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Article Section name
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <Button component={Link} to={'/login'} size="small" variant="contained">Read More</Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={10} sm={5} md={3.5} lg={2.5}>
                        <Card sx={{ width: "inherit" }}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Article Web Title
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Article Section name
                                </Typography>
                            </CardContent>
                            <CardActions>
                            <Button component={Link} to={'/login'} size="small" variant="contained">Read More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>


            </Grid>
        </div>
    )
}

export default NewNewsAggregator