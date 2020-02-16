import React from 'react';
import { Grid } from '@material-ui/core';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null,
        loading: false
    };

    componentDidMount() {
        this.onFormSubmit('space');
    }
    onFormSubmit = async (term) => {
        this.setState({ loading: true });
        try { 
            const response = await youtube.get('/search', {
                params: {
                    q: term
                }
            });
            this.setState({
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            })
        } catch (error) {
                console.log(error.message);
        }
        this.setState({ loading: false });
    }

    onVideoSelect = (selectedVideo) => {
        this.setState({ selectedVideo })
    }
    render() {
        return (
            <div className="ui container">
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <SearchBar loading={this.state.loading} onFormSubmit={this.onFormSubmit} />
                    </Grid>
                    <Grid item xs={12} sm={8}>
                        <VideoDetail video={this.state.selectedVideo} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default App;