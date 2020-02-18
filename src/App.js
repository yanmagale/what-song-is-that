import React, { Component } from 'react';
import './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      listOfTracks: {
        'Sepultura': {
          finished: false,
          songs: ['Roots Bloody Roots']
        },
        'Bon Jovi': {
          finished: false,
          songs: ['Living On a Prayer', 'Always', 'Its My Life', 'Wanted Dead or Alive', 'You Give Love a Bad Name']
        },
        'Iron Maiden': {
          finished: false,
          songs: ['The Trooper', 'Fear of the dark', 'Brave New World', 'Run to the Hills']
        },
        'Nirvana': {
          finished: false,
          songs: ['Smells Like Teen Spirit', 'Come as You Are']
        },
        'AC/DC': {
          finished: false,
          songs: ['You shook me all nigth long', 'Back in Black']
        },
        'Metallica': {
          finished: false,
          songs: ['Enter Sadman', 'Master of Puppets', 'Sad but true']
        },
        'Pearl Jam': {
          finished: false,
          songs: ['Jeremy', 'Black', 'Alive']
        },
        'Europe': {
          finished: false,
          songs: ['The Final Coutdown']
        },
        'Twisted Sister': {
          finished: false,
          songs: ['I Wanna Rock']
        },
        'Guns N Roses': {
          finished: false,
          songs: ['November Rain']
        },
        'Alice In Chains': {
          finished: false,
          songs: ['Man in the box']
        },
        'Linkin Park': {
          finished: false,
          songs: ['Faint', 'In The End']
        },
        'Motley Crue': {
          finished: false,
          songs: ['Girls Girls Girls']
        },
        'Slayer': {
          finished: false,
          songs: ['Raining Blood']
        },
        'Scorpions': {
          finished: false,
          songs: ['The Zoo', 'Send me an angel', 'Rock you like a hurricane']
        },
        'Hellowen': {
          finished: false,
          songs: ['I want out']
        }
      },
      previuslyBands: [],
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

  _getRandomBand(bands) {
    var keys = Object.keys(bands)
    var randomBand = keys[keys.length * Math.random() << 0];
    return {
      band: randomBand,
      songs: bands[randomBand].songs
    }
  }

  _generateRandomTrack() {
    const randomBand = this._getRandomBand(this.state.listOfTracks);
    const randomName = randomBand.songs[Math.floor(Math.random() * randomBand.songs.length)]

    if (this.state.passedTracks.indexOf(randomName) > -1) {
      return this._generateRandomTrack();
    }
    let newPassedTracks = [...this.state.passedTracks, randomName]
    this.setState({ passedTracks: newPassedTracks })
    return {
      band: randomBand.band,
      song: randomName
    };
  }

  async getSong() {
    const randomTrack = this._generateRandomTrack();
    const token = 'YOUR_TOKEN_HERE';
    const data = await fetch(`https://api.spotify.com/v1/search?q=${decodeURIComponent(randomTrack.band)} ${decodeURIComponent(randomTrack.song)}&type=track`,
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
