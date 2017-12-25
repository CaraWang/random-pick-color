import ColorBox from '../components/colorBox';

export default class extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      colorBoxNum: 30,
      colors: [
        '#227700',
        '#77DDFF',
        '#FFB3FF',
        '#FF44AA',
        '#666666',
        '#C10066',
        '#CC0000',
        '#E63F00',
        '#EE7700',
        '#DDAA00',
        '#EEEE00',
        '#99DD00',
        '#66DD00',
        '#00DD00',
        '#00DD77',
        '#00DDAA',
        '#00DDDD',
        '#009FCC',
        '#0044BB',
        '#0000CC',
        '#4400CC',
        '#5500DD',
        '#7700BB',
        '#A500CC',
        '#CC00CC',
        '#FFFF33',
        '#FFB7DD',
        '#CCBBFF',
        '#880000',
        '#8C0044',
        '#99FFFF'
      ],
      showPick: false,
      showMerryChristmas: false,
      pickColor: ''
    }

    this.renderColorBox = this.renderColorBox.bind(this);
    this.pickColor = this.pickColor.bind(this);
  }
  renderColorBox() {
    let colorBoxs = [];
    for (let i = 0; i < this.state.colorBoxNum; i ++) {
      colorBoxs.push(<ColorBox colors={this.state.colors} key={i}/>);
    }

    return colorBoxs;
  }
  pickColor() {
    if (!this.state.showPick && this.state.colors.length > 0) {
      let tempColors = [...this.state.colors];
      let randomIndex = Math.floor(Math.random() * tempColors.length);
      tempColors.splice(randomIndex, 1);
      this.setState({
        pickColor: this.state.colors[randomIndex],
        colors: tempColors,
        showPick: true
      });
    } else {
      this.setState({showPick: false});
      if (this.state.colors.length === 0) {
        this.setState({showMerryChristmas: true});
      }
    }
  }
  render () {
    return (
      <div>
        <div className='colors' onClick={this.pickColor}>
          <div className='merry-christmas' style={{
              display: this.state.showMerryChristmas ? 'block' : 'none'
            }}>
            <div className='table'>
              <div className='table-cell'> Merry Christmas!</div>
            </div>
          </div>
          <div className='pick-color' style={{
              display: this.state.showPick ? 'block' : 'none',
              backgroundColor: this.state.pickColor
            }}>
          </div>

          <ul>
            {
              this.renderColorBox().map((colorBox) => {
                return colorBox;
              })
            }
          </ul>
        </div>
        <div className='pick-color-code' style={{
            display: this.state.showPick ? 'block' : 'none'
          }}>
          {this.state.pickColor}
        </div>
        <style jsx>
            {`
              @import url('https://fonts.googleapis.com/css?family=Merriweather');

              ul {
                margin: 0;
                padding: 0;
                list-style-type: none;
              }
              li {
                display: inline-block;
                width: 20%;
                margin: 14px 0;
              }
              li div {
                width: 50px;
                height: 50px;
                margin: auto;
              }
              .colors {
                position: relative;
                width: 480px;
                margin: 50px auto 0 auto;
              }
              .pick-color {
                position: absolute;
                width: 100%;
                height: 100%;
              }
              .pick-color-code {
                text-align: center;
                padding: 30px 0;
                font-size: 32px;
                font-family: 'Merriweather', serif;
              }
              .merry-christmas {
                position: absolute;
                width: 100%;
                height: 100%;
                font-size: 32px;
                color: #ffe445;
                background-color: #FF3333;
                font-family: 'Merriweather', serif;
              }
              .table {
                display: table;
                width: 100%;
                height: 100%;

              }
              .table-cell {
                display: table-cell;
                vertical-align: middle;
                text-align: center;
              }
            `}
          </style>
      </div>
    );
  }
}

