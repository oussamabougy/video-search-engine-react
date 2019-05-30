import React from 'react';

class VideoItem extends React.Component {
    render() {
        const { video, onVideoSelect } = this.props
        return (
            <div onClick={() => onVideoSelect(video)} style={styles.videoItem} className="item">
                <img
                    alt={video.snippet.title}
                    style={styles.img}
                    className="ui image"
                    src={video.snippet.thumbnails.medium.url}
                />
                <div className="content">
                    <div className="header">
                        {video.snippet.title}
                    </div>
                    <div className="description">
                        {video.snippet.channelTitle}
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    videoItem: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer'
    },
    img: {
        maxWidth: '180px',
    }
}

export default VideoItem;