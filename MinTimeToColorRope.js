function minCost(colors, neededTime) {
  let stack = [];
  let cost = 0;
  for (let i = 0; i < colors.length; i++) {
    if (stack.length === 0) {
      stack.push({ color: colors[i], cost: neededTime[i] });
    } else {
      if (stack[stack.length - 1].color === colors[i]) {
        if (neededTime[i] < stack[stack.length - 1].cost) {
          cost += neededTime[i];
          continue;
        } else {
          cost += stack[stack.length - 1].cost;
          stack.pop();
          stack.push({ color: colors[i], cost: neededTime[i] });
        }
      } else {
        stack.push({ color: colors[i], cost: neededTime[i] });
      }
    }
  }

  console.log(cost);
  return cost;
}

let colors = 'aaabbbabbbb';
let neededTime = [3, 5, 10, 7, 5, 3, 5, 5, 4, 8, 1];
minCost(colors, neededTime);
