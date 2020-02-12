import React, { Component } from 'react';
import './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      listOfTracks: ['Roots Bloody Roots', 'Living On a Prayer', 'You shook me all nigth long', 'Enter Sadman', 'Smells Like Teen Spirit',
        'Jeremy', 'The Final Coutdown', 'I Wanna Rock', 'November Rain', 'The Trooper',
        'Girls Girls Girls', 'Come as you are', 'The Zoo', 'Raining Blood',
        'Send me an angel', 'Back in Black', 'What about love', 'Toxicity',
        'Always', 'Its my life', 'Master of Puppets', 'Sad but true',
        'Rock you like a hurrica', 'Holiday', 'Fear of the dark', 'I want out',
        'Never forget, Never repeat', 'Machine Messiah', 'Dance of death',
        'Brave new World', 'Stone', 'Blaze of Glory', 'Santa Fe', 'Faint', 'In The End',
        'Wanted Dead or Alive', 'The Memory Remains', 'Man in the box', 'Hail to the king'],
      passedTracks: [],
      track: {},
      isShowTrack: false
    }
  }

  render() {
    const { track, isShowTrack } = this.state;
    return (
      <div className="container">
        <h2>What Song Is This ??</h2>
        <button onClick={() => this.getSong()}>Get Music</button>
        {Object.keys(track).length > 0 && isShowTrack && (
          <React.Fragment>
            <div className="track">
              This music is <span style={{ fontStyle: 'italic' }}>{track.name}</span> from album
              <img src={track.album.images[1].url} />
            </div>
          </React.Fragment>
        )}
      </div>
    );
  }
  _generateRandomTrack() {

    const randomName = this.state.listOfTracks[Math.floor(Math.random() * this.state.listOfTracks.length)]

    if (this.state.passedTracks.indexOf(randomName) > -1) {
      return this._generateRandomTrack();
    }
    let newPassedTracks = [...this.state.passedTracks, randomName]
    this.setState({ passedTracks: newPassedTracks })
    return randomName;
  }

  async getSong() {
    const randomTrack = this._generateRandomTrack();
    const token = 'YOUR_TOKEN_HERE';
    const data = await fetch(`https://api.spotify.com/v1/search?q=${decodeURIComponent(randomTrack)}&type=track`,
      { headers: { 'Authorization': 'Bearer ' + token } })
      .then(response => response.json())
      .catch(error => new Error('erro at get characters', error));

    const trackId = data.tracks ? data.tracks.items[0].id : null;

    if (trackId) {
      const track = await fetch(`https://api.spotify.com/v1/tracks/${trackId}`,
        { headers: { 'Authorization': 'Bearer ' + token } })
        .then(response => response.json())
        .catch(error => new Error('erro at get characters', error));

      if (track.preview_url) {
        let player = new Audio(track.preview_url);
        player.play();
        this.setState({ track: track })
        setTimeout(() => {
          this.setState({ isShowTrack: true })
        }, 4000)
        setTimeout(() => {
          player.pause();
          player.currentTime = 0;
          this.setState({ isShowTrack: false })
        }, 10000)
      }
    }
  }
}

export default App;
