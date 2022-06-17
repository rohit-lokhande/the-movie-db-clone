import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LeatherBoard from "../../component/leatherboard/LeatherBoard";
import { useDispatch, useSelector } from 'react-redux';
import { popularFilter, topRatedFilter, trendingFilter } from "../../model/filter";
import SearchPoster from "../../component/search-poster";
import CategoryView from "../../component/category-view";
import { fetchPopularList, fetchTopRatedList, fetchTrendingList } from "../../redux/action/home-action";

function Home() {
    let navigate = useNavigate();

    const popularState = useSelector((state) => state.home.popular);
    const topRatedState = useSelector((state) => state.home.topRated);
    const trendingState = useSelector((state) => state.home.tranding);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularList(popularFilter[0].id));
        dispatch(fetchTopRatedList(topRatedFilter[0].id));
        dispatch(fetchTrendingList(trendingFilter[0].id));
    }, []);

    const onMovieCardClick = (e, type) => {
        navigate(`/details/${type}/${e}`);
    }

    const onCatrgoryFilterChange = (filter) => {
        dispatch(fetchPopularList(filter.id));
    }

    const onTopRatedFilterChange = (filter) => {
        dispatch(fetchTopRatedList(filter.id));
    }

    const onTrendingFilterChange = (filter) => {
        dispatch(fetchTrendingList(filter.id));
    }

    return (
        <Container>
            <SearchPoster />

            <CategoryView
                title='Whats Popular'
                onFilterChange={onCatrgoryFilterChange}
                onCardClick={onMovieCardClick}
                filter={popularFilter}
                selectedFilter={popularFilter[0]}
                state={popularState} />

            <CategoryView
                title='Top Rated'
                onFilterChange={onTopRatedFilterChange}
                onCardClick={onMovieCardClick}
                filter={topRatedFilter}
                selectedFilter={topRatedFilter[0]}
                state={topRatedState} />

            <CategoryView
                title='Trending'
                onFilterChange={onTrendingFilterChange}
                onCardClick={onMovieCardClick}
                filter={trendingFilter}
                selectedFilter={trendingFilter[0]}
                state={trendingState} />

            <LeatherBoard />
        </Container>
    )
}

export default Home;