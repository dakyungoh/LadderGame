// 1. 사다리 인원과 높이 입력하기
const peoples = +process.argv[2]; //string to number
const height = +process.argv[3];
if (peoples < 2 || peoples > 8) {
  console.log(
    "peoples의 값이 2명미만이거나 8명을 초과하여 프로그램이 종료됩니다."
  );
  process.exit(1);
}
