import surveyImg1 from '@/assets/surveyImg/surveyImg1.png'
import surveyImg2 from '@/assets/surveyImg/surveyImg2.png'
import surveyImg3 from '@/assets/surveyImg/surveyImg3.png'
import surveyImg4 from '@/assets/surveyImg/surveyImg4.png'
import surveyImg5 from '@/assets/surveyImg/surveyImg5.png'

const questions = [
  {
    id: 'q1',
    backgroundImage: surveyImg1,
  },
  {
    id: 'q2',
    number: '01.',
    question: '원하는 베이스 술이 있으신가요?',
    answers: [
      { id: 'a1', text: '진', info: '강한 향과 함께 토닉 워터와 어울림' },
      { id: 'a2', text: '럼', info: '달콤하고 부드러운, 섬 기운이 풍부함' },
      { id: 'a3', text: '데킬라', info: '청량함, 레몬과 소금이 어울림' },
      { id: 'a4', text: '보드카', info: '무색무취, 깔끔하고 중립적인 맛' },
      { id: 'a5', text: '리큐르', info: '달콤하고 다양한 향을 지님' },
      { id: 'a6', text: '위스키', info: '몰트, 피트, 향신료 등 다양한 향미' },
      { id: 'a7', text: '맥주', info: '가볍고 상큼함 맛의 탄산' },
      { id: 'a8', text: '상관없음', info: '무슨 베이스이든 상관없음' },
    ],
    backgroundImage: surveyImg2,
  },
  {
    id: 'q3',
    number: '02.',
    question: '도수는 어느 정도를 원하시나요?',
    answers: [
      { id: 'a9', text: '낮은 도수', info: '(0 ~ 10℃)' },
      { id: 'a10', text: '중간 도수', info: '(10℃ ~ 20℃)' },
      { id: 'a11', text: '높은 도수', info: '20℃ 이상' },
    ],
    backgroundImage: surveyImg3,
  },
  {
    id: ' q4',
    number: '03.',
    question: '맛은 어떻게 해드릴까요?',
    answers: [
      { id: 'a12', text: '달달하게' },
      { id: 'a13', text: '새콤하게' },
      { id: 'a14', text: '씁슬하게' },
    ],
    backgroundImage: surveyImg4,
  },
  {
    id: 'q5',
    backgroundImage: surveyImg5,
  },
]

export default questions
