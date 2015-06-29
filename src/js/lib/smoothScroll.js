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
    
    this.win = { width: window.innerWidth, height: window.innerHeight };
    this.canMoveHeroImage = true;
    
    window.addEventListener('mousemove', this.throttle(this.onMove, 100));

    this.setupStyles()
    this.updateHeight()
    this.animationLoop()
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

    /*
    //TweenLite.set( $container, {
    //  y: -this.state.currentPosition
    //})
    */
    this.animFrame = requestAnimationFrame( this.animationLoop );
  },

  onScroll: function() {
    this.setState({
      nextPosition: window.pageYOffset,
      where: ''
    })
  },
  
  onMove: function (ev) {
    if(!this.canMoveHeroImage) {
      return false;
    }
    
		var xVal = (-1/(this.win.height/2)*ev.clientY + 1) / 2,
				yVal = (1/(this.win.width/2)*ev.clientX - 1) / 2,
				transX = (20/(this.win.width)*ev.clientX - 10) / 4,
				transY = (20/(this.win.height)*ev.clientY - 10) / 4,
				transZ = (100/(this.win.height)*ev.clientY - 50) / 4;
				
		var imghero = this.refs.coverEffect.getDOMNode();

		imghero.style.WebkitTransform = 'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(' + xVal + ',' + yVal + ',0,1deg)';
		imghero.style.transform = 'perspective(1000px) translate3d(' + transX + 'px,' + transY + 'px,' + transZ + 'px) rotate3d(' + xVal + ',' + yVal + ',0,1deg)';
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
        window.removeEventListener('scroll', this.onScroll, false);
    },
}

module.exports = SmoothScrollMixin