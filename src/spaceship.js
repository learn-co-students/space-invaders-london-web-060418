class Spaceship {
  constructor(name, crew, phasers, shields) {
    this.name = name;
    this.crew = crew;
    this.phasers = phasers;
    this.shields = shields;
    this.cloaked = false;
    this.warpDrive = "disengaged";
    this.docked = this.crew.length > 0 ? false : true;
    this.phasersCharge = "uncharged"
    this.crew.forEach(member => member.currentShip = this)
  };

  cloak(){
    this.cloaked = true
  };


}
