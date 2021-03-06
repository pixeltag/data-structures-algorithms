const input = `2 5
1 0 5
1 1 7
1 0 3
2 1 0
2 1 1`;

function dynamicArray(n, queries) {
  const s = [];
    let lastAnswer = 0;
    const inputArray = queries.split('\n');
    const N = inputArray[0].split(' ')[0];

    for (let i = 0; i < N; i++) {
        S[i] = [];
    }

    inputArray
        .slice(1)
        .forEach(element => {
            const [q, x, y] = element.split(' ').map(Number);
            const seq = ((x ^ lastAnswer) % N);

            switch (q) {
                case 1:
                    S[seq].push(y);
                    break;
                case 2:
                    const size = S[seq].length;
                    const index = y % size;
                    lastAnswer = S[seq][index];
                    console.log(lastAnswer);
                    break;
            }
        });
    return S;
}

dynamicArray(2);
