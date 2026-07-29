const steps = [
  {
    id: 0,
    title: "CODE Z '감염병 연구소 봉쇄 탈출!'",
    content: '<div class="story-text">' +
      '<p>2036년, 정체불명의 <span class="highlight">Z 바이러스</span>가 발생했다.</p>' +
      '<p>여러분은 감염병 연구소에 고립된 연구팀이다.<br>' +
      '연구소의 자동 봉쇄가 해제되기까지 남은 시간은 20분.</p>' +
      '<p>탈출하려면 연구소 곳곳의 자료를 분석하여 <br>' +
      '<span style="color:var(--text-highlight);">감염 경로 → 전파 특성 → 감염 확산 → 방역 전략</span>을 밝혀내고<br>' +
      '최종 보안 코드를 입력해야 한다.</p>' +
      '</div>',
    type: "info",
    answer: null
  },
  {
    id: 1,
    title: "CODE 1. 격리병동 '감염 경로를 밝혀라!'",
    content: '<p>연구소에서 발견된 감염 기록이다.</p>' +
      '<div class="table-container">' +
      '<table>' +
      '<tr><th>환자</th><th>주요 행동</th><th>감염 여부</th></tr>' +
      '<tr><td>A</td><td>감염자와 악수</td><td>감염 X</td></tr>' +
      '<tr><td style="color:var(--error-color);">B</td><td>감염자와 같은 밀폐 공간에서 2시간 대화</td><td style="color:var(--error-color);">감염 O</td></tr>' +
      '<tr><td>C</td><td>감염자가 마신 물을 마심</td><td>감염 X</td></tr>' +
      '<tr><td>D</td><td>감염자의 혈액과 접촉</td><td>감염 X</td></tr>' +
      '<tr><td>E</td><td>감염자와 야외에서 짧게 대화</td><td>감염 X</td></tr>' +
      '<tr><td style="color:var(--error-color);">F</td><td>감염자와 환기되지 않는 방에서 장시간 체류</td><td style="color:var(--error-color);">감염 O</td></tr>' +
      '</table>' +
      '</div>' +
      '<p>그런데 연구실 벽에는 다음 문장이 적혀 있다.</p>' +
      '<p style="font-family:\'Share Tech Mono\'; color: var(--accent-color); font-size:1.2rem; border-left: 2px solid var(--accent-color); padding-left: 10px;">> "보이는 접촉이 아니라, 보이지 않는 공간을 추적하라."</p>',
    type: "radio",
    options: [
      { id: "opt1", text: "① 수인성", value: "1" },
      { id: "opt2", text: "② 호흡기", value: "2" },
      { id: "opt3", text: "③ 혈액", value: "3" },
      { id: "opt4", text: "④ 매개체", value: "4" }
    ],
    answer: "2"
  },
  {
    id: 2,
    title: "CODE 2. 역학조사실 '진짜 전파자를 찾아라!'",
    content: '<p>다섯 명의 이동 기록이 발견된다.</p>' +
      '<div class="table-container" style="max-width: 500px; margin: 20px auto;">' +
      '<table>' +
      '<tr><td>09:00</td><td>A와 B 접촉</td></tr>' +
      '<tr><td>10:00</td><td>B와 C 접촉</td></tr>' +
      '<tr><td>11:00</td><td>C와 D 접촉</td></tr>' +
      '<tr><td>12:00</td><td>B와 E 접촉</td></tr>' +
      '<tr><td colspan="2"><hr style="border-color: rgba(0,255,255,0.2);"></td></tr>' +
      '<tr><td style="color:var(--error-color);">18:00</td><td style="color:var(--error-color);">B 증상 발생</td></tr>' +
      '<tr><td style="color:var(--error-color);">다음 날 09:00</td><td style="color:var(--error-color);">C 증상 발생</td></tr>' +
      '<tr><td style="color:var(--error-color);">다음 날 12:00</td><td style="color:var(--error-color);">E 증상 발생</td></tr>' +
      '</table>' +
      '</div>' +
      '<div style="background: rgba(0,0,0,0.5); padding: 15px; border-radius: 5px; margin-bottom: 20px;">' +
      '<p style="margin-top:0; color:var(--text-highlight);">[추가 연구 기록]</p>' +
      '<p>Z 바이러스는 감염 후 평균 12시간 뒤 증상이 나타난다.<br>' +
      '그러나 증상이 나타나기 6시간 전부터 다른 사람에게 전파할 수 있다.</p>' +
      '</div>' +
      '<p style="font-family:\'Share Tech Mono\'; color: var(--accent-color); font-size:1.1rem; border-left: 2px solid var(--accent-color); padding-left: 10px;">> "감염 가능 시점을 찾았다면 그 시간을 24시간제로 입력하라."</p>',
    type: "text",
    placeholder: "예) 3시면 1500입력",
    answer: "1200"
  },
  {
    id: 3,
    title: "CODE 3. 감염확산 상황실 '확산규칙을 찾아라(1)'",
    content: '<p>모니터에 다음 데이터가 나타난다.</p>' +
      '<div class="table-container" style="max-width: 400px; margin: 20px auto;">' +
      '<table>' +
      '<tr><th>시간</th><th>감염자 수</th></tr>' +
      '<tr><td>0시간</td><td>1명</td></tr>' +
      '<tr><td>6시간</td><td>3명</td></tr>' +
      '<tr><td>12시간</td><td>9명</td></tr>' +
      '<tr><td>18시간</td><td>27명</td></tr>' +
      '<tr><td style="color:var(--error-color);">24시간</td><td style="color:var(--error-color);">?</td></tr>' +
      '</table>' +
      '</div>' +
      '<p>학생들은 증가 규칙을 찾아야 한다.<br>' +
      '<span style="font-family:\'Share Tech Mono\'; font-size: 1.5rem; color:var(--text-highlight);">1 → 3 → 9 → 27 → ?</span></p>' +
      '<p>따라서 24시간 후 감염자는 몇 명인가?</p>',
    type: "text",
    placeholder: "숫자만 입력",
    answer: "81"
  },
  {
    id: 4,
    title: "CODE 4. 감염확산 상황실 '확산규칙을 찾아라(2)'",
    content: '<div class="table-container" style="max-width: 400px; margin: 20px auto;">' +
      '<table>' +
      '<tr><th>시간</th><th>감염자 수</th></tr>' +
      '<tr><td>0시간</td><td>1명</td></tr>' +
      '<tr><td>6시간</td><td>3명</td></tr>' +
      '<tr><td>12시간</td><td>9명</td></tr>' +
      '<tr><td>18시간</td><td>27명</td></tr>' +
      '<tr><td>24시간</td><td>81명</td></tr>' +
      '</table>' +
      '</div>' +
      '<p style="font-family:\'Share Tech Mono\'; color: var(--accent-color); font-size:1.1rem; border-left: 2px solid var(--accent-color); padding-left: 10px;">> "감염자 수가 아니라, 한 명이 다음 세대에 남기는 수를 입력하라."</p>' +
      '<p>따라서 한 감염자가 평균적으로 몇 명에게 전파하는 상황임을 추론한다.</p>',
    type: "text",
    placeholder: "숫자만 입력",
    answer: "3"
  },
  {
    id: 5,
    title: "CODE 5. 방역통제실 '도시를 구하라'",
    content: '<p>학생들에게 방역 자원 <span style="color:var(--text-highlight); font-weight:bold;">10포인트</span>가 주어진다.</p>' +
      '<p style="color:var(--error-color);">[조건]: 10포인트 이하를 사용하여 전파를 100% 이상 감소시켜라.</p>' +
      '<div class="table-container">' +
      '<table>' +
      '<tr><th>번호</th><th>방역 조치</th><th>비용</th><th>전파 감소 효과</th></tr>' +
      '<tr><td>①</td><td>손 씻기 캠페인</td><td>2</td><td>10%</td></tr>' +
      '<tr><td>②</td><td>실내 환기</td><td>3</td><td>35%</td></tr>' +
      '<tr><td>③</td><td>감염자 격리</td><td>4</td><td>45%</td></tr>' +
      '<tr><td>④</td><td>식수 소독</td><td>3</td><td>5%</td></tr>' +
      '<tr><td>⑤</td><td>모기 방제</td><td>4</td><td>0%</td></tr>' +
      '<tr><td>⑥</td><td>밀집 공간 제한</td><td>3</td><td>30%</td></tr>' +
      '</table>' +
      '</div>' +
      '<p>선택한 조치의 번호를 이어서 입력하세요. (예: 123)</p>',
    type: "text",
    placeholder: "오름차순으로 번호 3자리 입력",
    answer: "236"
  },
  {
    id: 6,
    title: "CODE 6. 최종단계 'Z 바이러스의 정체'",
    content: '<p>마지막 연구실에는 지금까지 얻은 코드가 표시된다.</p>' +
      '<div class="table-container" style="max-width: 300px; margin: 20px auto; text-align: center; font-family: \'Share Tech Mono\', monospace; font-size: 1.4rem; color: var(--text-highlight); border: 1px dashed var(--text-highlight); background: rgba(0,255,255,0.05);">' +
      '<p>CODE 1 = 2</p>' +
      '<p>CODE 2 = 1200</p>' +
      '<p>CODE 3 = 81</p>' +
      '<p>CODE 4 = 3</p>' +
      '<p>CODE 5 = 236</p>' +
      '</div>' +
      '<p style="font-family:\'Share Tech Mono\'; color: var(--accent-color); font-size:1.1rem; border-left: 2px solid var(--accent-color); padding-left: 10px;">> "숫자를 입력하지 마라. 숫자가 밝혀낸 바이러스의 특성을 말하라."</p>' +
      '<hr style="border-color: rgba(0,255,255,0.2); margin: 20px 0;">' +
      '<p><strong>[최종질문]: Z 바이러스의 확산을 막기 위해 가장 중요한 원칙은 무엇인가?</strong></p>' +
      '<p style="line-height: 2.5;">' +
      'Z 바이러스는 <input type="text" id="blank1" class="inline-input" style="width: 100px; padding: 5px; text-align: center; display: inline-block;">을(를) 통해 전염되므로 감염자의 증상이 나타난 뒤에만 대응해서는 부족하고 <br>' +
      '<input type="text" id="blank2" class="inline-input" style="width: 100px; padding: 5px; text-align: center; display: inline-block;">와(과) 밀집도 감소를 통해 감염 가능성을 낮추고 감염자를 빠르게 <input type="text" id="blank3" class="inline-input" style="width: 100px; padding: 5px; text-align: center; display: inline-block;">해야 한다.' +
      '</p>',
    type: "multi",
    answers: ["비말", "환기", "격리"]
  },
  {
    id: 7,
    title: "CODE 7. 연구소 봉쇄 해제",
    content: '<div class="result-screen">' +
      '<h2 style="font-family:\'Share Tech Mono\'; color: var(--success-color); font-size: 2.5rem; text-shadow: 0 0 10px rgba(51,255,51,0.5); margin-bottom:10px;">[ACCESS GRANTED]</h2>' +
      '<div style="text-align: left; background: rgba(0,255,0,0.05); padding: 30px; border-radius: 5px; margin: 20px 0; border: 1px solid rgba(0,255,0,0.3); font-family:\'Share Tech Mono\';">' +
      '<p>> Z 바이러스 분석 완료...</p>' +
      '<p>> 감염 경로 확인...</p>' +
      '<p>> 전파 특성 확인...</p>' +
      '<p>> 방역 전략 수립 완료...</p>' +
      '<p style="color: var(--text-highlight); margin-top: 20px; font-size: 1.2rem;">>> 연구소 봉쇄를 해제합니다.</p>' +
      '</div>' +
      '<p style="font-size: 1.2rem; color: #fff; margin-top:30px;">하지만 기억하십시오.</p>' +
      '<p style="font-size: 1.3rem; color: var(--error-color); text-shadow: 0 0 5px rgba(255,0,0,0.5);">좀비 바이러스는 가상이지만,<br>감염병의 확산 원리는 현실입니다.</p>' +
      '</div>',
    type: "end",
    answer: null
  }
];

