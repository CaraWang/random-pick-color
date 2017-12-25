export default class extends React.Component {
  constructor (props) {
    super(props);

    let randomIndex = Math.floor(Math.random() * this.props.colors.length);
    this.state = {
      nowColor: this.props.colors[randomIndex]
    }

    this.randomColor = this.randomColor.bind(this);
  }
  randomColor() {
    let randomTime = Math.ceil(Math.random() * 100) * 50;
    let self = this;
    setInterval(() => {
      let randomIndex = Math.floor(Math.random() * this.props.colors.length);
      self.setState({ nowColor: this.props.colors[randomIndex]})
    }, randomTime)
  }
  componentDidMount() {
    this.randomColor();
  }
  render() {
    return (
      <li >
        <div style={{backgroundColor: this.state.nowColor}}></div>
        <style jsx>
          {`
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
          `}
        </style>
      </li>
    );
  }
}