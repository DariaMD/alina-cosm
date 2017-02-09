

function WsSwitcher(options){
  console.log('Start Swithcer!');

  var self = this
  var levels = options.levels
  this.subLevelElm = options.subLevel

  var switchBackBtn = [].slice.call(document.querySelectorAll('.switch-back'))
  var switchToStartBtn = [].slice.call(document.querySelectorAll('.switch-to-start'))

  this.levelsElms = []
  this.activeLevel = 0

  levels.forEach(function (el, i) {
    self.levelsElms.push(document.querySelector(el))
  })

  self.levelsElms.forEach(function (el, i) {
    var li = [].slice.call(el.querySelectorAll('label'))

    li.forEach(function(liEl, index) {
      liEl.addEventListener('click', function(){
        self.changeLevel.call(self, liEl, index);
      });
    })
  })


  switchBackBtn.forEach(function(el, index) {
    el.addEventListener('click', function(){
      self.levelDown.call(self, index)
    });
  })

  switchToStartBtn.forEach(function(el, index) {
    el.addEventListener('click', function(){
      self.levelReset.call(self)
    });
  })
}


WsSwitcher.prototype.changeLevel = function (elm, index) {

  if (this.activeLevel < this.levelsElms.length - 1) {
    var activeElm = this.levelsElms[this.activeLevel]
    var nextElm = this.levelsElms[this.activeLevel + 1]

    activeElm.classList.add('leave')
    nextElm.classList.remove('invis')

    this.activeLevel += 1
  }

  if (this.activeLevel < this.levelsElms.length -1 ) {
    this.showSublevel(nextElm, elm.getAttribute('for'))
  }
};


WsSwitcher.prototype.showSublevel = function (elm, atr) {
  console.log();
  var subElm = elm.querySelector('[data-subid=' + atr + ']')
  var allSubElms = [].slice.call(elm.querySelectorAll(this.subLevelElm))

  allSubElms.forEach(function (el) {
    el.classList.add('invis-total')
  })

  subElm.classList.remove('invis-total')

  console.log(allSubElms);
};


WsSwitcher.prototype.levelDown = function (index) {

  var activeElm = this.levelsElms[this.activeLevel]
  var prevElm = this.levelsElms[this.activeLevel - 1]

  activeElm.classList.add('invis')
  prevElm.classList.remove('leave')

  this.activeLevel -= 1

};

WsSwitcher.prototype.levelReset = function () {

  var activeElm = this.levelsElms[this.activeLevel]
  var firstElm = this.levelsElms[0]

  console.log(firstElm);

  firstElm.classList.remove('leave')

  for (var i = 1; i < this.levelsElms.length; i++) {
    this.levelsElms[i].classList.add('invis')
    this.levelsElms[i].classList.remove('leave')
  }

  this.activeLevel = 0
};