let currentStep = 0;
let startTime = null;

const contentEl = document.getElementById('game-content');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');
const sysStatus = document.querySelector('.system-status');

function initGame() {
  startTime = new Date();
  renderStep();
}

function renderStep() {
  const step = steps[currentStep];
  
  // Update Progress Bar
  const progress = ((currentStep) / (steps.length - 1)) * 100;
  progressBar.style.width = progress + '%';

  // Update Buttons
  prevBtn.style.visibility = currentStep > 0 ? 'visible' : 'hidden';
  
  if (step.type === 'end') {
    nextBtn.textContent = '[순위]';
    sysStatus.textContent = 'SYSTEM UNLOCKED';
    sysStatus.style.color = 'var(--success-color)';
  } else {
    nextBtn.textContent = '[다음]';
    sysStatus.textContent = 'LOCKDOWN ACTIVE';
    sysStatus.style.color = 'var(--error-color)';
  }

  // Build Content HTML
  let html = '';
  
  if (step.title) {
    html += '<h2 class="step-title">' + step.title + '</h2>';
  }
  
  html += '<div class="step-content">' + step.content + '</div>';

  // Build Input Area
  if (step.type !== 'info' && step.type !== 'end') {
    html += '<div class="input-area" id="input-area">';
    if (step.type === 'radio') {
      html += '<div class="radio-group">';
      step.options.forEach(opt => {
        html += '<label class="radio-label">' +
          '<input type="radio" name="answer" value="' + opt.value + '">' +
          opt.text +
          '</label>';
      });
      html += '</div>';
    } else if (step.type === 'text') {
      html += '<div class="input-group">' +
        '<input type="text" id="answer-input" placeholder="' + step.placeholder + '" autocomplete="off">' +
        '</div>';
    }
    html += '<div id="error-msg" class="error-msg">>> ERROR: INCORRECT DATA. TRY AGAIN.</div>';
    html += '</div>';
  }

  contentEl.innerHTML = html;
  
  // Force reflow for animation
  contentEl.style.animation = 'none';
  contentEl.offsetHeight; 
  contentEl.style.animation = null;
  
  // Auto-focus input
  const input = document.getElementById('answer-input');
  if (input) input.focus();
}

