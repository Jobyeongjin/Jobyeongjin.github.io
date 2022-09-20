// 버튼 선택
const btn = document.querySelector('#lotto-btn')

// 버튼을 클릭하면
btn.addEventListener('click', function() {
  // 컨테이너 생성
  let ballContainer = document.createElement('div')
  ballContainer.classList.add('ball-container')
  // 랜덤한 6자리의 수
  let numbers = _.sampleSize(_.range(1, 46), 6)
  // 오름차순 정렬
  numbers.sort((a, b) => a - b)

  for (i = 0; i < 6; i++) {
    // 공 생성
    let ball = document.createElement('div')
    ball.classList.add('ball')
    // 숫자 배열안의 수를 볼에 입력
    ball.innerText = numbers[i]
    // 조건에 맞게 색상 설정
    if (ball.innerText < 10) {
      ball.style.backgroundColor = '#FBB433';
    } else if (ball.innerText < 20) {
      ball.style.backgroundColor = '#3E80D6';
    } else if (ball.innerText < 30) {
      ball.style.backgroundColor = '#D25A42';
    } else if (ball.innerText < 40) {
      ball.style.backgroundColor = '#73787D';
    } else {
      ball.style.backgroundColor = '#1AAE13';
    }
    // 컨테이너 안에 공 넣기
    ballContainer.appendChild(ball)
    // 지정된 박스에 컨테이너 넣기
    let lottoBox = document.querySelector('#lotto-box')
    lottoBox.appendChild(ballContainer)
  }
});
