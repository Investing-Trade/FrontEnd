import React, { useState } from 'react';
// 이미지 경로가 assets 폴더 안에 있는지 확인하세요!
import businessMan from '../assets/bussiness-man.png'; 
import webAnalytics from '../assets/web-analytics.png';

const LoginPage = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-row items-center justify-center p-4">
      {/* 1. 메인 카드 컨테이너 */}
      <div className="bg-white rounded-2xl shadow-2xl flex flex-row w-full max-w-4xl overflow-hidden min-h-[580px]">
        
        {/* 2. 왼쪽 섹션: 서비스 소개 (Blue Gradient) */}
        <div className="hidden md:flex md:w-1/2 bg-gradient-to-b from-[#5D6DED] to-[#7199F1] p-10 text-white flex-col justify-between">
          <div >
            {/* 서비스 로고: Agbalumo 폰트 적용 */}
            <h1 className="text-5xl text-center font-agbalumo italic mb-12 tracking-tight">NewsPin</h1>
            
            {/* 이미지 배치 영역: absolute를 활용해 겹침 효과 구현 */}
            <div className="relative flex flex-row h-48 mt-10">
              {/* 캐릭터 이미지 (왼쪽 하단 레이어) */}
              <img 
                src={businessMan} 
                alt="business" 
                className="w-16 left-2 top-4 drop-shadow-lg"
              />
              
              {/* 데이터 분석 이미지 (중앙/우측 상단 레이어) */}
              <img 
                src={webAnalytics} 
                alt="graph" 
                className="w-56 z-10  right-0 top-0 drop-shadow-xl opacity-90"
              />

              {/* 배경 장식 원형 (선택 사항) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
            </div>
          </div>

          {/* 하단 설명 문구 */}
          <div className="space-y-3 mt-auto">
            <p className="text-xl font-medium leading-snug">
              <span className="font-agbalumo">NewsPin</span>은 뉴스 기반 투자 학습 플랫폼입니다.
            </p>
            <div className="text-sm opacity-90 leading-relaxed font-light">
              <p>경제 뉴스를 읽고 호재·악재를 판단하며,</p>
              <p>
                <span className="font-bold text-yellow-300">AI 피드백</span>으로 분석 감각을 키워보세요.
              </p>
              <p className="mt-2 text-xs">실제 데이터를 활용한 모의 투자로 안전한 실전 학습을 경험할 수 있습니다.</p>
            </div>
          </div>
        </div>

        {/* 3. 오른쪽 섹션: 로그인 폼 */}
        <div className="w-1/2 p-12 flex flex-col justify-center bg-white">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 tracking-tighter">로그인</h2>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            {/* 아이디 필드 */}
            <div className="space-y-2">
              <label className="block text-[16px] font-bold text-gray-700 ml-1">아이디</label>
              <div className="relative">
                <input 
                  type="text" 
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                  placeholder="아이디를 입력해주세요." 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D6DED] transition-all placeholder:text-gray-300 text-sm"
                />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400">👁️</span>
              </div>
            </div>

            {/* 비밀번호 필드 */}
            <div className="space-y-2">
              <label className="block text-[16px] font-bold text-gray-700 ml-1">비밀번호</label>
              <div className="relative">
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="비밀번호를 입력해주세요." 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5D6DED] transition-all placeholder:text-gray-300 text-sm"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                   <span className="cursor-pointer text-gray-400">👁️</span>
                   <span className="text-gray-300 font-light">|</span>
                   <span className="cursor-not-allowed text-gray-400">🚫</span>
                </div>
              </div>
            </div>

            {/* 하단 버튼 */}
            <div className="pt-6 border-t border-gray-100 mt-8">
              <button 
                type="submit" 
                className="w-full bg-[#6C7EEB] hover:bg-[#5A6CD1] text-white font-bold py-4 rounded-lg flex items-center justify-center gap-3 transition-all active:scale-[0.98] shadow-lg shadow-indigo-100"
              >
                <svg className="w-5 h-5 fill-current rotate-12" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                </svg>
                <span className="text-lg font-medium">투자 여정 시작하기</span>
              </button>
            </div>
          </form>

          {/* 하단 보조 링크 */}
          <div className="mt-10 flex justify-center items-center gap-6 text-sm font-bold text-gray-500">
            <button className="hover:text-indigo-600 transition-colors">회원가입</button>
            <span className="w-[1.5px] h-3 bg-gray-300"></span>
            <button className="hover:text-indigo-600 transition-colors">비밀번호 찾기</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;