function checkAnswer() {
  const step = steps[currentStep];
  const inputArea = document.getElementById('input-area');
  const errorMsg = document.getElementById('error-msg');
  
  if (errorMsg) errorMsg.classList.remove('show-error');
  
  if (step.type === 'info') {
    return true;
  }
  
  if (step.type === 'radio') {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (!selected) {
      showError(inputArea, errorMsg);
      return false;
    }
    if (selected.value === step.answer) {
      return true;
    }
  } else if (step.type === 'text') {
    const input = document.getElementById('answer-input').value.trim();
    if (step.id === 5) {
      // Allow any order like 236, 632, 326
      const inputDigits = input.replace(/[^0-9]/g, '').split('').sort().join('');
      const sortedAnswer = step.answer.split('').sort().join('');
      if (inputDigits === sortedAnswer) return true;
    } else {
      if (input === step.answer) return true;
    }
  } else if (step.type === 'multi') {
    const b1 = document.getElementById('blank1').value.trim();
    const b2 = document.getElementById('blank2').value.trim();
    const b3 = document.getElementById('blank3').value.trim();
    
    if (b1 === step.answers[0] && b2 === step.answers[1] && b3 === step.answers[2]) {
      return true;
    }
  }
  
  showError(inputArea, errorMsg);
  return false;
}

