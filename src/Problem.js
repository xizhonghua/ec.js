import { Individual } from './Individual.js'

function Problem() {
  this.maxGeneration = 100;
  this.bestIndividual = null;
  this.numIndividuals = 10;
  this.genomeSize = 10;
  this.populations = [];
  this.generation = 0;
}

Object.assign(Problem.prototype, {
  initPopulation: function() {
    for(var i=0;i<this.numIndividuals;++i){
      var ind = new Individual(this.genomeSize);
      for(var j=0;j<ind.genomes.length;++j){
        ind.genomes[j] = Math.random();
      }
      this.populations.push(ind);
    }
  },
  testMethod: function() {
    console.log("testMethod in Problem.js");
  },
  run: function(){
    this.testMethod();
  }
});

export { Problem };