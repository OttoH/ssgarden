/**
 * Provides smooth, hardware-accellerated ease-based scrolling for container
 * elements by normalizing scroll behavior across different browsers / platforms.
 * Works great for parallax, or simply browsing a document.
 *
 * @author  Christopher Pappas
 * @date    5.14.14
 */

var SmoothScrollMixin = {

  getInitialState: function() {
    return {
      friction: .8,
      nextPosition: 0,
      currentPosition: 0,
      scrollPercent: 0
    }
  },


  componentDidMount: function() {
    window.addEventListener( 'scroll', this.onScroll );
  
    this.setupStyles()
    this.updateHeight()
    this.animationLoop()
    
    this.autoPlayIntetval = window.setInterval(this.handleAutoPlayNews, 5000);
    
    this.getFlux().actions.getNewsFromFlrickr('news');
  },


  componentDidUpdate: function() {
    this.updateHeight()
  },


  setupStyles: function() {
    //this.refs.scrollContainer.getDOMNode().style.position = 'fixed'
  },


  updateHeight: function() {
    var $container = this.refs.scrollContainer.getDOMNode()
    
    $container.parentNode.style.height = $container.offsetHeight + 'px'
  },


  animationLoop: function() {
    var $container = this.refs.scrollContainer.getDOMNode();

    this.state.currentPosition += ~~(this.state.nextPosition - this.state.currentPosition) * this.state.friction
    this.state.scrollPercent    = ~~(this.state.currentPosition / (parseInt($container.parentNode.style.height) - window.innerHeight) * 100)

    this.animFrame = requestAnimationFrame( this.animationLoop );
  },

  onScroll: function() {
    this.setState({
      nextPosition: window.pageYOffset,
      where: ''
    })
  },
  
  throttle: function (fn, delay) {
		var allowSample = true;

		return function(e) {
			if (allowSample) {
				allowSample = false;
				setTimeout(function() { allowSample = true; }, delay);
				fn(e);
			}
		};
	},
  
  componentWillUnmount: function() {
        cancelAnimationFrame(this.animFrame);
        clearInterval(this.autoPlayIntetval);
        window.removeEventListener('scroll', this.onScroll, false);
    },
}

module.exports = SmoothScrollMixin