function showError(container, msgEl) {
  if (!container) return;
  container.classList.remove('shake');
  void container.offsetWidth; // trigger reflow
  container.classList.add('shake');
  if (msgEl) msgEl.classList.add('show-error');
  
  // Highlight inputs in red
  const inputs = container.querySelectorAll('input[type="text"]');
  inputs.forEach(input => {
    input.style.borderColor = 'var(--error-color)';
    setTimeout(() => {
      input.style.borderColor = 'var(--glass-border)';
    }, 800);
  });
}

function showRank() {
  const endTime = new Date();
  const timeDiff = Math.floor((endTime - startTime) / 1000); // in seconds
  const minutes = Math.floor(timeDiff / 60);
  const seconds = timeDiff % 60;
  
  const now = new Date();
  const dateStr = now.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' });
  
  contentEl.innerHTML = '<div class="result-screen" style="animation: fadeIn 1s ease-out;">' +
    '<h2 class="step-title" style="border:none; color:var(--success-color); font-size:2rem; margin-bottom: 20px;">MISSION ACCOMPLISHED</h2>' +
    '<div class="time-text" style="margin: 10px 0;">' +
    'TIME ELAPSED: <span style="color: var(--text-highlight); font-weight:bold;">' + minutes + '분 ' + seconds + '초</span>' +
    '</div>' +
    '<div id="rank-form" style="margin-top:30px; display:flex; gap:15px; flex-direction:column; align-items:center; background:rgba(0,0,0,0.4); padding:20px; border:1px solid var(--glass-border);">' +
    '<p style="color:#a0c4c4; font-family:\'Share Tech Mono\'; margin:0;">요원 이름을 입력하여 순위를 등록하세요.</p>' +
    '<input type="text" id="player-name" placeholder="이름 입력" style="max-width:250px; text-align:center;">' +
    '<p id="rank-error" style="color:var(--error-color); font-family:\'Share Tech Mono\'; margin:0; display:none;">이미 연구소를 탈출했습니다.</p>' +
    '<button id="submit-rank-btn" style="width:250px; padding:12px;">순위 등록</button>' +
    '</div>' +
    '</div>';
  
  prevBtn.style.display = 'none';
  nextBtn.style.display = 'none';
  progressBar.style.width = '100%';
  progressBar.style.backgroundColor = 'var(--success-color)';
  progressBar.style.boxShadow = '0 0 15px var(--success-color)';
  sysStatus.textContent = 'SYSTEM OFFLINE';

  // Timeout slightly to ensure DOM is ready
  setTimeout(() => {
    const submitBtn = document.getElementById('submit-rank-btn');
    if(submitBtn) {
      submitBtn.addEventListener('click', () => {
        const nameInput = document.getElementById('player-name').value.trim();
        if (!nameInput) return;
        const errEl = document.getElementById('rank-error');
        errEl.style.display = 'none';

        if (nameInput.toLowerCase() === 'reset all') {
          localStorage.removeItem('escape_ranks');
          alert('모든 랭킹 데이터가 초기화되었습니다.');
          document.getElementById('player-name').value = '';
          return;
        }
        
        const lowerInput = nameInput.toLowerCase();
        const swears = ['씨발', '시발', '병신', '새끼', '좆', '존나', '지랄', '미친', '염병', '씨바', 'fuck', 'shit', 'bitch', 'asshole', 'cunt', 'motherfucker', '니미', '씹'];
        const inappropriates = ['섹스', '보지', '자지', '창녀', '걸레', 'sex', 'porn', 'dick', 'pussy', 'slut', '야르', '개', '느금마', '느그애비', '애미', '애비', '느그매', '일베', '메갈', '창놈', '패륜'];
        
        let hasSwear = false;
        for (let word of swears) {
          if (lowerInput.includes(word)) {
            hasSwear = true;
            break;
          }
        }
        
        if (hasSwear) {
          errEl.textContent = '욕설은 입력할 수 없습니다.';
          errEl.style.display = 'block';
          document.getElementById('player-name').value = '';
          return;
        }
        
        let hasInapp = false;
        for (let word of inappropriates) {
          if (lowerInput.includes(word)) {
            hasInapp = true;
            break;
          }
        }
        
        if (hasInapp) {
          errEl.textContent = '입력할 수 없습니다.';
          errEl.style.display = 'block';
          document.getElementById('player-name').value = '';
          return;
        }
        
        let ranks = JSON.parse(localStorage.getItem('escape_ranks') || '[]');
        
        // Check for duplicates
        const cleanName = (str) => str.replace(/[^가-힣a-zA-Z]/g, '').toLowerCase();
        const inputBase = cleanName(nameInput);
        
        const isDuplicate = ranks.some(r => {
          const rBase = cleanName(r.name);
          if (inputBase === '' || rBase === '') {
            return r.name === nameInput;
          }
          return rBase === inputBase;
        });
        
        if (isDuplicate) {
          errEl.textContent = '이미 연구소를 탈출했습니다.';
          errEl.style.display = 'block';
          const formEl = document.getElementById('rank-form');
          formEl.classList.remove('shake');
          void formEl.offsetWidth; // trigger reflow
          formEl.classList.add('shake');
          return;
        }

        const playerName = nameInput;
        const displayTime = minutes + '분 ' + seconds + '초';
        const record = { name: playerName, time: timeDiff, displayTime: displayTime, date: dateStr };
        
        ranks.push(record);
        ranks.sort((a, b) => a.time - b.time);
        ranks = ranks.slice(0, 5);
        localStorage.setItem('escape_ranks', JSON.stringify(ranks));
        
        let boardHtml = '<div class="result-screen" style="animation: fadeIn 0.5s ease-out; width:100%;">' +
          '<h2 class="step-title" style="border:none; color:var(--text-highlight); font-size:2rem; margin-bottom: 20px;">[ TOP 5 RANKING ]</h2>' +
          '<div class="table-container" style="max-width:500px; width:100%; margin:0 auto;">' +
          '<table>' +
          '<tr><th style="text-align:center;">순위</th><th>이름</th><th>탈출시간</th><th>날짜</th></tr>';
          
        ranks.forEach((r, idx) => {
          boardHtml += '<tr>' +
            '<td style="text-align:center;">' + (idx + 1) + '</td>' +
            '<td>' + r.name + '</td>' +
            '<td style="color:var(--success-color);">' + r.displayTime + '</td>' +
            '<td style="font-size:0.9rem;">' + r.date + '</td>' +
            '</tr>';
        });
        
        boardHtml += '</table></div>' +
          '<button onclick="location.reload()" style="margin-top:30px;">RESTART SYSTEM</button>' +
          '</div>';
          
        contentEl.innerHTML = boardHtml;
      });
    }
  }, 100);
}

prevBtn.addEventListener('click', () => {
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentStep === steps.length - 1) {
    showRank();
    return;
  }
  
  if (checkAnswer()) {
    currentStep++;
    renderStep();
  }
});

// Allow Enter key to trigger next
document.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const step = steps[currentStep];
    if (step && step.type !== 'radio') {
      const submitBtn = document.getElementById('submit-rank-btn');
      if (submitBtn) {
        submitBtn.click();
      } else {
        nextBtn.click();
      }
    }
  }
});

// Start the game
initGame();
