//  https://leetcode.com/problems/destination-city/description/?envType=daily-question&envId=2023-12-15

let paths = [
  ['London', 'New York'],
  ['New York', 'Lima'],
  ['Lima', 'Sao Paulo'],
];

function destinationCity(paths) {
  let routeMap = new Map();
  let uniqueCities = [...new Set(paths.flat(Infinity))];
  for (let path of paths) {
    routeMap.set(path[0], path[1]);
  }

  for (let city of uniqueCities) {
    if (!routeMap.has(city)) return city;
  }
}

console.log(destinationCity(paths));
console.log(
  destinationCity([
    ['B', 'C'],
    ['D', 'B'],
    ['C', 'A'],
  ])
);
console.log(destinationCity([['a', 'z']]));
