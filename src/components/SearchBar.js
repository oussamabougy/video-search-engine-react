import React from 'react';
import {
    TextField,
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
                    />
                </form>
            </div>
        )
    }
}

export default SearchBar;