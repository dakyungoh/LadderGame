// 1. 사다리 인원과 높이 입력하기
const peoples = +process.argv[2]; //string to number
const height = +process.argv[3];
if (Number.isInteger(peoples) === false || Number.isInteger(height) === false) {
  console.log("정수가 아니면 프로그램이 종료됩니다.");
  process.exit();
}
if (peoples < 2 || peoples > 8) {
  console.log(
    "peoples의 값이 2명미만이거나 8명을 초과하여 프로그램이 종료됩니다."
  );
  process.exit(1);
}

// 2. 사다리 출력하기
function printLadder(numberOfPlayers, height) {
  const length = numberOfPlayers + (numberOfPlayers - 1); // 사다리의 길이는 인원 + (인원-1)
  for (let i = 0; i < height; i++) {
    let line = "";
    for (let j = 0; j < length; j++) {
      if (j % 2 === 0) {
        line = line + "|"; // 짝수번째에는 "|" 가 출력된다.
      } else {
        line = line + (Math.random() > 0.5 ? "-" : " "); // 홀수번째에는 "-" 또는 ""가 출력된다.
      }
    }
    console.log(line);
  }
}
printLadder(peoples, height);
