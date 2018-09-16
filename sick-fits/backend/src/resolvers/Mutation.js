const Mutations = {
  createDog(parent, args, ctx, info) {
    // create a dog!
    global.dogs = global.dogs || [];
    const newDog = { name: args.name };
    global.dogs.push(newDog);
    console.log(args);
    return newDog;
  },
};

module.exports = Mutations;
