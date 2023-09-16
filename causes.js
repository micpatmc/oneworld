class Cause {
    constructor(name, charities) {
      this.name = name;
      this.charities = charities;
    }
    getName() {
        return this.name;
    }
    getCharities() {
      return this.charities;
    }
  }

  const Environmental = new Cause("Environmental", ["The Nature Conservancy", "Sierra Club", "Earth Justice"]);
  const Education = new Cause("Education", ["Save the Children", "Room to Read", "CARE"]);
  const Wildlife = new Cause("Wildlife", ["World Wildlife Fund", "World Land Trust", "The Wildlife Trust"]);
  const NaturalDisasters = new Cause("Natural Disaster", ["Salvation Army", "Red Cross", "Americares"]);

  const causes = [Environmental, Education, Wildlife, NaturalDisasters];

  function getCauses(){
    return causes;
  }