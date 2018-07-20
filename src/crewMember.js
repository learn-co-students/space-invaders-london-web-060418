class CrewMember {
  constructor(position, currentShip = false) {
    this.position = position
    if (!this.currentShip) {
      this.currentShip = 'Looking for a Rig'
    }
    else {
      this.currentShip = currentship
    }
  }

  engageWarpDrive() {
    // attackMode('Pilot', warpDrive, 'engaged')
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    } else {
      if (this.position === 'Pilot') {
        this.currentShip.warpDrive = 'engaged'
      } else {
        return 'had no effect'
      }
    }
  }


  setsInvisibility() {
    // console.log(this.position)
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    } else {
      if (this.position === 'Defender') {
        this.currentShip.cloaked = true
      } else {
        return 'had no effect'
      }
    }
  }

  chargePhasers() {
    if (this.currentShip === 'Looking for a Rig') {
      return 'had no effect'
    } else {
      if (this.position === 'Gunner') {
        this.currentShip.phasers = 'charged'
      } else {
        return 'had no effect'
      }
    }
  }
}
