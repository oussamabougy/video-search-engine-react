import React from 'react';
import {
    TextField,
    Button,
    CircularProgress
} from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        term: ''
    }
    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onFormSubmit(this.state.term);
    }
    render() {
        let { loading } = this.props;
        return (
            <div className="search-bar ui segment">
                <form className="" onSubmit={this.onFormSubmit}>
                    <TextField
                        variant="outlined"
                        id="standard-full-width"
                        label="Video Search"
                        placeholder="Placeholder"
                        fullWidth
                        onChange={(e) => this.setState({ term: e.target.value })}
                        value={this.state.term}
                        margin="normal"
                        disabled={loading}
                    />
                    <Button size="large" variant="contained" type="submit" color="primary">
                        {loading ?
                            <CircularProgress size={20} style={{ color: "white" }} />
                            : "Search"
                        }
                    </Button>
                </form>
            </div>
        )
    }
}

export default SearchBar;