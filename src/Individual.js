function Individual(genomeSize) {
  this.fitness = 0;
  this.evaluated = false;
  this.genomes = genomeSize>0 ? new Array(genomeSize) : [];
}

// Object.defineProperties(Individual.prototype, {
//   "fitness" : {
//     get: function() {
//       return this.fitness;
//     },
//     set: function(value) {
//       this.fitness = value;
//     } 
//   },
//   "evaluated" : {
//     get: function() {
//       return this.evaluated;
//     },
//     set: function(value) {
//       this.evaluated = value;
//     }
//   },
//   "genomes" : {
//     get: function() {
//       return this.genomes;
//     },
//     set: function(value) {
//       this.genomes = value;
//     }
//   }
// });

Object.assign( Individual.prototype, {
  isIndividual: true,
  clone: function() {
    var ind = new this.constructor();
    ind.fitness = this.fitness;
    ind.evaluated = this.evaluated;
    ind.genomes = this.genomes.slice(0);
  }
});

export { Individual };