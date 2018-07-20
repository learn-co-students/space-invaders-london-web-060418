class CrewMember {
  constructor(position) {
    this.position = position;
    this.currentShip = "Looking for a Rig"
  };

  engageWarpDrive() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    }
  };

  chargePhasers() {
    if (this.currentShip === "Looking for a Rig") {
      return "had no effect"
    }
  };

  setsInvisibility() {
    if (this.currentShip === "Looking for a Rig" || this.position !== 'Defender') {
      return "had no effect"
    } else {
      this.currentShip.cloak()
    }
  };

}
