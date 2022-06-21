import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState, useRef } from "react";
import { Grid } from "@mui/material";
import MovieCardListView from '../../component/movie_card/MovieCardListView';
import store from '../../redux/store';
import ExpandableContainer from '../../component/expandable-container';
import { useParams, useNavigate } from "react-router-dom";
import { fetchPaginatedList, sortList } from '../../redux/action/pagination-action';
import { Button } from 'react-bootstrap';
import CircularProgress from '@mui/material/CircularProgress';


function ListView(props) {
    const listState = useSelector((state) => state.pagination);
    let { type, filter } = useParams();
    let navigate = useNavigate();

    const [page, setPage] = useState(1);

    const [sortState, setSortState] = useState('1');
    const sortMethods = {
        1: { method: (a, b) => (a.popularity > b.popularity ? 1 : -1) },
        2: { method: (a, b) => (a.popularity < b.popularity ? 1 : -1) },
        3: { method: (a, b) => (a.vote_count > b.vote_count ? 1 : -1) },
        4: { method: (a, b) => (a.vote_count < b.vote_count ? 1 : -1) },
        5: { method: (a, b) => (a.release_date > b.release_date ? 1 : -1) },
        6: { method: (a, b) => (a.release_date < b.release_date ? 1 : -1) },
        7: { method: (a, b) => (a.title > b.title ? 1 : -1) },
        8: { method: (a, b) => (a.title < b.title ? 1 : -1) },

    };
    const dispatch = useDispatch();

    const onLoadMore = () => {
        var currentPage = page + 1;
        setPage(currentPage);
        dispatch(fetchPaginatedList(type, filter, currentPage));

    }



    useEffect(() => {
        console.log('Use effect page : => ', page);
        dispatch(fetchPaginatedList(type, filter, page));

    }, []);

    const onItemClick = (item) => {
        setSortState(item.id);
        let tempData = listState.data.map((todo) => {
            const tempTodo = { ...todo };
            return tempTodo
        });
        var sortedData = tempData.sort(sortMethods[item.id].method);
        dispatch(sortList(sortedData));
        console.log(item);
    }

    const onMovieCardClick = (e) => {
        navigate(`/details/${type}/${e}`);
    }

    return (
        <div>
            {
                (listState.isFetch) ?

                    <div className="content">
                        <div className="content-wrapper">
                            {

                                <div>
                                    <h5>Popular Movies</h5>
                                    <div className="split-container">
                                        <div className="left-pannel">
                                            <ExpandableContainer onItemClick={onItemClick} />

                                        </div>
                                        <div className="right-pannel">

                                            {
                                                listState.data.length
                                            }


                                            <Grid container rowSpacing={4} spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >
                                                {
                                                    listState.data.map((number, index) =>
                                                        <Grid item xs={4} sm={3} md={2.4}>
                                                            <MovieCardListView key={number.id} item={number} data={number} onClick={onMovieCardClick} />
                                                        </Grid>
                                                    )
                                                }
                                            </Grid>

                                            <div className='load-more-view'>
                                                {
                                                    (listState.isLoading) ? <CircularProgress /> : <Button className='btn-load-more' onClick={onLoadMore}>Load More</Button>

                                                }






                                            </div>

                                        </div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>


                    : <div></div>
            }

        </div>
    )
}

export default ListView;