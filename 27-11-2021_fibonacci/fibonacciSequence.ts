

// return the value for the target number in the fibonacci sequence.
const sequence = (target: number): number => {
    let values = [0, 1]
    for (let i = 2; i <= target; i++) {
        values[i] = values[i - 1] + values[i - 2];
    }
    return values[target];
}

export const sequenceRecursive = (target: number): number => {
    if (target < 1) {
        return 0;
    }
    if (target <= 2) {
        return 1
    }
    return sequence(target - 1) + sequence(target - 2);
}

export default sequence;
