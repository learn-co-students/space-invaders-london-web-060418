class Spaceship {
  constructor(name, crew, phasers, shields, cloaked = false, warpDrive = 'disengaged', docked, phasersCharge = 'uncharged') {
    this.name = name
    this.crew = crew
    if (crew.length !== 0) {
      for (let crewMember of crew) {
        // console.log(crewMembers)
        crewMember.currentShip = this
      }
    }
    this.phasers = phasers
    this.shields = shields
    // console.log(this.pilot)
    this.cloaked = false
    this.warpDrive = 'disengaged'
    if (crew.length === 0) {
      this.docked = true
    }
    else {
      this.docked = false
    }
    this.phasersCharge = 'uncharged'
  }


}
