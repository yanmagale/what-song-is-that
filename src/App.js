import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      listOfTracks: {
        'Bon Jovi': {
          finished: false,
          songs: ['Living On a Prayer', 'Bad Medicine', 'Its My Life', 'Wanted Dead or Alive', 'You Give Love A Bad Name']
        },
        'Iron Maiden': {
          finished: false,
          songs: ['The Trooper', 'Fear of the dark', 'The number of the beast', 'Run to the Hills', 'Hallowed be thy name']
        },
        'Nirvana': {
          finished: false,
          songs: ['Smells Like Teen Spirit', 'Come as You Are']
        },
        'AC/DC': {
          finished: false,
          songs: ['You shook me all night long', 'Back in Black', 'Highway to hell', 'Thunderstruck', 'T.N.T']
        },
        'Metallica': {
          finished: false,
          songs: ['Enter Sandman', 'Master of Puppets', 'Sad but true', 'Nothing else matters', 'The unforgiven']
        },
        'Pearl Jam': {
          finished: false,
          songs: ['Jeremy', 'Black', 'Alive']
        },
        'Europe': {
          finished: false,
          songs: ['The Final Countdown']
        },
        'Twisted Sister': {
          finished: false,
          songs: ['I Wanna Rock', "We're not gonna take it"]
        },
        'Guns N Roses': {
          finished: false,
          songs: ['November Rain', "Sweet Child O' Mine", 'Welcome To The Jungle']
        },
        'Alice In Chains': {
          finished: false,
          songs: ['Man in the box', 'Rooster']
        },
        'Linkin Park': {
          finished: false,
          songs: ['In The End', 'Numb']
        },
        'Slayer': {
          finished: false,
          songs: ['Raining Blood']
        },
        'Scorpions': {
          finished: false,
          songs: ['Still Loving You', 'Send me an angel', 'Rock you like a hurricane', 'Wind Of Change']
        },
        'Helloween': {
          finished: false,
          songs: ['I want out']
        },
        'The Police': {
          finished: false,
          songs: ['Message in a bottle', 'Every Breath You Take']
        },
        'Black Sabbath': {
          finished: false,
          songs: ['Iron Man', 'Paranoid', 'War Pigs']
        },
        'Ozzy Osbourne': {
          finished: false,
          songs: ['Mama im coming home', 'Crazy Train']
        },
        'Kiss': {
          finished: false,
          songs: ['Rock and roll all night', 'I love it loud', 'I was made for loving you']
        },
        'Motorhead': {
          finished: false,
          songs: ['Ace of spades']
        },
        'Lynyrd skynyrd': {
          finished: false,
          songs: ['Simple Man', 'Sweet Home Alabama', 'Free Bird']
        },
        'Dire Straits': {
          finished: false,
          songs: ['Sultans Of Swing', 'Money For Nothing']
        },
        'Whitesnake': {
          finished: false,
          songs: ['Is This Love', 'Here I Go']
        },
        'Poison': {
          finished: false,
          songs: ['Every Rose Has Its Thorn']
        },
        'Van Halen': {
          finished: false,
          songs: ['Jump']
        },
        'Led Zeppelin': {
          finished: false,
          songs: ['Stairway to Heaven', 'Whole Lotta Love', 'Immigrant Song']
        },
        'Pink Floyd': {
          finished: false,
          songs: ['Another Brick In The Wall', 'Wish You Were Here']
        },
        'Deep Purple': {
          finished: false,
          songs: ['Smoke On The Water']
        },
        '4 non blondes': {
          finished: false,
          songs: ["What's up"]
        },
        'Skid Row': {
          finished: false,
          songs: ['I Remember You', '18 And Life', 'In a Darkened Room']
        },
        'Aerosmith': {
          finished: false,
          songs: ['Dream On', 'Cryin', "I Don't Want to Miss a Thing"]
        },
        'Queen': {
          finished: false,
          songs: ['Bohemian Rhapsody', 'We Are The Champions', 'We Will Rock You', "Don't Stop Me Now", 'The Show Must Go On']
        },
        'Red Hot Chili Peppers': {
          finished: false,
          songs: ['Snow (Hey Oh)', 'Otherside', "Can't Stop"]
        },
        'Foo Fighters': {
          finished: false,
          songs: ['The Pretender', 'Everlong', 'Best Of You', 'Times Like These']
        },
        'Dio': {
          finished: false,
          songs: ['Holy Diver']
        },
        'Judas Priest': {
          finished: false,
          songs: ['Breaking The Law', 'Painkiller']
        },
        'Boston': {
          finished: false,
          songs: ['More Than A Feeling']
        },
        'Eagles': {
          finished: false,
          songs: ['Hotel California']
        },
        'The Rolling Stones': {
          finished: false,
          songs: ["(I Can't Get No) Satisfaction"]
        },
        'Journey': {
          finished: false,
          songs: ["Don't Stop Believin'", 'Separate Ways']
        },
        'Heart': {
          finished: false,
          songs: ['Alone', 'Barracuda']
        },
        'Megadeth': {
          finished: false,
          songs: ['Symphony of Destruction']
        },
        'Audioslave': {
          finished: false,
          songs: ['Like a Stone']
        },
        'Rage Against The Machine': {
          finished: false,
          songs: ['Killing In the Name']
        },
        'Joan Jett': {
          finished: false,
          songs: ["I Love Rock 'n' Roll"]
        },
        'Creed': {
          finished: false,
          songs: ['One Last Breath', 'My Sacrifice']
        },
        'Evanescence': {
          finished: false,
          songs: ['Bring Me To Life']
        },
        'U2': {
          finished: false,
          songs: ['With Or Without You']
        },
        'Ramones': {
          finished: false,
          songs: ['I Wanna Be Sedated', 'Blitzkrieg Bop']
        },
        'Green Day': {
          finished: false,
          songs: ['Basket Case', 'American Idiot']
        },
        'Mothley Crue': {
          finished: false,
          songs: ['Kickstart My Heart', 'Dr. Feelgood']
        },
        'Bryan Adams': {
          finished: false,
          songs: ['Heaven']
        },
        'Accept': {
          finished: false,
          songs: ['Balls to the Wall']
        }
      },
      previuslyBands: [],
      passedTracks: [],
      track: {},
      isShowTrack: false,
      isShowAnotherActions: false
    }
  }

  render() {
    const { track, isShowTrack, isShowAnotherActions } = this.state;
    return (
      <React.Fragment>
        <h2>What Song Is This ??</h2>
        <div className="container">
        <div className="image">
            <img src='/music-icon.png' className="song"/>
          </div>
          <div className="game">
              <div className="tips">
              Only Classic Rock Songs (60,70,80,90 e 2000)
              - Heavy Metal
              - Hard Rock
              - Trash Metal
              - Punk Metal
              - New Metal
            </div>
            <div className="actions">
              <button onClick={() => this.getSong()}>Get Music</button>
              {isShowAnotherActions && 
                <React.Fragment>
                  <button onClick={() => this.getMoreSong()}>More of this song</button>
                  <button onClick={() => this.getFullSong()}>Full Music</button>
                  <button onClick={() => this.showSongInformation()}>Show Artist</button>
                </React.Fragment>  
              }
            </div>
              <audio id="player"></audio>
              {Object.keys(track).length > 0 && isShowTrack && (
                <React.Fragment>
                  <div className="track">
                    This music is <span style={{ fontStyle: 'italic' }}>{track.name}</span> from album
                    <img src={track.album.images[1].url} />
                  </div>
                </React.Fragment>
              )}
          </div>
          <div className="image">
            <img src='/guitar.png' alt="My Custom Image" />
          </div>
          
          
        </div>
      </React.Fragment>
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

  showSongInformation() {
    this.setState({ isShowTrack: true })
  }

  getMoreSong() {
    let player = document.getElementById("player");
    player.play();
    setTimeout(() => {
      player.pause();
    }, 5000)
  }

  getFullSong() {
    let player = document.getElementById("player");
    player.play();


    player.onended = function () {
      this.resetPlayer();
    }.bind(this);

  }

  resetPlayer() {
    this.setState({ isShowTrack: false })
    this.setState({ isShowAnotherActions: false })
    let player = document.getElementById("player");
    player.currentTime = 0;
    player.src = ''
    player.pause();
  }

  async getSong() {
    this.resetPlayer();
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
        this.setState({ track: track })
        let player = document.getElementById("player");
        player.src = track.preview_url;
        player.currentTime = 0;
        player.play();

        setTimeout(() => {
          player.pause();
          this.setState({ isShowAnotherActions: true })
        }, 3000)
      }
    }
  }
}

export default App;
